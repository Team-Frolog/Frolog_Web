import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tap from '@/components/Tap/Tap';

describe('Tap Component', () => {
  const mockTaps = [
    { id: 1, label: 'tab1', name: 'Tab 1' },
    { id: 2, label: 'tab2', name: 'Tab 2' },
  ];
  const mockOnChangeTap = jest.fn();

  test('defaultTap에 해당하는 탭은 초기에 하이라이팅 되어야 한다.', () => {
    render(
      <Tap
        taps={mockTaps}
        currentTap='tab1'
        defaultTap='tab1'
        onChangeTap={mockOnChangeTap}
      />
    );

    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');
    const bar = screen.getByTestId('tap-bar');

    expect(bar).toHaveClass('left-0');
    expect(tab1).toHaveClass('text-gray-900');
    expect(tab2).toHaveClass('text-gray-500');
  });

  test('currentTab에 해당하는 탭은 하이라이팅 되어야 한다.', () => {
    render(
      <Tap
        taps={mockTaps}
        currentTap='tab2'
        defaultTap='tab1'
        onChangeTap={mockOnChangeTap}
      />
    );

    const tab1 = screen.getByText('Tab 1');
    const tab2 = screen.getByText('Tab 2');
    const bar = screen.getByTestId('tap-bar');

    expect(bar).toHaveClass('left-1/2');
    expect(tab1).toHaveClass('text-gray-500');
    expect(tab2).toHaveClass('text-gray-900');
  });

  test('탭을 클릭하면, onChangeTap을 호출해야한다.', () => {
    render(
      <Tap
        taps={mockTaps}
        currentTap='tab1'
        defaultTap='tab1'
        onChangeTap={mockOnChangeTap}
      />
    );

    const tab2 = screen.getByText('Tab 2');
    fireEvent.click(tab2);

    expect(mockOnChangeTap).toHaveBeenCalledWith('tab2');
  });
});