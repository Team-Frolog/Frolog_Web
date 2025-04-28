import { GetBook } from "@frolog/frolog-api";

export const getBookInfo = async (isbn: string, accessToken?: string) => {
  const response = await new GetBook({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    accessToken,
  }).fetch({ isbn });

  return response;
};
