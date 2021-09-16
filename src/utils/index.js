export const formatTitle = (str) => {
  const arr = str.split('-');
  const newArr = arr.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return newArr.join(' ');
};
