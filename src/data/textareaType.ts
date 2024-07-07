export interface TextareaType {
  title: string;
  maxLength: number;
  minRow: number;
  errorMessage: string;
  placeholder: string;
}

export const textareaType: {
  [key: string]: TextareaType;
} = {
  oneLiner: {
    title: '한 줄평',
    maxLength: 40,
    minRow: 1,
    errorMessage: '멋진 문장이에요! 좀 더 남겨주세요. (최소 10자)',
    placeholder: '책을 한 문장으로 표현해주세요! (10자 이상)',
  },
  review: {
    title: '내 리뷰',
    maxLength: 400,
    minRow: 2,
    errorMessage: '좋은 시작이에요! 생각이 더 궁금해요. (최소 50자)',
    placeholder:
      '리뷰를 쓰면 책 내용을 더 잘 기억할 수 있어요!\n떠오른 생각들을 남겨 주세요!  (50자 이상)',
  },
};
