import { ReviewFormType } from '@/features/Review';

export interface TextareaType {
  fieldName:
    | keyof ReviewFormType
    | keyof MemoFormType
    | keyof FirstMemoFormType
    | 'self_intro';
  title: string;
  maxLength: number;
  minLength: number;
  minRow: number;
  errorMessage: string;
  placeholder: string;
  required: boolean | string;
}

export const textareaType: {
  [key: string]: TextareaType;
} = {
  oneLiner: {
    fieldName: 'oneLiner',
    title: '한 줄평',
    maxLength: 40,
    minLength: 10,
    minRow: 1,
    required: '한 줄평을 작성해주세요',
    errorMessage: '멋진 문장이에요! 좀 더 남겨주세요. (최소 10자)',
    placeholder: '책을 한 문장으로 표현해주세요! (10자 이상)',
  },
  review: {
    fieldName: 'review',
    title: '내 리뷰',
    maxLength: 400,
    minLength: 10,
    minRow: 2,
    required: '리뷰를 작성해주세요',
    errorMessage: '좋은 시작이에요! 생각이 더 궁금해요. (최소 10자)',
    placeholder:
      '리뷰를 쓰면 책 내용을 더 잘 기억할 수 있어요!\n떠오른 생각들을 남겨 주세요! (10자 이상)',
  },
  memo: {
    fieldName: 'memo',
    title: '메모',
    maxLength: 400,
    minLength: 0,
    minRow: 1,
    required: false,
    errorMessage: '',
    placeholder: '인상깊은 구절을 메모하세요',
  },
  firstMemo: {
    fieldName: 'memo',
    title: '메모',
    maxLength: 400,
    minLength: 0,
    minRow: 2,
    required: false,
    errorMessage: '',
    placeholder:
      '이 책을 선택한 이유와 나만의 목표를 적어보세요.\n그 동기가 독서의 첫걸음이 될 거예요!',
  },
  intro: {
    fieldName: 'self_intro',
    title: '자기소개',
    maxLength: 50,
    minLength: 1,
    minRow: 1,
    required: '자기소개를 입력해주세요',
    errorMessage: '1-50자로 입력하세요.',
    placeholder: '자기소개를 입력해주세요',
  },
};
