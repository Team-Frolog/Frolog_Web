import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import BackButton from '@/components/Button/BackButton';
import { SVGProps } from 'react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('public/icons', () => ({
  BackIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='back-icon' {...props} />
  ),
  WellBackIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='well-back-icon' {...props} />
  ),
}));

describe('BackButton', () => {
  const mockRouterBack = jest.fn();
  const mockOnClick = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ back: mockRouterBack });
    jest.clearAllMocks();
  });

  test('버튼은 props를 넘기지 않았을 때 default props로 렌더링 되어야한다.', () => {
    render(<BackButton />);

    const button = screen.getByRole('button');
    const backIcon = screen.getByTestId('back-icon');

    expect(button).toBeInTheDocument();
    expect(backIcon).toHaveAttribute('fill', '#B3B6C4');
  });

  test('onClick 핸들러가 주어지지 않은 경우, 버튼 클릭 시 router.back이 실행되어야 한다.', () => {
    render(<BackButton />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockRouterBack).toHaveBeenCalledTimes(1);
  });

  test('onClick 핸들러가 주어진 경우, 버튼 클릭 시 onClick 핸들러가 실행되어야 한다.', () => {
    render(<BackButton onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockRouterBack).not.toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('type을 변경한 경우, 버튼이 변경되어야 한다.', () => {
    render(<BackButton type='green' />);

    const wellBackIcon = screen.getByTestId('well-back-icon');

    expect(wellBackIcon).toBeInTheDocument();
  });

  test('extraClass가 제공된 경우, 추가적으로 클래스가 적용되어야 한다.', () => {
    const extraClass = 'custom-class';
    render(<BackButton extraClass={extraClass} />);

    const button = screen.getByRole('button');

    expect(button).toHaveClass('custom-class');
  });

  test('safeArea가 주어진 경우, id로 적용되어야 한다.', () => {
    const safeArea = 'back-button';
    render(<BackButton safeArea={safeArea} />);

    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('id', safeArea);
  });
});
