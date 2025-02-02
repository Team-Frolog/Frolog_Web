import { render, screen } from '@testing-library/react';
import { getButtonColor } from '@/utils/getButtonColor';
import LinkButton from '@/components/Button/LinkButton';
import { useSearchParams } from 'next/navigation';

jest.mock('@/utils/getButtonColor', () => ({
  getButtonColor: jest.fn(() => 'button-normal'),
}));

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
}));

describe('LinkButton', () => {
  beforeEach(() => {
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn().mockReturnValue('mockedTapKey'),
    });
  });
  test('props로 전달한 route가 적절히 등록되어야 한다.', () => {
    render(
      <LinkButton route='/test-route' theme='normal'>
        Test Link
      </LinkButton>
    );

    const linkElement = screen.getByRole('link', { name: 'Test Link' });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/test-route?nav=mockedTapKey');
  });

  test('theme을 전달한 경우 적절한 button color가 적용되어야 한다.', () => {
    (getButtonColor as jest.Mock).mockReturnValue('button-light');
    render(
      <LinkButton route='/test-route' theme='light'>
        Light Theme Link
      </LinkButton>
    );

    const linkElement = screen.getByRole('link', { name: 'Light Theme Link' });

    expect(linkElement).toHaveClass('button-light');
  });

  test('disabled=true 인 경우, disabed class가 적용되어야 한다.', () => {
    render(
      <LinkButton route='/test-route' disabled>
        Disabled Link
      </LinkButton>
    );

    const linkElement = screen.getByRole('link', { name: 'Disabled Link' });

    expect(linkElement).toHaveClass('button-disabled');
  });

  test('disabled=false 인 경우, disabed class가 적용되지 않아야 한다.', () => {
    render(
      <LinkButton route='/test-route' disabled={false}>
        Enabled Link
      </LinkButton>
    );

    const linkElement = screen.getByRole('link', { name: 'Enabled Link' });

    expect(linkElement).not.toHaveClass('button-disabled');
  });

  test('extraClass가 제공된 경우, 추가적으로 클래스가 적용되어야 한다.', () => {
    render(
      <LinkButton route='/test-route' extraClass='extra-class'>
        Extra Class Link
      </LinkButton>
    );

    const linkElement = screen.getByRole('link', { name: 'Extra Class Link' });

    expect(linkElement).toHaveClass('extra-class');
  });
});
