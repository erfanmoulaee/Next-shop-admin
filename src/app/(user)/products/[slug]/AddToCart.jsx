"use client";

import Loading from "@/common/Loading";
import { useGetUser } from "@/hooks/useAuth";
import { useAddToCart } from "@/hooks/useCart";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function AddToCart({ product }) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { data } = useGetUser();
  const { isLoading, mutateAsync } = useAddToCart();
  const { user } = data || {};
  const AddToCartHandler = async () => {
    if (!user) {
      toast.error("لطفا ابتدا لاگین کنید");
      router.push("/auth");
      return;
    }
    try {
      const { message } = mutateAsync(product._id);
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
    } catch (error) {
      if (error?.response?.data) {
        toast.error(error.response.data.message);
      }
    }
  };

  const isInCart = (user, product) => {
    if (!user) return false;
    return user && user.cart?.products.some((p) => p.productId === product._id);
  };

  return (
    <div>
      {isInCart(user, product) ? (
        <Link href="/cart" className="badge--success px-4 py-2 rounded-xl">
          ادامه سفارش{" "}
        </Link>
      ) : isLoading ? (
        <Loading />
      ) : (
        <button onClick={AddToCartHandler} className="btn btn--primary">
          اضافه کردن به سبد خرید
        </button>
      )}
    </div>
  );
}

export default AddToCart;
