type DynamicFormFieldType = 'text' | 'textarea' | 'select' | 'date';

export type DynamicFormField = {
  type : DynamicFormFieldType;
  name: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  options: {value?: string | number; label: string;}
};


export const addProductFormFields : Product = {
    
};