import LikeButton from '@/components/Button/LikeButton';
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock('public/icons', () => ({
  HeartFilledIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid='heart-filled-icon' {...props} />
  ),
  HeartIcon: (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid='heart-icon' {...props} />
  ),
}));

describe('LikeButton', () => {
  const mockOnClickLike = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('isLiked=true 이면, HeartFilledIcon이 나타나야 한다.', () => {
    render(<LikeButton isLiked likeCount={10} onClickLike={mockOnClickLike} />);

    const heartFilledIcon = screen.getByTestId('heart-filled-icon');
    const likeCount = screen.getByText('10');

    expect(heartFilledIcon).toBeInTheDocument();
    expect(likeCount).toBeInTheDocument();
  });

  test('isLiked=false 이면, HeartIcon이 나타나야 한다.', () => {
    render(
      <LikeButton isLiked={false} likeCount={5} onClickLike={mockOnClickLike} />
    );

    const heartIcon = screen.getByTestId('heart-icon');
    const likeCount = screen.getByText('5');

    expect(heartIcon).toBeInTheDocument();
    expect(likeCount).toBeInTheDocument();
  });

  test('버튼이 클릭되면, onClickLike이 실행되어야 한다.', () => {
    render(
      <LikeButton isLiked={false} likeCount={3} onClickLike={mockOnClickLike} />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockOnClickLike).toHaveBeenCalledTimes(1);
  });
});
