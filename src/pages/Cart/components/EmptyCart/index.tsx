import { type FC } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { withCenteredLayout } from "@/hoc";

const EmptyCartContent: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <div className="flex justify-center mb-6">
        <div className="p-6 bg-gray-100 rounded-full">
          <ShoppingCart className="w-16 h-16 text-gray-400" />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <Button onClick={() => navigate("/")} size="lg">
        Continue Shopping
      </Button>
    </div>
  );
};

const EmptyCart = withCenteredLayout(EmptyCartContent);

export default EmptyCart;
