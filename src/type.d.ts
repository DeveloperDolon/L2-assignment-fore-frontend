type SliderImagesType = {
  caption: string;
  image: string | File;
};

type Product = {
  id?: string;
  actualPrice: number;
  name: string;
  images: SliderImagesType[];
  discount: number;
  description: string;
  inStock: boolean;
  quantity: number;
  categoryId: string;
  brandId: string;
  averageRating: number;
  reviewCount: number;
  warranty: string;
  policies: string;
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
  id?: string;
  name: string;
  image: string | File;
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

type DynamicFormFieldType = 'checkbox' | 'text' | 'textarea' | 'select' | 'date' | 'number' | 'file';

type DynamicFormField = {
  type : DynamicFormFieldType;
  name: string;
  label?: string;
  defaultValue?: string | number;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string;
  options?: {value?: string | number; label: string;}[];
};