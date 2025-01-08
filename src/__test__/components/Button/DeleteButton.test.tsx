import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from '@/components/Button/DeleteButton';

describe('DeleteButton', () => {
  const mockOnDelete = jest.fn();
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('onClick이 주어진 경우, 버튼 클릭 시 onClick이 함께 실행되어야 한다.', () => {
    render(
      <DeleteButton
        type='review'
        buttonText='Delete Review'
        onDelete={mockOnDelete}
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Delete Review');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
