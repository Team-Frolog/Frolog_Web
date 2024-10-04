import { PostUserReport } from '@frolog/frolog-api';
import { baseOptions } from './options';

const postReportUser = new PostUserReport(baseOptions);

export const reportUser = async (target: string) => {
  const response = await postReportUser.fetch({ target });
  return response;
};
