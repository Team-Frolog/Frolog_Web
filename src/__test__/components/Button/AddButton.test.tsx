import { SVGProps } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { CATEGORY } from '@/constants/category';
import AddButton from '@/components/Button/AddButton';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('public/icons', () => ({
  AddIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='add-icon' {...props} />
  ),
}));

describe('AddButton', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  test('route가 주어지면 클릭 시 route로 이동해야 한다.', () => {
    const route = '/test-route';
    render(<AddButton route={route} text='Add Book' />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockPush).toHaveBeenCalledWith(route);
  });

  test('onClick 핸들러가 주어지면 클릭 시 onClick 핸들러가 실행되어야 한다.', () => {
    const onClickMock = jest.fn();
    render(<AddButton text='Add Book' onClick={onClickMock} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClickMock).toHaveBeenCalled();
  });

  test('categoryId가 주어지면 버튼 테마가 카테고리에 맞게 설정되어야 한다.', () => {
    const categoryId = 'art';
    render(<AddButton text='Add Book' categoryId={categoryId} />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(`bg-category-bg-${categoryId}`);
    expect(button).toHaveClass(`text-category-text-${categoryId}`);

    const icon = screen.getByTestId('add-icon');
    expect(icon).toHaveAttribute('fill', CATEGORY[categoryId].text);
  });
});
