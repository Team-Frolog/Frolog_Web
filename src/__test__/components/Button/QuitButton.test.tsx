import { SVGProps } from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuitButton from '@/components/Button/QuitButton';

jest.mock('public/icons', () => ({
  CancelIcon: (props: SVGProps<SVGSVGElement>) => (
    <svg data-testid='quit-icon' {...props} />
  ),
}));

describe('QuitButton', () => {
  test('props로 전달한 route가 href에 적용되어야 한다.', () => {
    render(<QuitButton route='/test' classes='cursor-pointer' />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/test');
  });

  it('props로 전달한 classes가 className에 적용되어야 한다.', () => {
    render(<QuitButton route='/test' classes='cursor-pointer' />);

    const link = screen.getByRole('link');

    expect(link).toHaveClass('cursor-pointer');
  });
});