import { z } from 'zod';

export const serializeSchemaFromObject = (
  schemaObjects: DynamicFormField[],
) => {
  const schema = z.object(
    Object.fromEntries(
      schemaObjects.map((field) => {
        if (field.type === 'text' && field.required) {
          return [field.name, z.string().min(1, field.errorMessage)];
        }
        if (field.type === 'textarea' && field.required) {
          return [field.name, z.string().min(1, field.errorMessage)];
        }
        if (field.type === 'select' && field.required) {
          return [field.name, z.string().min(1, field.errorMessage)];
        }
        if (field.type === 'file' && field.required) {
          return [field.name, z.instanceof(FileList, {message: field.errorMessage})];
        }
        if (field.type === 'date' && field.required) {
          return [field.name, z.date({ message: field.errorMessage })];
        }
        if (field.type === 'number' && field.required) {
          return [field.name, z.number().min(1, field.errorMessage)];
        }
        if (field.type === 'number') {
          return [field.name, z.number().optional()];
        }
        if (field.type === 'date') {
          return [field.name, z.date().optional()];
        }
        if (field.type === 'file') {
          return [field.name, z.instanceof(FileList).optional()];
        }

        return [field.name, z.string().optional()];
      }),
    ),
  );

  return schema;
};
