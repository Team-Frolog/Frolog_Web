import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButton from '@/components/Form/Button/ToggleButton';

describe('ToggleButton', () => {
  const mockHandleChange = jest.fn();

  beforeEach(() => {
    mockHandleChange.mockClear();
  });

  test('theme을 전달하지 않은 경우, light theme이 적용되어야 한다.', () => {
    render(<ToggleButton isPublic handleChange={mockHandleChange} />);

    expect(screen.getByText('공개')).toBeInTheDocument();
    const input = screen.getByRole('checkbox');
    expect(input).toBeChecked();
    expect(input).toHaveClass('bg-gray-400');
  });

  test('theme="dark"인 경우, dark theme이 적용되어야 한다.', () => {
    render(
      <ToggleButton
        isPublic={false}
        handleChange={mockHandleChange}
        theme='dark'
      />
    );

    expect(screen.getByText('비공개')).toBeInTheDocument();
    const input = screen.getByRole('checkbox');
    expect(input).not.toBeChecked();
    expect(input).toHaveClass('bg-gray-700');
  });

  test('버튼을 클릭한 경우 handleChange를 호출해야 한다.', () => {
    render(<ToggleButton isPublic handleChange={mockHandleChange} />);

    const input = screen.getByRole('checkbox');
    fireEvent.click(input);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });

  test('isPublic 값에 따라 적절한 라벨을 렌더링 해야한다.', () => {
    const { rerender } = render(
      <ToggleButton isPublic handleChange={mockHandleChange} />
    );

    expect(screen.getByText('공개')).toBeInTheDocument();

    rerender(<ToggleButton isPublic={false} handleChange={mockHandleChange} />);
    expect(screen.getByText('비공개')).toBeInTheDocument();
  });
});
