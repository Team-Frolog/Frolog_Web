import { render, screen } from '@testing-library/react';
import MajorTagList from '@/components/Tag/MajorTagList';

describe('MajorTagList', () => {
  const mockTags = [
    { id: 'easy', value: '완독하기 쉬운' },
    { id: 'smart', value: '똑똑해지는' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('tagKeys가 주어진 경우, 해당 태그가 렌더링되어야 한다.', () => {
    render(<MajorTagList type='pros' tagKeys={['easy', 'smart']} />);

    expect(screen.getByText('장점 키워드')).toBeInTheDocument();

    mockTags.forEach((tag) => {
      expect(screen.getByText(tag.value)).toBeInTheDocument();
    });
  });

  test('tagKeys=undefined 인 경우, fallback 메시지를 렌더링해야 한다.', () => {
    render(<MajorTagList type='cons' tagKeys={undefined} />);

    expect(screen.getByText('단점 키워드')).toBeInTheDocument();

    expect(
      screen.getByText('첫 리뷰 작성자가 되어보세요!')
    ).toBeInTheDocument();
  });

  test('tagKeys가 빈 배열인 경우, fallback 메시지를 렌더링해야 한다.', () => {
    render(<MajorTagList type='pros' tagKeys={[]} />);

    expect(
      screen.getByText('첫 리뷰 작성자가 되어보세요!')
    ).toBeInTheDocument();
  });
});
