function checkValueArray(value: any, array: any[]): boolean {
  const check = (element: any) => element === value;
  const result = array.some(check);

  return result;
};

export { checkValueArray };