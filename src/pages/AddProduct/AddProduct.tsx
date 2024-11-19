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
