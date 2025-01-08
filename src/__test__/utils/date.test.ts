import { formatDate, getMinDate, getToday } from '@/utils/date';

describe('Date Functions', () => {
  describe('formatDate', () => {
    test('유효한 date string을 YYYY-MM-DD format으로 변경한다.', () => {
      const date = '2024-12-17T10:30:00Z';
      expect(formatDate(date)).toBe('2024-12-17');
    });

    test('한 자리 숫자의 경우 0으로 채운다.', () => {
      const date = '2024-02-03T00:00:00Z';
      expect(formatDate(date)).toBe('2024-02-03');
    });
  });

  describe('getToday', () => {
    test('오늘 날짜를 YYYY-MM-DD format으로 반환한다.', () => {
      const today = new Date().toISOString().slice(0, 10);
      expect(getToday()).toBe(today);
    });
  });

  describe('getMinDate', () => {
    test('오늘로부터 14년 이전의 날짜를 YYYY-MM-DD format으로 반환한다.', () => {
      const today = new Date();
      const expectedMinDate = new Date(
        today.getFullYear() - 14,
        today.getMonth(),
        today.getDate()
      )
        .toISOString()
        .split('T')[0];

      expect(getMinDate()).toBe(expectedMinDate);
    });
  });
});
