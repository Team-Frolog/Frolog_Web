import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import ReviewForm from './ReviewForm';
import { ReviewForm as ReviewFormType } from '../../types/review';
import { useAddReview } from '../../hooks/useAddReview';

interface Props {
  isbn: string;
}

function NewReviewForm({ isbn }: Props) {
  const { handleAddReview } = useAddReview(isbn);

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
    </FormProvider>
  );
}

export default NewReviewForm;
