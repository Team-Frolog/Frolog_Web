import { SHEET_FROG } from '@/constants/frogs';

export interface AlertSheet {
  getTitle: (value?: any) => JSX.Element;
  type: 'normal' | 'error';
  buttonText?: string;
  extraButtonText?: string;
  description?: (value?: any) => JSX.Element;
  frog?: string;
}

export type BottomSheetKeys = keyof typeof sheetData;

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
    description: () => <>리뷰를 삭제하면, 메모도 같이 삭제돼요.</>,
  },
  delete_memo: {
    getTitle: () => <>이 메모를 삭제할까요?</>,
    type: 'error',
    buttonText: '네, 삭제할게요',
    extraButtonText: '아니요, 유지할게요',
    description: () => <>메모를 한 번 삭제하면 복구할 수 없어요.</>,
  },
  select_well: {
    getTitle: () => (
      <>
        이 책을 어떤 우물에
        <br />
        추가할까요?
      </>
    ),
    type: 'normal',
    frog: SHEET_FROG.book,
    description: () => <>선택한 우물에 책이 자동으로 추가됩니다!</>,
  },
  need_to_login: {
    getTitle: () => <>로그인이 필요해요!</>,
    type: 'normal',
    buttonText: '로그인하고 추가하기',
    description: () => <>로그인하고 원하는 책을 우물에 추가하세요</>,
  },
  need_to_login_feed: {
    getTitle: () => (
      <>
        로그인하고
        <br />
        무제한으로 리뷰를 보세요!
      </>
    ),
    type: 'normal',
    buttonText: '로그인하기',
    description: () => <>TIP. 나의 독서 성향에 맞는 책도 추천해줘요!</>,
  },
  done_register: {
    getTitle: () => <>신청에 성공했어요!</>,
    type: 'normal',
    buttonText: '확인',
    frog: SHEET_FROG.wink,
    description: () => <>추후에 책이 추가될 때, 알려드릴게요.</>,
  },
  done_store_register: {
    getTitle: () => <>신청에 성공했어요!</>,
    type: 'normal',
    buttonText: '확인',
    frog: SHEET_FROG.wink,
    description: () => <>추후에 상점이 오픈될 때, 알려드릴게요.</>,
  },
  add_book: {
    getTitle: () => <>책을 다 읽으셨나요?</>,
    type: 'normal',
  },
  select_books: {
    getTitle: () => <>기존 리뷰를 우물에 담을까요?</>,
    type: 'normal',
    buttonText: '이렇게 추가할게요!',
    extraButtonText: '아니요, 새로운 리뷰를 쓸게요!',
    frog: SHEET_FROG.book,
    description: (n: number) => (
      <>
        이 책에 대한 리뷰가 {n}개 있습니다.
        <br />
        선택한 리뷰 개수만큼 책이 쌓여요!
      </>
    ),
  },
  report_this_user: {
    getTitle: () => <>이 사용자를 신고할까요?</>,
    type: 'error',
    buttonText: '네, 신고할게요',
    extraButtonText: '아니요, 취소할게요',
    description: () => <>사용자를 신고하면 다시 되돌릴 수 없어요</>,
  },
  delete_this_comment: {
    getTitle: () => <>이 댓글을 삭제할까요?</>,
    type: 'error',
    buttonText: '네, 삭제할게요',
    extraButtonText: '아니요, 유지할게요',
    description: () => <>댓글을 삭제하면 다시 되돌릴 수 없어요</>,
  },
  delete_this_well: {
    getTitle: () => (
      <>
        우물을
        <br />
        정말 삭제할까요?
      </>
    ),
    type: 'error',
    buttonText: '네, 삭제할게요',
    extraButtonText: '아니요, 유지할게요',
    description: () => (
      <>
        우물을 삭제해도
        <br />
        작성한 리뷰와 메모는 다시 불러올 수 있어요.
      </>
    ),
  },
  logout: {
    getTitle: () => <>로그아웃 하나요?</>,
    type: 'error',
    buttonText: '로그아웃 하기',
    extraButtonText: '취소',
    description: () => <>잠시만 안녕.. 그치만 곧 다시 돌아올거죠?</>,
  },
  quit: {
    getTitle: () => <>정말 탈퇴하나요?</>,
    type: 'error',
    buttonText: '탈퇴하기',
    extraButtonText: '취소',
    description: () => <>그동안 정말 고마웠습니다. Good Bye</>,
  },
  purchase: {
    getTitle: (name: string) => <>{name} 구매하나요?</>,
    type: 'normal',
    buttonText: '구매하기',
    extraButtonText: '취소',
    frog: SHEET_FROG.wink,
    description: () => <>구매 후 교환 및 환불이 불가능합니다.</>,
  },
  cant_buy: {
    getTitle: () => <>포인트가 부족해요</>,
    type: 'error',
    buttonText: '확인',
    extraButtonText: '취소',
    description: () => <>미션을 완료하여 포인트를 모으세요</>,
  },
  not_available_item: {
    getTitle: () => <>포인트가 부족해요</>,
    type: 'error',
    buttonText: '확인',
    extraButtonText: '취소',
    description: () => <>포인트가 충분하면 캐릭터가 보여요</>,
  },
};
