export const makeFormData = (data: object, method: string = 'POST') => {
  const formData = new FormData();

  Object.entries(data).map(([key, value]) => {
    formData.append(key, value);
  });

  formData.append('method', method);

  return formData;
};
