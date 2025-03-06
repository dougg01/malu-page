export const calculateDaysInLove = (startDate: Date): number => {
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};