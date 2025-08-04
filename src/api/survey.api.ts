import { PostInitialSurvey, PostInitialSurveyReq } from '@frolog/frolog-api';
import { baseOptions } from './options';

export const postSurvey = async (req: PostInitialSurveyReq) => {
  const response = await new PostInitialSurvey(baseOptions).fetch(req);
  return response;
};
