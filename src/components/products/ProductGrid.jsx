"use client"

import { useState } from "react"
import ProductCard from "./ProductCard"
import { Plus } from "lucide-react"
import AddProductModal from "./AddProductModal"

export default function ProductGrid({ products }) {
  const [showAddModal, setShowAddModal] = useState(false)

  return (
    <div>
      {/* Add Product Button */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">
          {products.length} {products.length === 1 ? "Product" : "Products"}
        </h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Product
        </button>
      </div>

      {/* Products Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No products found</p>
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
          >
            Add the first product
          </button>
        </div>
      )}

      {/* Add Product Modal */}
      <AddProductModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
    </div>
  )
}
