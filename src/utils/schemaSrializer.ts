import { z } from 'zod';

export const serializeSchemaFromObject = (
  schemaObjects: DynamicFormField[],
) => {
  const schema = z.object(
    schemaObjects?.reduce((acc, field) => {
      if (field?.type === 'text' && field.required) {
        acc[field.name] = z
          .string()
          .min(1, field.errorMessage || 'This field is required');
      } else if (field?.type === 'textarea' && field.required) {
        acc[field.name] = z
          .string()
          .min(1, field.errorMessage || 'This field is required');
      } else if (field?.type === 'select' && field.required) {
        acc[field.name] = z
          .string()
          .min(1, field.errorMessage || 'This field is required');
      } else if (field?.type === 'date' && field.required) {
        acc[field.name] = z
          .string()
          .datetime({ message: field.errorMessage || 'Invalid date format' });
      } else if (field?.type === 'number' && field.required) {
        acc[field.name] = z.number({
          invalid_type_error: field.errorMessage || 'Invalid number',
        });
      } else if (field?.type === 'file' && field.required) {
        acc[field.name] = z.any({ message: 'The field is required.' });
      } else if (field?.type === 'number') {
        acc[field.name] = z.number();
      } else {
        acc[field.name] = z.string();
      }
      return acc;
    }, {} as Record<string, z.ZodTypeAny>) || {},
  );

  return schema;
};
