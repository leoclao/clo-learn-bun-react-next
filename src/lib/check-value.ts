export function existArray(value: any, Array: any[]): boolean {
  const check = (element: any) => element === value;
  const result = Array.some(check);

  return result;
};

export function existsEnum(value: any, object: any[]): boolean {
  return Object.values(object).includes(value) && true;
}

// export { checkValueArray, checkValueExistsEnum };
