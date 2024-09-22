'use client';

import ToggleButton from '@/components/Form/Button/ToggleButton';
import { InfoName } from '@/features/Join';
import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  fieldName: InfoName;
}

function PublicToggle({ fieldName }: Props) {
  const { watch, setValue } = useFormContext();
  const [isPublic, setIsPublic] = useState(true);

  useEffect(() => {
    const visibility = watch(`personal_infos.${fieldName}.visibility`);
    setIsPublic(visibility);
  }, [watch, fieldName]);

  const handleChange = () => {
    setValue(`personal_infos.${fieldName}.visibility`, !isPublic);
    setIsPublic(!isPublic);
  };

  return <ToggleButton isPublic={isPublic} handleChange={handleChange} />;
}

export default PublicToggle;
