'use client';

import ToggleButton from '@/components/Form/Button/ToggleButton';
import { InfoName } from '@/features/Join';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  fieldName: InfoName;
  theme: 'dark' | 'light';
}

/** react-hook-form이 적용된 공개/비공개 토글 버튼 */
function PublicToggle({ fieldName, theme }: Props) {
  const { watch, setValue } = useFormContext();
  const visibility = watch(`personal_infos.${fieldName}.visibility`);

  const handleChange = () => {
    setValue(`personal_infos.${fieldName}.visibility`, !visibility, {
      shouldDirty: true,
    });
  };

  return (
    <ToggleButton
      isPublic={visibility}
      handleChange={handleChange}
      theme={theme}
    />
  );
}

export default PublicToggle;
