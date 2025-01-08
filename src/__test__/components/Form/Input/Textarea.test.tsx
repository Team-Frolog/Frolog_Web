/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  act,
} from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';
import { textareaType } from '@/data/ui/textareaType';
import Textarea from '@/components/Form/Input/Textarea';

const renderWithFormContext = (ui: React.ReactElement) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const methods = useForm({
      mode: 'onBlur',
      defaultValues: {
        oneLiner: '',
      },
    });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return render(ui, { wrapper: Wrapper });
};

describe('Textarea', () => {
  test('입력한 값의 길이를 렌더링 해야한다.', () => {
    renderWithFormContext(<Textarea option={textareaType.oneLiner} />);

    expect(screen.getByText('0/40')).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText(
      '책을 한 문장으로 표현해주세요! (10자 이상)'
    );
    fireEvent.change(textarea, { target: { value: '테스트 입력' } });

    expect(screen.getByText('6/40')).toBeInTheDocument();
  });

  test('필수 필드의 값이 비어있는 경우 에러 메시지를 렌더링 해야한다.', async () => {
    renderWithFormContext(<Textarea option={textareaType.oneLiner} />);

    const textarea = screen.getByPlaceholderText(
      '책을 한 문장으로 표현해주세요! (10자 이상)'
    );
    fireEvent.blur(textarea);

    await waitFor(() =>
      expect(screen.getByText('한 줄평을 작성해주세요')).toBeInTheDocument()
    );
  });

  test('최소 입력 글자 수 미달인 경우, 에러 메시지를 렌더링 해야한다.', async () => {
    renderWithFormContext(<Textarea option={textareaType.oneLiner} />);

    const textarea = screen.getByPlaceholderText(
      '책을 한 문장으로 표현해주세요! (10자 이상)'
    );
    fireEvent.change(textarea, { target: { value: '짧음' } });

    await act(async () => {
      fireEvent.blur(textarea);
    });

    await waitFor(() =>
      expect(
        screen.getByText('멋진 문장이에요! 좀 더 남겨주세요. (최소 10자)')
      ).toBeInTheDocument()
    );
  });

  test('조건을 만족한 경우 에러 메시지를 렌더링하지 않아야 한다.', async () => {
    renderWithFormContext(<Textarea option={textareaType.oneLiner} />);

    const textarea = screen.getByPlaceholderText(
      '책을 한 문장으로 표현해주세요! (10자 이상)'
    );
    fireEvent.change(textarea, {
      target: { value: '이 문장은 충분히 깁니다.' },
    });
    fireEvent.blur(textarea);

    await waitFor(() =>
      expect(
        screen.queryByText('멋진 문장이에요! 좀 더 남겨주세요. (최소 10자)')
      ).not.toBeInTheDocument()
    );
    expect(
      screen.queryByText('한 줄평을 작성해주세요')
    ).not.toBeInTheDocument();
  });

  test('type="bold"인 경우, 폰트를 굵은 글씨로 적용해야 한다.', () => {
    renderWithFormContext(
      <Textarea option={textareaType.oneLiner} type='bold' />
    );

    const textarea = screen.getByPlaceholderText(
      '책을 한 문장으로 표현해주세요! (10자 이상)'
    );
    expect(textarea).toHaveClass('text-body-lg-bold');
  });

  test('type="bold"가 아닌 경우, 기본 폰트를 적용해야 한다.', () => {
    renderWithFormContext(<Textarea option={textareaType.oneLiner} />);

    const textarea = screen.getByPlaceholderText(
      '책을 한 문장으로 표현해주세요! (10자 이상)'
    );
    expect(textarea).toHaveClass('text-body-lg');
  });
});
