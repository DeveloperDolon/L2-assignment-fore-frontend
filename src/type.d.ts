type SliderImagesType = {
  caption: string;
  image: string | File;
};

type Product = {
  id?: string;
  actualPrice: number;
  name: string;
  discountPrice: number;
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
