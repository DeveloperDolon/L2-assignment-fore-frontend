export const makeFormData = <T extends Record<string, unknown>>(data: T) => {
  console.log(typeof data.images);
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value instanceof File) {
      formData.append(key, value);
    } else if (
      Array.isArray(value) &&
      value.every((item) => item instanceof File)
    ) {
      value.forEach((file, index) => formData.append(`${key}${index}`, file));
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (subValue instanceof File) {
          formData.append(`${key}${subKey}`, subValue);
        } else {
          formData.append(`${key}${subKey}`, JSON.stringify(subValue));
        }
      });
    } else {
      formData.append(key, JSON.stringify(value));
    }
  });

  return formData;
};
