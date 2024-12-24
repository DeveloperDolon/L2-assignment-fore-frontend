type Product = {
  _id?: string;
  actual_price: number;
  product_name: string;
  images: string;
  discount: number;
  description: string;
  inStock: boolean;
  quantity: number;
  category_id: string;
  brand_id: string;
  average_rating: number;
  review_count: number;
  warranty: string;
  policies: string;
  is_deleted: boolean;
};

type Review = {
  id?: string;
  userId: string;
  productId: string;
  reviewMessage: string;
  rating: number;
  isVerified: boolean;
  likeCount: number;
  dislikeCount: number;
  createdAt: Date;
};

type Brand = {
  id?: string;
  brandImage: string | File;
  name: string;
};

type Category = {
  _id?: string;
  name?: string;
};

type User = {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role?: string;
  avatar?: string | File;
};

type ProductOption = {
  menuName: string;
  tags: string[];
  submenu: {
    label: string;
    value: string | number | undefined;
  }[];
};

type DynamicFormFieldType =
  | 'checkbox'
  | 'text'
  | 'textarea'
  | 'select'
  | 'date'
  | 'number'
  | 'file';

type DynamicFormField = {
  type: DynamicFormFieldType;
  name: string;
  label?: string;
  defaultValue?: string | number;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  options?: {
    value?: string | number;
    label?: string;
    _id?: string;
    name?: string;
  }[];
};
