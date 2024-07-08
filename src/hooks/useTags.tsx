import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useTags = (type: 'pros' | 'cons') => {
  const [isOpenToast, setIsOpenToast] = useState(false);
  const { watch, setValue } = useFormContext();
  const selectedTags = watch(type) || [];

  /* ----- 태그 선택 처리 함수 ----- */
  const handleTagSelect = (id: string) => {
    const isSelected = selectedTags.includes(id);

    // 이미 선택된 태그인 경우
    if (isSelected) {
      const updatedTags = selectedTags.filter((tagId: string) => tagId !== id);
      setValue(type, updatedTags);
    }
    // 선택되지 않은 태그인 경우
    else if (selectedTags.length < 5) {
      const updatedTags = [...selectedTags, id];
      setValue(type, updatedTags);
    } else if (selectedTags.length === 5) {
      setIsOpenToast(true);
    }
  };

  useEffect(() => {
    if (isOpenToast) {
      setTimeout(() => {
        setIsOpenToast(false);
      }, 3000);
    }
  }, [isOpenToast]);

  return { handleTagSelect, selectedTags, isOpenToast };
};
