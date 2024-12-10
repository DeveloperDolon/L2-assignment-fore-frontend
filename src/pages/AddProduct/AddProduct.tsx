import DynamicFormFieldenderer from '@/components/DynamicFormFieldenderer';
import MyContainer from '@/components/MyContainer/MyContainer';
import { addProductFormFields } from '@/constant/formFields';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { serializeSchemaFromObject } from '@/utils/schemaSrializer';
import { useForm } from '@tanstack/react-form';
import { Button } from '@/components/ui/button';
import { useStoreProductMutation } from '@/redux/api/features/product.api';
import { z } from 'zod';
import { makeFormData } from '@/utils/makeFormData';
import { BlinkBlur } from 'react-loading-indicators';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useCategoryListQuery } from '@/redux/api/features/category.api';

const productSchema = serializeSchemaFromObject(addProductFormFields);
type ProductType = z.infer<typeof productSchema>;

const AddProduct = () => {
  const { toast } = useToast();

  const [storeProduct, { isLoading: isProductAdding }] =
    useStoreProductMutation();
  const {
    data: categories,
    isLoading: productDataLoading
  } = useCategoryListQuery(1);

  const form = useForm({
    validatorAdapter: zodValidator(),
    validators: {
      onChange: productSchema,
      onSubmit: productSchema,
    },
    onSubmit: async ({ value }: { value: ProductType }) => {
      const formData = makeFormData<ProductType>(value);

      try {
        await storeProduct(formData).unwrap();
        form.reset();
        return toast({
          title: 'Success',
          description: 'Product has been added.',
          action: (
            <ToastAction altText='Goto schedule to undo'>Okey</ToastAction>
          ),
        });
      } catch (err: unknown) {
        console.log(err);
        return toast({
          variant: 'destructive',
          title: 'Failied',
          description: err?.data?.message,
          action: (
            <ToastAction altText='Goto schedule to undo'>Okey</ToastAction>
          )
        });
      }
    },
  });

  if (!productDataLoading) {
    if (!addProductFormFields.some((field) => field.name === 'category_id')) {
      addProductFormFields.unshift({
        type: 'select',
        name: 'category_id',
        label: 'Category',
        placeholder: 'Select category',
        required: true,
        options: categories?.data,
        errorMessage: 'Must need to select category.',
      });
    }
  }

  return (
    <MyContainer className='relative'>
      {isProductAdding && (
        <div className='absolute w-full h-[calc(100vh-300px)] z-30 bg-opacity-50 flex justify-center items-center'>
          <BlinkBlur
            color='#32cd32'
            size='medium'
            text=''
            textColor=''
          />
        </div>
      )}
      <h1 className='md:text-6xl sm:text-5xl text-4xl md:mt-5 mt-4 md:mb-7 mb-5 font-semibold font-secondary text-center'>
        Add Product
      </h1>

      <form
        className='grid md:grid-cols-2 grid-cols-1 gap-6'
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        {addProductFormFields?.map((field) => (
          <DynamicFormFieldenderer
            key={field?.name}
            form={form}
            fieldProps={field}
          />
        ))}

        <div className='flex justify-center col-span-full md:mt-3 mt-2'>
          <Button
            className='hover:bg-red-800 bg-red-500 text-white'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </MyContainer>
  );
};

export default AddProduct;
