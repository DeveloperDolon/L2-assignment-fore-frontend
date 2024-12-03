import DynamicFormFieldenderer from '@/components/DynamicFormFieldenderer';
import MyContainer from '@/components/MyContainer/MyContainer';
import { addProductFormFields } from '@/constant/formFields';
import { zodValidator } from '@tanstack/zod-form-adapter';
import { serializeSchemaFromObject } from '@/utils/schemaSrializer';
import { useForm } from '@tanstack/react-form';
import { Button } from '@/components/ui/button';
import { useStoreProductMutation } from '@/redux/api/features/product.api';
// import { z } from 'zod';

const AddProduct = () => {
  const productSchema = serializeSchemaFromObject(addProductFormFields);
  const [storeProduct] = useStoreProductMutation();
  // type product = z.infer<typeof productSchema>;
  
  const form = useForm({
    validatorAdapter: zodValidator(),
    validators: {
      onChange: productSchema,
      onSubmit: productSchema
    },
    onSubmit: async ({ value }) => {
      const response = await storeProduct(value).unwrap();
      console.log(response);
    },
  });
  
  return (
    <MyContainer>
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
          <Button className='hover:bg-red-800 bg-red-500 text-white' type='submit'>Submit</Button>
        </div>
      </form>
    </MyContainer>
  );
};

export default AddProduct;
