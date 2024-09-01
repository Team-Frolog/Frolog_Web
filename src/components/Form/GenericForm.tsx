import {
  useForm,
  FormProvider,
  SubmitHandler,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';

interface FormInterface<FormType extends FieldValues> {
  children: React.ReactNode;
  className?: string;
  onSubmit: SubmitHandler<FormType>;
  formOptions?: UseFormProps<FormType>;
}

function GenericForm<FormType extends FieldValues>({
  children,
  onSubmit,
  formOptions,
  className = 'form-layout',
}: FormInterface<FormType>) {
  const methods = useForm<FormType>(formOptions);
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

export default GenericForm;
