import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import LoadingOverlay from '@/components/Spinner/LoadingOverlay';
import ReviewForm from './ReviewForm';
import { ReviewForm as ReviewFormType } from '../../types/review';
import { useAddReview } from '../../hooks/useAddReview';

interface Props {
  isbn: string;
  wellId: string;
  userId: string;
}

function NewReviewForm({ isbn, wellId, userId }: Props) {
  const { handleAddReview, isPending, isSuccess, isLoading } = useAddReview(
    userId,
    wellId,
    isbn
  );

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
        <ReviewForm
          type='new'
          isDisabled={isDisabled || isPending || isSuccess}
        />
      </form>
      {isLoading && <LoadingOverlay theme='light' />}
    </FormProvider>
  );
}

export default NewReviewForm;
