import { useQuery } from '@tanstack/react-query';
import { editMemoDetail, getMemoDetail } from '../api/memo.api';
import { MemoFormType } from '../types/form';

export const useMemoDetail = (memoId: string) => {
  const { data: memoDetail } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: () => getMemoDetail({ id: memoId }),
  });

  const handleEditMemo = (data: MemoFormType) => {
    if (!memoDetail) return;

    editMemoDetail({
      id: memoId,
      content: memoDetail.content === data.memo ? undefined : data.memo,
      is_public:
        memoDetail.is_public === data.isPublic ? undefined : data.isPublic,
      images: memoDetail.images === data.images ? undefined : data.images,
    });
  };

  return { memoDetail, handleEditMemo };
};
