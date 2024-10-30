export const renderEngName = (engName: string) => {
  const newEngName = engName
    .trim()
    .split(' ')
    .map((item, idx) => {
      if (idx === 0 || idx === 1) return item;
    })
    .join(' ');
  return newEngName;
};
