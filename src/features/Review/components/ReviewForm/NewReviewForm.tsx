'use client';

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

  const { handleSubmit, watch, setError } = methods;

  const { handleSubmitForm, handleError, isLoading } = useAddReview(
    userId,
    wellId,
    isbn,
    watch,
    setError
  );

  return (
    <FormProvider {...methods}>
      <form
        className='flex-1 bg-white pt-0'
        onSubmit={handleSubmit(handleSubmitForm, handleError)}
      >
        <ReviewForm type='new' isDisabled={isLoading} />
      </form>
      {isLoading && <LoadingOverlay theme='light' />}
    </FormProvider>
  );
}

export default NewReviewForm;
