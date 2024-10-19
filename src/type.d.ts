type SliderImagesType = {
  caption: string;
  image: string;
};

type Product = {
  actualPrice: number;
  name: string;
  discountPrice: number;
  images: SliderImagesType[];
  discount: number;
  description: string;
  inStock: boolean;
  quantity: number;
  categoryId: string;
  reviewsCount?: number;
  averageRating: number;
  warranty: string;
  policies: string;
};
