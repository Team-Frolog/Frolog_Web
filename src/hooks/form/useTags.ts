import { toast } from '@/modules/Toast';
import { Tag } from '@/types/tag';
import { useFormContext } from 'react-hook-form';

/** 태그 선택 핸들링 훅 */
export const useTags = (type: Tag) => {
  const { watch, setValue } = useFormContext();
  const selectedTags = watch(type) || [];

  /** 태그 선택 처리 함수 */
  const handleTagSelect = (id: string) => {
    const isSelected = selectedTags.includes(id);

    // 이미 선택된 태그인 경우
    if (isSelected) {
      const updatedTags = selectedTags.filter((tagId: string) => tagId !== id);
      setValue(type, updatedTags, { shouldDirty: true });
    }
    // 선택되지 않은 태그인 경우
    else if (selectedTags.length < 5) {
      const updatedTags = [...selectedTags, id];
      setValue(type, updatedTags, { shouldDirty: true });
    } else if (selectedTags.length === 5) {
      toast.error('키워드는 최대 5개까지 고를 수 있어요!');
    }
  };

  return { handleTagSelect, selectedTags };
};
