import { type FC } from "react";
import { cn } from "@/lib/utils";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { useCart } from "./hooks/useCart";
import type { CartPageProps } from "./types";
import CartTable from "./components/CartTable";
import CartItemCard from "./components/CartItemCard";
import CouponSection from "./components/CouponSection";
import CartTotalCard from "./components/CartTotalCard";
import EmptyCart from "./components/EmptyCart";
import { toast } from "sonner";

const Cart: FC<CartPageProps> = ({ className }) => {
  const {
    cart,
    isEmpty,
    breadcrumbItems,
    handleReturnToShop,
    handleUpdateCart,
    handleProceedToCheckout,
    removeItem,
    updateQuantity,
  } = useCart();

  // Show empty cart state
  if (isEmpty) {
    return <EmptyCart />;
  }

  const onUpdateCart = () => {
    const success = handleUpdateCart();
    if (success) {
      toast.success("Cart updated successfully");
    }
  };

  return (
    <div className={cn("flex flex-col min-h-screen", className)}>
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-6 lg:py-8">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Cart Content */}
        <section className="container mx-auto px-4 pb-12 lg:pb-16">
          {/* Desktop Table View */}
          <div className="hidden md:block">
            <CartTable
              items={cart.items}
              onRemove={removeItem}
              onQuantityChange={updateQuantity}
            />
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {cart.items.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
            <Button variant="outline" onClick={handleReturnToShop}>
              Return To Shop
            </Button>
            <Button variant="outline" onClick={onUpdateCart}>
              Update Cart
            </Button>
          </div>

          {/* Coupon and Cart Total Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Coupon Section - Left */}
            <div className="lg:col-span-2">
              <CouponSection />
            </div>

            {/* Cart Total - Right */}
            <div className="lg:col-span-1">
              <CartTotalCard
                subtotal={cart.subtotal}
                shipping={cart.shipping}
                total={cart.total}
                onCheckout={handleProceedToCheckout}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cart;
