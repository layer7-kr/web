/**
 * 입력받은 연도부터 현재까지 경과한 연도 수를 반환합니다.
 * @param year 시작 연도
 * @returns 경과 연도 수
 */
export const getYearsFromNow = (year: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
};