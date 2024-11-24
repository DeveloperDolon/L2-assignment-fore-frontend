import MyContainer from '@/components/MyContainer/MyContainer';
import { Input } from '@/components/ui/input';
import { useForm } from '@tanstack/react-form';

const AddProduct = () => {
  const form = useForm({
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <MyContainer>

      <h1 className='md:text-6xl sm:text-5xl text-4xl md:mt-5 mt-4 md:mb-7 mb-5 font-semibold font-secondary text-center'>Add Product</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name='name'
          children={(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.currentTarget.value)}
            />
          )}
        />
      </form>
    </MyContainer>
  );
};

export default AddProduct;
