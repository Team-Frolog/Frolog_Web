import { COOKIE_KEY } from '@/constants/storage';
import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { clientInstance } from '../instances/clientInstance';

export const onRequestClient = async (config: InternalAxiosRequestConfig) => {
  try {
    // token 가져오기
    const accessToken = getCookie(COOKIE_KEY.accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; // 헤더 설정
      return config;
    }
    throw new Error('로그인이 필요합니다.');
  } catch (error) {
    return Promise.reject(error);
  }
};

export const onResponseErrorClient = async (error: AxiosError) => {
  const status = error.response?.status;

  // access token이 만료된 경우
  if (status === 401) {
    try {
      const originReq = error.config;

      if (!originReq) {
        throw new Error();
      }

      const refreshToken = getCookie(COOKIE_KEY.refreshToken);

      // TODO: 토큰 재발급 요청 -> 추후 수정 예정
      const result = {
        status: 200,
        data: {
          accessToken: 1,
        },
      };

      // 새로운 access token 발급된 경우
      if (result.status === 200) {
        const newAccessToken = result.data.accessToken; // 새로운 토큰 꺼내기
        setCookie(COOKIE_KEY.accessToken, newAccessToken);
        originReq.headers['authorization'] = `Bearer ${newAccessToken}`; // 기존 요청 헤더에 담기
        return clientInstance(originReq);
      }
      // access token 발급 실패한 경우 -> 재로그인
      else {
        deleteCookie(COOKIE_KEY.accessToken);
        deleteCookie(COOKIE_KEY.refreshToken);
        window.location.replace('/login');
      }
    } catch (err) {
      return Promise.reject(new Error('요청 도중 에러 발생'));
    }
  }
  return Promise.reject(error);
};
