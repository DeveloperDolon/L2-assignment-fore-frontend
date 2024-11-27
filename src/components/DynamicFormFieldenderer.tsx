import { ReactFormExtendedApi, Validator } from '@tanstack/react-form';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Textarea } from './ui/textarea';
import { ZodType, ZodTypeDef } from 'zod';

type DynamicFormFieldendererProps<TFormData> = {
  form: ReactFormExtendedApi<unknown, Validator<unknown, ZodType<TFormData, ZodTypeDef, unknown>>>;
  fieldProps: DynamicFormField;
};

const DynamicFormFieldenderer = <TFormData,>({
  form,
  fieldProps,
}: DynamicFormFieldendererProps<TFormData>) => {
  const labelWithOptonal = `${fieldProps?.label || ''} ${
    !fieldProps?.required ? '(optonal)' : ''
  }`;

  if (
    fieldProps?.type === 'checkbox' ||
    fieldProps?.type === 'text' ||
    fieldProps?.type === 'number' ||
    fieldProps?.type === 'file' ||
    fieldProps?.type === 'date'
  ) {
    return (
      <div>
        <form.Field
          name={fieldProps?.name}
          children={(field) => (
            <>
              <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
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
                <em role='alert' className='md:text-sm text-xs text-red-500'>{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </>
          )}
        />
      </div>
    );
  }

  if (fieldProps?.type === 'select') {
    return (
      <div>
        <form.Field
          name={fieldProps?.name}
          children={(field) => (
            <div>
              <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
                {labelWithOptonal}
              </label>
              <Select
                name={field?.name as string}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder={fieldProps?.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup className='bg-white'>
                    <SelectLabel>{fieldProps?.label}</SelectLabel>
                    {fieldProps?.options?.map((item, idx) => (
                      <SelectItem
                        key={idx}
                        value={
                          item?.value !== undefined ? String(item.value) : ''
                        }
                      >
                        {item?.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {field.state.meta.errors ? (
                <em role='alert' className='md:text-sm text-xs text-red-500'>{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </div>
          )}
        />
      </div>
    );
  }

  if (fieldProps?.type === 'textarea') {
    return (
      <div>
        <form.Field
          name={fieldProps?.name as string}
          children={(field) => (
            <div>
              <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
                {labelWithOptonal}
              </label>
              <Textarea
                name={field.name as string}
                defaultValue={fieldProps?.defaultValue}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.currentTarget.value)}
              />

              {field.state.meta.errors ? (
                <em role='alert' className='md:text-sm text-xs text-red-500'>{field.state.meta.errors.join(', ')}</em>
              ) : null}
            </div>
          )}
        />
      </div>
    );
  }
};

export default DynamicFormFieldenderer;
