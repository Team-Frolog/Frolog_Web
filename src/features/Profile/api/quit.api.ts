import { getSession } from 'next-auth/react';
import { Quit } from '@frolog/frolog-api';
import { baseOptions } from '@/api/options';
import { Survey } from '../types/quit';

const quitInstance = new Quit(baseOptions);

export const quit = async (survey?: Survey) => {
  const session = await getSession();

  if (session) {
    const data = await quitInstance.fetch({ id: session?.user.id, survey });
    return data.result;
  }
};
