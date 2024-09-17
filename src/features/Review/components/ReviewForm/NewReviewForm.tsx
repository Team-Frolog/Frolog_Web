import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSplash } from '@/hooks/popup/useSplash';
import { useStackMotionActions } from '@/store/stackMotionStore';
import { splash } from '@/data/ui/splash';
import Splash from '@/components/Splash/Splash';
import { useMutation } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import ReviewForm from './ReviewForm';
import { ReviewForm as ReviewFormType } from '../../types/review';
import { addNewReview } from '../../api/review.api';

interface Props {
  isbn: string;
}

function NewReviewForm({ isbn }: Props) {
  const { data: session } = useSession();
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

  const { mutate: handleAddReview } = useMutation({
    mutationFn: (data: ReviewFormType) => {
      const reqData = {
        writer: session!.user.id,
        isbn,
        tags_pos: data.pros,
        tags_neg: data.cons,
        title: data.oneLiner,
        content: data.review,
        rating: data.rating!,
      };

      const result = addNewReview(reqData);
      return result;
    },
    onSuccess: (result) => {
      setNewReviewId(result.id!);
      setIsOpen(true);
    },
  });

  return (
    <FormProvider {...methods}>
      <form
        className='flex-1 bg-white pt-0'
        onSubmit={handleSubmit((data) => handleAddReview(data))}
      >
        <ReviewForm type='new' isDisabled={isDisabled} />
      </form>
      {isOpen && <Splash type='review' bookId={isbn} />}
    </FormProvider>
  );
}

export default NewReviewForm;
