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
import { FocusEventHandler } from 'react';

type DynamicFormFieldendererProps<TFormData> = {
  form: ReactFormExtendedApi<
    unknown,
    Validator<unknown, ZodType<TFormData, ZodTypeDef, unknown>>
  >;
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
          children={(field) => {
            return (
              <>
                <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
                  {labelWithOptonal}
                </label>
                <Input
                  name={field.name as string}
                  required={fieldProps?.required}
                  type={fieldProps?.type}
                  defaultValue={fieldProps?.defaultValue}
                  onBlur={field.handleBlur}
                  onChange={(e) => {
                    return fieldProps?.type === 'number'
                      ? field.handleChange(parseInt(e.currentTarget.value)) 
                      : fieldProps?.type === 'file' 
                      ? field.handleChange(e.currentTarget.files)
                      : field.handleChange(e.currentTarget.value);
                  }}
                />
                {field.state.meta.isTouched &&
                field.state.meta.errors.length ? (
                  <em
                    role='alert'
                    className='md:text-sm text-xs text-red-500'
                  >
                    {field.state.meta.errors.join(', ')}
                  </em>
                ) : null}
              </>
            );
          }}
        />
      </div>
    );
  }

  if (fieldProps?.type === 'select' && fieldProps?.name === 'category_id') {
    return (
      <div>
        <form.Field
          name={fieldProps?.name}
          children={(field: {
            name: string;
            state: { meta: { errors: any[] } };
          }) => (
            <div>
              <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
                {labelWithOptonal}
              </label>
              <Select
                name={field?.name as string}
                required={fieldProps?.required}
                onValueChange={(e) => field.handleChange(e)}
                onOpenChange={field.handleBlur}
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
                          item?.name !== undefined ? String(item._id) : ''
                        }
                      >
                        {item?.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em
                  role='alert'
                  className='md:text-sm text-xs text-red-500'
                >
                  {field.state.meta.errors.join(', ')}
                </em>
              ) : null}
            </div>
          )}
        />
      </div>
    );
  }

  if (fieldProps?.type === 'select' && fieldProps?.name !== 'category_id') {
    return (
      <div>
        <form.Field
          name={fieldProps?.name}
          children={(field: {
            name: string;
            state: { meta: { errors: any[] } };
          }) => (
            <div>
              <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
                {labelWithOptonal}
              </label>
              <Select
                name={field?.name as string}
                required={fieldProps?.required}
                onValueChange={(e) => field.handleChange(e)}
                onOpenChange={field.handleBlur}
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

              {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em
                  role='alert'
                  className='md:text-sm text-xs text-red-500'
                >
                  {field.state.meta.errors.join(', ')}
                </em>
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
          children={(field: {
            name: string;
            handleBlur: FocusEventHandler<HTMLTextAreaElement> | undefined;
            handleChange: (arg0: string) => void;
            state: { meta: { errors: any[] } };
          }) => (
            <div>
              <label className='inline-block mb-2 md:text-sm text-xs font-semibold '>
                {labelWithOptonal}
              </label>
              <Textarea
                name={field.name as string}
                required={fieldProps?.required}
                defaultValue={fieldProps?.defaultValue}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.currentTarget.value)}
              />

              {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em
                  role='alert'
                  className='md:text-sm text-xs text-red-500'
                >
                  {field.state.meta.errors.join(', ')}
                </em>
              ) : null}
            </div>
          )}
        />
      </div>
    );
  }
};

export default DynamicFormFieldenderer;
