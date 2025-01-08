import { getIsNew } from '@/features/Well/utils/getIsNew';

describe('getIsNew', () => {
  it('date가 지금으로부터 24시간 이내라면, true를 리턴해야 한다.', () => {
    const recentDate = new Date(
      new Date().getTime() - 12 * 60 * 60 * 1000
    ).toISOString();
    expect(getIsNew(recentDate)).toBe(true);
  });

  it('date가 지금으로부터 24시간 이후라면, false를 리턴해야 한다.', () => {
    const oldDate = new Date(
      new Date().getTime() - 2 * 24 * 60 * 60 * 1000
    ).toISOString();
    expect(getIsNew(oldDate)).toBe(false);
  });

  it('date가 정확히 24시간 전이라면, true를 리턴해야 한다.', () => {
    const oneDayAgoDate = new Date(
      new Date().getTime() - 24 * 60 * 60 * 1000
    ).toISOString(); // 정확히 1일 전
    expect(getIsNew(oneDayAgoDate)).toBe(true);
  });
});
