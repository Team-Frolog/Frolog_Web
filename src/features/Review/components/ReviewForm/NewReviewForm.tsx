import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSplash } from '@/hooks/popup/useSplash';
import { splash } from '@/data/ui/splash';
import Splash from '@/components/Splash/Splash';
import ReviewForm from './ReviewForm';
import { ReviewForm as ReviewFormType } from '../../types/review';
import { useAddReview } from '../../hooks/useAddReview';

interface Props {
  isbn: string;
}

function NewReviewForm({ isbn }: Props) {
  const { isOpen, setIsOpen } = useSplash(splash.review.route);
  const { handleAddReview } = useAddReview(isbn, () => setIsOpen(true));

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
