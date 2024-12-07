export const addProductFormFields : DynamicFormField[] = [
    {
        type: 'text',
        name: 'product_name',
        label: 'Product Name',
        placeholder: 'Input product name',
        required: true,
        errorMessage: 'Product name must need to input!',
    },
    {
        type: 'number',
        name: 'actual_price',
        label: 'Actual Price',
        placeholder: 'Input product actual price',
        required: true,
        errorMessage: 'Product actual price need to input!'
    },
    {
        type: 'number',
        name: 'discount_price',
        label: 'Discount price',
        placeholder: 'Input product discount price',
        required: true,
        errorMessage: 'Product discount price must need to input.'
    },
    {
        type: 'file',
        name: 'slider_images',
        label: 'Slider images',
        placeholder: 'Input images',
        required: true,
        errorMessage: 'Product image must need to upload.'
    },
    {
        type: 'number',
        name: 'discount',
        label: 'Discount',
        defaultValue: 0,
        placeholder: 'Enter discount - (Percentage) ',
        required: false
    },
    {
        type: 'text',
        name: 'discription',
        label: 'Discription',
        placeholder: "Enter descripition",
        required: true,
        errorMessage: 'Product description must need.'
    },
    {
        type: 'checkbox',
        name: 'in_stock',
        label: 'In Stock',
        required: true,
    },
    {
        type: 'number',
        name: 'quantity',
        label: 'Quantity',
        required: true,
        placeholder: 'Input quantity',
        errorMessage: 'Quantity must need to input.'
    },
    {
        type: 'select',
        name: 'categoryId',
        label: 'Category',
        placeholder: 'Select category',
        required: true,
        options: [
            {
                label: 'Xyz',
                value: 'xyz'
            }
        ],
        errorMessage: 'Must need to select category.'
    },
    {
        type: 'select',
        name: 'brandId',
        label: 'Brand',
        placeholder: 'Select brand',
        required: true,
        options: [
            {
                label: 'Xyz',
                value: 'xyz'
            }
        ],
        errorMessage: 'Must need to select brand.'
    },
    {
        type: 'textarea',
        name: 'warranty',
        label: 'Warrranty',
        placeholder: 'Input warranty.'
    },
    {
        type: 'textarea',
        name: 'policies',
        label: 'Policies',
        placeholder: 'Input Policies.',
    }
];
