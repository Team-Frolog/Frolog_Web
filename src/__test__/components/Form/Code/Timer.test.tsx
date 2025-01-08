import React from 'react';
import { render, screen, act } from '@testing-library/react';
import * as authStore from '@/store/authStore';
import Timer from '@/components/Form/Code/Timer';

jest.mock('@/store/authStore', () => ({
  useCodeTime: jest.fn(),
  useAuthActions: jest.fn(() => ({ setEndTime: jest.fn() })),
}));

describe('Timer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('expiredTime=null인 경우, 렌더링하지 않는다.', () => {
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(null);

    render(<Timer />);

    expect(screen.queryByText(/:/)).toBeNull();
  });

  test('expiredTime을 기반으로 초기값이 설정되어야 한다.', () => {
    const expiredTime = Date.now() + 3 * 60 * 1000;
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(expiredTime);

    render(<Timer />);

    const minutes = Math.floor((2 * 60 * 1000) / (1000 * 60));
    const seconds = Math.floor((59 * 1000) / 1000) % 60;

    expect(
      screen.getByText(`${minutes}:${String(seconds).padStart(2, '0')}`)
    ).toBeInTheDocument();
  });

  test('1초마다 남은 시간이 업데이트 되어야 한다.', () => {
    jest.useFakeTimers();
    const expiredTime = Date.now() + 3 * 1000;
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(expiredTime);

    render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('0:02')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('0:01')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText('0:00')).toBeInTheDocument();
  });

  test('남은 시간이 0에 도달하는 순간 setEndTime을 호출해야 한다.', () => {
    jest.useFakeTimers();
    const expiredTime = Date.now() + 1000;
    const setEndTimeMock = jest.fn();
    jest.spyOn(authStore, 'useCodeTime').mockReturnValue(expiredTime);
    jest.spyOn(authStore, 'useAuthActions').mockReturnValue({
      setEndTime: setEndTimeMock,
    } as unknown as authStore.AuthActions);

    render(<Timer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(setEndTimeMock).toHaveBeenCalledWith(0);
  });
});
