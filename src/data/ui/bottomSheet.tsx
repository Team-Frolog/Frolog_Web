import { PopUpType } from '@/store/popUpStore';

export interface AlertSheet {
  getTitle: () => JSX.Element;
  type: 'normal' | 'error';
  stateType: PopUpType;
  buttonText?: string;
  extraButtonText?: string;
  description?: string;
}

export const sheetData: {
  [key: string]: AlertSheet;
} = {
  leave_while_review: {
    getTitle: () => (
      <>
        아직 작성중이에요
        <br />
        정말 나가시나요?
      </>
    ),
    type: 'error',
    buttonText: '나가기',
    extraButtonText: '계속 작성하기',
    stateType: 'isOpenAlertSheet',
    description: '이대로 나가면 내용이 저장되지 않아요',
  },
  leave_while_edit: {
    getTitle: () => (
      <>
        아직 작성중이에요
        <br />
        정말 나가시나요?
      </>
    ),
    type: 'error',
    buttonText: '나가기',
    extraButtonText: '계속 수정하기',
    stateType: 'isOpenAlertSheet',
    description: '수정 중에 나가면 수정된 내용이 저장되지 않아요',
  },
  delete_review: {
    getTitle: () => (
      <>
        작성한 리뷰를
        <br />
        정말 삭제할까요?
      </>
    ),
    type: 'error',
    buttonText: '네, 삭제할게요',
    extraButtonText: '아니요, 유지할게요',
    stateType: 'isOpenDeleteSheet',
    description: '리뷰를 한 번 삭제하면 복구할 수 없어요.',
  },
  add_another_to_well: {
    getTitle: () => (
      <>
        이 책을 어떤 우물에
        <br />
        추가할까요?
      </>
    ),
    type: 'normal',
    stateType: 'isOpenWellSheet',
    description: '선택한 우물에 책이 자동으로 추가됩니다!',
  },
};
