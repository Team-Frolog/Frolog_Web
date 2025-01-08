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

/** 공통 폼 Wrapper 컴포넌트
 * @param formOptions - 폼 옵션 객체
 * @param onSubmit - submit 핸들러 함수
 * @param className - form 태그에 적용될 클래스 (기본값 = 'form-layout')
 *
 * - FormProvider로 감싸진 폼 Wrapper 입니다.
 */
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
