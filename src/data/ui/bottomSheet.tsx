import { IMAGES } from '@/constants/images';
import { PopUpType } from '@/store/popUpStore';

export interface AlertSheet {
  getTitle: () => JSX.Element;
  type: 'normal' | 'error';
  stateType: PopUpType;
  buttonText?: string;
  extraButtonText?: string;
  description?: (value?: any) => JSX.Element;
  frog?: string;
}

export const sheetData: {
  [key: string]: AlertSheet;
} = {
  leave_while_write: {
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
    description: () => <>이대로 나가면 내용이 저장되지 않아요</>,
  },
  leave_while_edit: {
    getTitle: () => (
      <>
        아직 수정 중이에요
        <br />
        정말 나가시나요?
      </>
    ),
    type: 'error',
    buttonText: '나가기',
    extraButtonText: '계속 수정하기',
    stateType: 'isOpenAlertSheet',
    description: () => <>수정 중에 나가면 수정된 내용이 저장되지 않아요</>,
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
    description: () => <>리뷰를 한 번 삭제하면 복구할 수 없어요.</>,
  },
  delete_memo: {
    getTitle: () => <>이 메모를 삭제할까요?</>,
    type: 'error',
    buttonText: '네, 삭제할게요',
    extraButtonText: '아니요, 유지할게요',
    stateType: 'isOpenDeleteSheet',
    description: () => <>메모를 한 번 삭제하면 복구할 수 없어요.</>,
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
    frog: IMAGES.frog.sheet.book,
    description: () => <>선택한 우물에 책이 자동으로 추가됩니다!</>,
  },
  need_to_login: {
    getTitle: () => <>로그인이 필요해요!</>,
    type: 'normal',
    stateType: 'isOpenLoginSheet',
    buttonText: '로그인하고 추가하기',
    description: () => <>로그인하고 원하는 책을 우물에 추가하세요</>,
  },
  done_register: {
    getTitle: () => <>신청에 성공했어요!</>,
    type: 'normal',
    stateType: 'isOpenAlertSheet',
    buttonText: '확인',
    frog: IMAGES.frog.sheet.wink,
    description: () => <>추후에 책이 추가될 때, 알려드릴게요.</>,
  },
  done_store_register: {
    getTitle: () => <>신청에 성공했어요!</>,
    type: 'normal',
    stateType: 'isOpenAlertSheet',
    buttonText: '확인',
    frog: IMAGES.frog.sheet.wink,
    description: () => <>추후에 상점이 오픈될 때, 알려드릴게요.</>,
  },
  add_book: {
    getTitle: () => <>책을 다 읽으셨나요?</>,
    type: 'normal',
    stateType: 'isOpenAlertSheet',
  },
  select_books: {
    getTitle: () => <>기존 리뷰를 우물에 담을까요?</>,
    type: 'normal',
    buttonText: '이렇게 추가할게요!',
    extraButtonText: '아니요, 새로운 리뷰를 쓸게요!',
    stateType: 'isOpenSelectBooksSheet',
    frog: IMAGES.frog.sheet.book,
    description: (n: number) => (
      <>
        이 책에 대한 리뷰가 {n}개 있습니다.
        <br />
        선택한 리뷰 개수만큼 책이 쌓여요!
      </>
    ),
  },
  report_this_feed: {
    getTitle: () => <>이 피드를 신고할까요?</>,
    type: 'error',
    buttonText: '네, 신고할게요',
    extraButtonText: '아니요, 취소할게요',
    stateType: 'isOpenAlertSheet',
    description: () => <>피드를 신고하면 다시 되돌릴 수 없어요</>,
  },
  report_this_comment: {
    getTitle: () => <>이 댓글을 신고할까요?</>,
    type: 'error',
    buttonText: '네, 신고할게요',
    extraButtonText: '아니요, 취소할게요',
    stateType: 'isOpenAlertSheet',
    description: () => <>댓글을 신고하면 다시 되돌릴 수 없어요</>,
  },
  logout: {
    getTitle: () => <>로그아웃 하나요?</>,
    type: 'error',
    buttonText: '로그아웃 하기',
    extraButtonText: '취소',
    stateType: 'isOpenAlertSheet',
    description: () => <>잠시만 안녕.. 그치만 곧 다시 돌아올거죠?</>,
  },
};
