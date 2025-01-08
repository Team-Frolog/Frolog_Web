import Tag from '@/components/Tag/Tag';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Tag Component', () => {
  const mockOnClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('size="small"이 주어진 경우, 적절한 클래스가 적용되어야 한다.', () => {
    render(<Tag tagValue='테스트 태그' size='small' type='pros' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('tag-size-small');
  });

  test('size="big"이 주어진 경우, 적절한 클래스가 적용되어야 한다.', () => {
    render(<Tag tagValue='테스트 태그' size='big' type='pros' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('tag-size-big');
  });

  test('태그가 선택되지 않은 경우, default 테마가 적용되어야 한다.', () => {
    render(
      <Tag tagValue='테스트 태그' size='big' type='pros' isSelected={false} />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('default-tag');
  });

  test('type="default"인 경우, default 테마가 적용되어야 한다.', () => {
    render(
      <Tag
        tagValue='테스트 태그'
        size='big'
        type='default'
        isSelected={false}
      />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('default-tag');
  });

  test('태그가 선택된 경우, type에 맞는 테마가 적용되어야 한다.', () => {
    render(<Tag tagValue='테스트 태그' size='big' type='pros' isSelected />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('pro-tag');
  });

  test('태그가 선택된 경우, type에 맞는 테마가 적용되어야 한다.', () => {
    render(<Tag tagValue='테스트 태그' size='big' type='cons' isSelected />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('con-tag');
  });

  test('onClick이 주어진 경우, 버튼 클릭 시 onClick을 호출해야 한다.', () => {
    render(
      <Tag
        tagValue='테스트 태그'
        size='big'
        type='pros'
        onClick={mockOnClick}
      />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('onClick 전달 여부에 따라 적절한 cursor를 적용해야 한다.', () => {
    const { rerender } = render(
      <Tag tagValue='테스트 태그' size='big' type='pros' />
    );
    const buttonWithoutOnClick = screen.getByRole('button');
    expect(buttonWithoutOnClick).toHaveClass('cursor-default');

    rerender(
      <Tag
        tagValue='테스트 태그'
        size='big'
        type='pros'
        onClick={mockOnClick}
      />
    );
    const buttonWithOnClick = screen.getByRole('button');
    expect(buttonWithOnClick).toHaveClass('cursor-pointer');
  });
});
