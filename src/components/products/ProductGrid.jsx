"use client"

import React from "react"
import ProductCard from "./ProductCard"
import { Plus } from "lucide-react"

export default function ProductGrid() {

  return (
    <div>
      {/* Add Product Button */}
      <div className="mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-foreground">
          Product
        </h2>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Product
        </button>
      </div>

      {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard  />
        </div>
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg mb-4">No products found</p>
          <button
            className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
          >
            Add the first product
          </button>
        </div>
    </div>
  )
}
