import { ReactFormExtendedApi } from '@tanstack/react-form';
import { Input } from './ui/input';

type DynamicFormFieldendererProps<TFormData> = {
  form: ReactFormExtendedApi<TFormData>;
  fieldProps: DynamicFormField;
};

const DynamicFormFieldenderer = <TFormData,>({
  form,
  fieldProps,
}: DynamicFormFieldendererProps<TFormData>) => {
  const labelWithOptonal = `${fieldProps?.label || ''} ${
    !fieldProps?.required ? '(optonal)' : ''
  }`;

  if (fieldProps?.type === 'text' || fieldProps?.type === 'number' || fieldProps?.type === 'file') {
    return (
      <>
        <form.Field
          name={fieldProps?.name}
          children={(field) => (
            <>
              <label className='mb-2 md:text-sm text-xs font-semibold '>
                {labelWithOptonal}
              </label>
              <Input
                name={field.name as string}
                type={fieldProps?.type}
                defaultValue={fieldProps?.defaultValue}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.currentTarget.value)}
              />
              {field.state.meta.errors ? (
                <em role='alert'>{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </>
          )}
        />
      </>
    );
  }
};

export default DynamicFormFieldenderer;
