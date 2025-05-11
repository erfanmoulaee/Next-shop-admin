import { addProduct, getOneProductById, getProducts } from "@/services/getProducts";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetProducts = () =>
  useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useAddProduct = () => {
  return useMutation({ mutationFn: addProduct });
};

export const useGetProductById = (id) =>
  useQuery({
    queryKey: ["get-product", id],
    queryFn: () => getOneProductById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
