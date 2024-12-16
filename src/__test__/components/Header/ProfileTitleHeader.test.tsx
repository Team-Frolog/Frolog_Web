import ProfileTitleHeader from '@/components/Header/ProfileTitleHeader';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter, usePathname } from 'next/navigation';
import { SVGProps } from 'react';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock('public/icons', () => ({
  BackIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='mock-back-icon' {...props} />
  ),
}));

describe('ProfileTitleHeader', () => {
  const mockBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ back: mockBack });
  });

  test('QUIT 페이지에서 올바른 타이틀을 렌더링한다.', () => {
    (usePathname as jest.Mock).mockReturnValue('/quit');

    render(<ProfileTitleHeader />);

    expect(
      screen.getByRole('heading', { name: /정말 탈퇴하나요\?/i })
    ).toBeInTheDocument();
  });

  test('TERMS 페이지에서 올바른 타이틀을 렌더링한다.', () => {
    (usePathname as jest.Mock).mockReturnValue('/terms');

    render(<ProfileTitleHeader />);

    expect(
      screen.getByRole('heading', { name: /이용약관/i })
    ).toBeInTheDocument();
  });

  test('INSTALL 페이지에서 올바른 타이틀을 렌더링한다.', () => {
    (usePathname as jest.Mock).mockReturnValue('/how-to-install');

    render(<ProfileTitleHeader />);

    expect(
      screen.getByRole('heading', { name: /프롤로그 를 앱으로 즐기세요!/i })
    ).toBeInTheDocument();
  });

  test('뒤로가기 버튼을 클릭하면 router.back이 호출된다.', async () => {
    (usePathname as jest.Mock).mockReturnValue('/some-page');

    render(<ProfileTitleHeader />);

    const backButton = screen.getByRole('button');
    await userEvent.click(backButton);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  test('매칭되지 않는 경로일 경우 타이틀이 렌더링되지 않는다.', () => {
    (usePathname as jest.Mock).mockReturnValue('/unknown');

    render(<ProfileTitleHeader />);

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });
});
