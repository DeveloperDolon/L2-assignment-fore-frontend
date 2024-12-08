import { useCategoryListQuery } from "@/redux/api/features/category.api";



export function useCategories() {
  const { data } = useCategoryListQuery(1); 

  return data;
}
