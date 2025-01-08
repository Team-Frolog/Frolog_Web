import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button/Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('버튼이 클릭되면 onClick 핸들러를 실행한다.', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('버튼이 disabled 인 경우, 클릭이 동작하지 않아야 한다.', () => {
    const handleClick = jest.fn();

    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('버튼에는 props로 전달한 type이 적용되어야 한다.', () => {
    const type = 'submit';

    render(<Button type={type}>Submit</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('type', 'submit');
  });

  test('theme이 전달되면 적절한 class가 적용되어야 한다.', () => {
    const theme = 'error';

    render(<Button theme={theme}>Error Button</Button>);
    const button = screen.getByRole('button');

    expect(button).toHaveClass('button-error');
  });
});
