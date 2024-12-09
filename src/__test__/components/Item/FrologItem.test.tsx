import { render, screen, fireEvent } from '@testing-library/react';
import FrologItem from '@/components/Item/FrologItem';
import { FROGS_SILHOUETTE } from '@/constants/frogs';
import '@testing-library/jest-dom';

describe('FrologItem', () => {
  const mockOnClick = jest.fn();
  const defaultItem = {
    key: 'default',
    type: 'frog',
    name: '개꾸리',
    desc: '',
    condition: [],
    price: 100,
    start: '2024-12-01',
    end: '2024-12-31',
    disabled: false,
    is_available: true,
    is_owned: false,
    date: '',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('획득일(date)이 24시간 이내라면, NewTag가 렌더링 되어야 한다.', () => {
    const recentDate = new Date(
      new Date().getTime() - 10 * 60 * 60 * 1000
    ).toISOString();

    render(
      <FrologItem
        type='well'
        item={{ ...defaultItem, date: recentDate }}
        onClick={mockOnClick}
      />
    );

    expect(screen.getByTestId('New Tag')).toBeInTheDocument();
  });

  test('획득일(date)이 24시간 이후라면, NewTag가 렌더링 되지 않아야 한다.', () => {
    const oldDate = new Date(
      new Date().getTime() - 2 * 24 * 60 * 60 * 1000
    ).toISOString();

    render(
      <FrologItem
        type='well'
        item={{ ...defaultItem, date: oldDate }}
        onClick={mockOnClick}
      />
    );

    expect(screen.queryByTestId('New Tag')).not.toBeInTheDocument();
  });

  test('type="store"인 경우, NewTag는 렌더링 되지 않아야 한다.', () => {
    render(
      <FrologItem type='store' item={defaultItem} onClick={mockOnClick} />
    );
    expect(screen.queryByTestId('New Tag')).not.toBeInTheDocument();
  });

  test('isSelected=true인 경우, 선택된 스타일이 적용되어야 한다.', () => {
    render(
      <FrologItem
        type='store'
        item={defaultItem}
        isSelected
        onClick={mockOnClick}
      />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-main shadow-inner');
  });

  test('isSelected=false인 경우, default style이 적용되어야 한다.', () => {
    render(
      <FrologItem type='store' item={defaultItem} onClick={mockOnClick} />
    );
    const button = screen.getByRole('button');
    expect(button).toHaveClass('border-gray-300');
  });

  test('type="well"인 경우, 클릭 시 onClick을 트리거 한다.', () => {
    render(<FrologItem type='well' item={defaultItem} onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('type="store" 이고 보유 중인 아이템인 경우 onClick을 실행하지 않는다.', () => {
    render(
      <FrologItem
        type='store'
        item={{ ...defaultItem, is_owned: true }}
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('is_available=false, is_owned=false인 경우 실루엣을 렌더링한다.', () => {
    render(
      <FrologItem
        type='store'
        item={{ ...defaultItem, is_available: false, is_owned: false }}
        onClick={mockOnClick}
      />
    );

    const img = screen.getByAltText('frog character');
    expect(img).toHaveAttribute('src', FROGS_SILHOUETTE.default);
  });

  test('is_available=true 인 경우, 캐릭터 이미지를 렌더링한다.', () => {
    render(
      <FrologItem
        type='store'
        item={{ ...defaultItem, is_available: true }}
        onClick={mockOnClick}
      />
    );

    const img = screen.getByAltText('frog character');
    expect(img).toHaveAttribute(
      'src',
      '/_next/image?url=%2Fimages%2Ffrog%2Fcharacter%2Fdefault.webp&w=256&q=75'
    );
  });
});
