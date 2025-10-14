import { Eye, Heart } from "lucide-react"
import type { FC } from "react"
import { Button } from "../ui/button"
import type { Product } from "./types"

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="relative bg-gray-100 rounded-lg p-8 mb-4 flex items-center justify-center h-64 overflow-hidden cursor-pointer">
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded">
            -{product.discount}%
          </span>
        )}

        {/* Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
            <Eye className="h-4 w-4" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute z-10 inset-x-0 bottom-0 translate-y-full transition-transform group-hover:translate-y-0">
          <Button className="w-full rounded-none rounded-b-lg bg-black  hover:bg-black hover:opacity-80">Add To Cart</Button>
        </div>

        {/* Product Image */}
        <span className="text-6xl">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-contain transition-transform group-hover:scale-105"
          />
        </span>
      </div>

      {/* Product Info */}
      <h3 className="font-semibold mb-2">{product.name}</h3>

      <div className="flex items-center gap-3 mb-2">
        <span className="text-primary font-semibold">${product.price}</span>
        {(product?.originalPrice || 0) > 0 && (
          <span className="text-gray-400 line-through">${product.originalPrice}</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex text-yellow-400 text-2xl">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
        </div>
        <span className="text-gray-500 text-sm">({product.reviews})</span>
      </div>
    </div>
  )
}

export default ProductCard