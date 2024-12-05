import { render, screen, fireEvent } from '@testing-library/react';
import CheckButton from '@/components/Button/CheckButton';
import { SVGProps } from 'react';

jest.mock('public/icons', () => ({
  CircleCheckIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='circle-check-icon' {...props} />
  ),
  CircleUncheckIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='circle-uncheck-icon' {...props} />
  ),
}));

describe('CheckButton', () => {
  test('isChecked=true 이면, 아이콘이 CircleCheckIcon로 바뀌어야 한다.', () => {
    render(<CheckButton isChecked />);

    const circleCheckIcon = screen.getByTestId('circle-check-icon');

    expect(circleCheckIcon).toBeInTheDocument();
  });

  test('isChecked=false 이면, 아이콘이 CircleUncheckIcon로 바뀌어야 한다.', () => {
    render(<CheckButton isChecked={false} />);

    const circleUncheckIcon = screen.getByTestId('circle-uncheck-icon');

    expect(circleUncheckIcon).toBeInTheDocument();
    expect(circleUncheckIcon).toHaveAttribute('fill', '#727484');
  });

  test('onClick 핸들러를 전달한 경우, 버튼 클릭 시 동작해야 한다.', () => {
    const onClick = jest.fn();
    render(<CheckButton isChecked onClick={onClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
