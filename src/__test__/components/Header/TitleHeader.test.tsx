import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import TitleHeader from '@/components/Header/TitleHeader';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/modules/BottomSheet', () => ({
  bottomSheet: {
    open: jest.fn(),
  },
}));

jest.mock('@/components/Button/BackButton', () => () => (
  <button
    type='button'
    onClick={() => useRouter().back()}
    data-testid='back button'
  >
    Mock Back Button
  </button>
));

describe('TitleHeader', () => {
  const mockBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });
  });

  test('뒤로가기 버튼이 정상적으로 동작한다.', async () => {
    render(<TitleHeader type='default' title='타이틀' theme='light' />);

    const backButton = screen.getByTestId('back button');
    await userEvent.click(backButton);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  test('isDisabled=true 인 경우, 추가 버튼이 동작하지 않아야 한다.', async () => {
    const mockOnClick = jest.fn();
    render(
      <TitleHeader
        type='edit'
        title='타이틀'
        theme='light'
        onClick={mockOnClick}
        isDisabled
      />
    );

    const button = screen.getByRole('button', { name: /저장/i });
    expect(button).toHaveClass('pointer-events-none opacity-50');

    await userEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('추가 버튼이 정상적으로 동작한다.', async () => {
    const mockOnClick = jest.fn();
    render(
      <TitleHeader
        type='default'
        title='타이틀'
        theme='light'
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button', { name: /수정/i });
    await userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
