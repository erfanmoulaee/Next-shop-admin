import { addNewCategory, getCategories, getCategoryById, removeCategory, updateCategory } from "@/services/getCategories";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetCategories = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategories,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetCategoryById = (id) =>
  useQuery({
    queryKey: ["get-category", id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddCategory = () => useMutation({ mutationFn: addNewCategory });

export const useUpdateCategory = () => useMutation({ mutationFn: updateCategory });

export const useRemoveCategory = () => useMutation({ mutationFn: removeCategory });
