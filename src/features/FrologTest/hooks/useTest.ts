'use client';

import { PAGES } from '@/constants/page';
import { STORAGE_KEY } from '@/constants/storage';
import { useStep, useStepActions } from '@/store/stepStore';
import { getSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { editProfile } from '@/features/Profile/api/profile.api';
import { useMutation } from '@tanstack/react-query';
import { EditProfileReq } from '@frolog/frolog-api';
import { testEvaluator } from '../utils/testEvaluator';
import { Question, questions } from '../data/testQuestions';

/** 독서 성향 테스트 핸들링 훅 */
export const useTest = () => {
  const step = useStep();
  const router = useRouter();
  const { moveStep } = useStepActions();
  const callback = useSearchParams().get('callbackUrl'); // 프로필 편집 중 테스트인 경우, callbackUrl 필요
  const testType = useSearchParams().get('type'); // 테스트 완료 후 결과 타입 (1, 2, 3)
  const isLoading = useSearchParams().get('loading');
  const [isEdited, setIsEdited] = useState(false); // 독서 성향 수정 완료 여부 (중복 수정 방지)
  const [testData, setTestData] = useState<Question>(questions[0]);

  /** 사용자 선택 답안을 관리하는 useState (sessionStorage 활용) */
  const [answers, setAnswers] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const savedAnswers = sessionStorage.getItem(STORAGE_KEY.testAnswerKey);
      return savedAnswers ? JSON.parse(savedAnswers) : [];
    }
    return [];
  });

  /** 선택지 클릭 핸들러 */
  const handleClickAnswer = (id: number) => {
    setAnswers((prev) => {
      const newArr = [...prev];
      newArr[step - 1] = id;
      sessionStorage.setItem(STORAGE_KEY.testAnswerKey, JSON.stringify(newArr));
      return newArr;
    });

    setTimeout(() => {
      moveStep(1);
    }, 500);
  };

  const { mutate: editTestTypeOfUser } = useMutation({
    mutationFn: (reqData: EditProfileReq) => editProfile(reqData),
  });

  /** 독서 성향 수정 핸들러 */
  const postTestResult = async (type: string) => {
    // 콜백이 있는 경우 = 프로필 수정 중 테스트인 경우, 결과를 session에 저장
    if (callback) {
      sessionStorage.setItem(STORAGE_KEY.testResultForEdit, type);
      return;
    }

    // 세션이 있는 경우, 독서 성향 수정
    const session = await getSession();
    if (session) {
      const reqData = {
        id: session?.user.id,
        reading_preference: type,
      };
      editTestTypeOfUser(reqData);
    }
  };

  useEffect(() => {
    if (isLoading && !isEdited) {
      postTestResult(testType!);
      setIsEdited(true);
    }
  }, [isLoading, testType, isEdited]);

  useEffect(() => {
    // 스텝이 남은 경우 답안 누적
    if (step <= 7) {
      setTestData(questions[step - 1]);
      const currentAnswers = answers.slice(0, step);
      sessionStorage.setItem(
        STORAGE_KEY.testAnswerKey,
        JSON.stringify(currentAnswers)
      );
      setAnswers(currentAnswers);
    }
    // 마지막 스텝인 경우 테스트 결과 계산 및 로딩 페이지 렌더링
    if (step === 8) {
      const testResult = testEvaluator(answers);
      moveStep(1);
      router.replace(
        `${PAGES.TEST}?loading=true&type=${testResult}${callback ? `&callbackUrl=${callback}` : ''}`
      );
    }
  }, [step]);

  return { step, answers, handleClickAnswer, testData, isLoading };
};
