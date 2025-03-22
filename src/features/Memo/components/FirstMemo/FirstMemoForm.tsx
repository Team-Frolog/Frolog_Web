import React from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import Textarea from '@/components/Form/Input/Textarea';
import TitleHeader from '@/components/Header/TitleHeader';
import Tag from '@/components/Tag/Tag';
import { REASON_TAG } from '@/constants/tags';
import { textareaType } from '@/data/ui/textareaType';
import { useBook } from '@/features/Book';
import { useRouter } from 'next/navigation';
import FormInput from '@/components/Form/Input/FormInput';
import PublicToggle from '../MemoForm/PublicToggle';
import { IMAGES } from '../../../../constants/images';

interface Props {
  isLoading: boolean;
  bookId: string;
}

function FirstMemoForm({ isLoading, bookId }: Props) {
  const router = useRouter();
  const { bookData } = useBook(bookId);
  const { watch, register, setValue } = useFormContext();
  const { keywords, memo } = watch();

  const handleSelectKeywords = (id: string) => {
    const isSelected = keywords.includes(id);
    let updatedKeywords: string[] = [];

    if (isSelected) {
      updatedKeywords = keywords.filter((tagId: string) => tagId !== id);
    } else {
      updatedKeywords = [...keywords, id];
    }
    setValue('keywords', updatedKeywords, { shouldDirty: true });
  };

  return (
    <>
      <TitleHeader
        title={bookData?.title || ''}
        theme='light'
        type='edit'
        isDisabled={(!memo && keywords.length === 0) || isLoading}
        onClickBack={() => router.back()}
      />
      <div className='flex w-full flex-1 flex-col gap-[36px] overflow-auto pb-[36px]'>
        <Image
          src={IMAGES.frog.first_memo_banner}
          alt='first memo banner'
          width={390}
          height={239}
          className='h-auto w-full'
        />
        <div className='flex w-full flex-col gap-[8px] px-page'>
          <span className='text-body-md text-gray-700'>
            키워드 (중복 선택 가능)
          </span>
          <div className='flex w-full flex-wrap gap-[16px]'>
            {REASON_TAG.map((item) => (
              <Tag
                key={item.id}
                type='pros'
                size='big'
                tagValue={item.value}
                onClick={() => handleSelectKeywords(item.id)}
                isSelected={keywords.includes(item.id)}
              />
            ))}
            <FormInput
              fieldName='reason'
              hasCount
              placeholder='직접입력'
              theme='light'
              {...register('reason')}
            />
          </div>
        </div>
        <Textarea option={textareaType.firstMemo} />
        <div className='w-full px-page'>
          <PublicToggle />
        </div>
      </div>
    </>
  );
}

export default FirstMemoForm;
