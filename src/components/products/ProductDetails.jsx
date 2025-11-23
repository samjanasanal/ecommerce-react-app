"use client"

import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { ArrowLeft, Edit2, Trash2 } from "lucide-react"
import EditProductForm from "./EditProductForm"
import ConfirmDeleteModal from "../ConfirmDeleteModal"
import { useProducts } from "../../context/ProductContext"

export default function ProductDetails({ product }) {
  const navigate = useNavigate()
  const { updateProduct, deleteProduct } = useProducts()
  const [isEditing, setIsEditing] = useState(false)
  const [localProduct, setLocalProduct] = useState(product)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const handleUpdate = (updatedProduct) => {
    setLocalProduct(updatedProduct)
    updateProduct(product.id, updatedProduct)
    setIsEditing(false)
  }

  const handleDelete = () => {
    deleteProduct(product.id)
    navigate("/")
  }

  return (
    <div>
      {/* Back Button */}
      <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Products
      </Link>

      {isEditing ? (
        <EditProductForm product={localProduct} onUpdate={handleUpdate} onCancel={() => setIsEditing(false)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Image */}
          <div className="border border-border bg-card p-6 rounded-lg flex items-center justify-center h-96">
            <img
              src={localProduct.image || "/placeholder.svg"}
              alt={localProduct.title}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Right - Details */}
          <div>
            {/* Category Badge */}
            <span className="inline-block text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full capitalize mb-4">
              {localProduct.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{localProduct.title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400 text-xl">
                {"★".repeat(Math.round(localProduct.rating?.rate || 4))}
              </div>
              <span className="text-muted-foreground">
                {localProduct.rating?.rate?.toFixed(1) || 4.0} • {localProduct.rating?.count || 0} reviews
              </span>
            </div>

            {/* Price */}
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
              <p className="text-4xl font-bold text-foreground">${localProduct.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-2">Free shipping on orders over $50</p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">{localProduct.description}</p>
            </div>

            {/* Stock Info */}
            <div className="mb-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <p className="text-sm text-foreground font-medium">✓ In Stock - Ready to ship</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-colors"
              >
                <Edit2 className="w-4 h-4" />
                Edit Product
              </button>

              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="flex-1 px-4 py-2 border border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent rounded-md transition-colors flex items-center justify-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDeleteModal
        isOpen={showDeleteConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
        productTitle={localProduct.title}
      />
    </div>
  )
}
