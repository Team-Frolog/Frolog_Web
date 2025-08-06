import { postSurvey } from '@/api/survey.api';
import { STORAGE_KEY } from '@/constants/storage';
import { toast } from '@/modules/Toast';
import { useForm } from 'react-hook-form';

interface SurveyForm {
  recommend: 'yes' | 'no' | 'soso';
  reason?: string;
  wish?: string;
}

export const isSurveyCompleted = () => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY.surveyCompleted) === 'true';
};

const markSurveyAsCompleted = () => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY.surveyCompleted, 'true');
};

export const useSurvey = () => {
  const methods = useForm<SurveyForm>({
    defaultValues: { recommend: 'yes', reason: '', wish: '' },
  });

  const handleSurvey = async () => {
    const req = methods.getValues();

    try {
      const response = await postSurvey(req);

      if (response.result) {
        toast.normal('설문조사가 정상적으로 제출되었습니다');
        markSurveyAsCompleted();
      } else {
        toast.error('다시 시도해주세요');
      }
    } catch (error) {
      toast.error('다시 시도해주세요');
    }
  };

  const handleCloseSurvey = () => {
    markSurveyAsCompleted();
  };

  return {
    methods,
    handleSurvey,
    handleCloseSurvey,
    isSurveyCompleted,
  };
};
