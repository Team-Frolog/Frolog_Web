import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSplash } from '@/hooks/popup/useSplash';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { splash } from '@/data/ui/splash';
import ConfirmLeaveSheet from '@/components/PopUp/ConfirmLeaveSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import Splash from '@/components/Splash/Splash';
import ReviewForm from './ReviewForm';
import { ReviewForm as ReviewFormType } from '../types/review';
import { addNewReview } from '../api/review.api';

interface Props {
  isbn: string;
}

function NewReviewForm({ isbn }: Props) {
  const { isOpen, setIsOpen } = useSplash(splash.review.route);
  const { setNewReviewId } = useStackMotionActions();
  const methods = useForm<ReviewFormType>({
    mode: 'onBlur',
    defaultValues: {
      rating: null,
      oneLiner: '',
      review: '',
      pros: [],
      cons: [],
    },
  });
  const {
    watch,
    handleSubmit,
    formState: { isValid },
  } = methods;

  const isDisabled =
    !watch('rating') ||
    !watch('oneLiner') ||
    !watch('review') ||
    !watch('pros').length ||
    !watch('cons').length ||
    !isValid;

  const handleAddReview = async (data: ReviewFormType) => {
    const postResult = await addNewReview(data, isbn);

    if (postResult?.result) {
      setNewReviewId(postResult!.id!);
      setIsOpen(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className='flex-1 bg-white p-[24px] pt-0'
        onSubmit={handleSubmit(handleAddReview)}
      >
        <ReviewForm type='new' isDisabled={isDisabled} />
        <ConfirmLeaveSheet sheetData={sheetData.leave_while_review} />
      </form>
      {isOpen && <Splash type='review' />}
    </FormProvider>
  );
}

export default NewReviewForm;
