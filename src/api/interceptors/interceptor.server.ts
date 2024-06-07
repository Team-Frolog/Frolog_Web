import { COOKIE_KEY } from '@/constants/storage';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { cookies } from 'next/headers';
import { serverInstance } from '../instances/serverInstance';

export const onRequestServer = async (config: InternalAxiosRequestConfig) => {
  try {
    // token 가져오기
    const cookieStore = cookies();
    const accessToken = cookieStore.get(COOKIE_KEY.accessToken)?.value;

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // 헤더 설정
      return config;
    }
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onResponseErrorServer = async (error: AxiosError) => {
  const status = error.response?.status;

  // access token이 만료된 경우
  if (status === 401) {
    try {
      const originReq = error.config;

      if (!originReq) {
        throw new Error();
      }

      const cookieStore = cookies();
      const refreshToken = cookieStore.get(COOKIE_KEY.refreshToken)?.value;

      // TODO: 토큰 재발급 요청 -> 추후 수정 예정
      const result = {
        status: 200,
        data: {
          accessToken: '1',
        },
      };

      // 새로운 access token 발급된 경우
      if (result.status === 200) {
        const newAccessToken = result.data.accessToken; // 새로운 토큰 꺼내기
        cookieStore.set(COOKIE_KEY.accessToken, newAccessToken);
        originReq.headers['authorization'] = `Bearer ${newAccessToken}`; // 기존 요청 헤더에 담기
        return serverInstance(originReq);
      }
      // access token 발급 실패한 경우 -> 재로그인
      else {
        cookieStore.set(COOKIE_KEY.accessToken, '');
        cookieStore.set(COOKIE_KEY.refreshToken, '');
        // TODO: redirect
      }
    } catch (err) {
      return Promise.reject(new Error('요청 도중 에러 발생'));
    }
  }
  return Promise.reject(error);
};
