"use client"

import { useParams, useNavigate } from "react-router-dom"
import ProductDetails from "../components/products/ProductDetails"
import LoadingSpinner from "../components/ui/LoadingSpinner"
import ErrorMessage from "../components/ui/ErrorMessage"
import { useProducts } from "../context/ProductContext"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { products, loading } = useProducts()

  const product = products.find((p) => p.id === Number.parseInt(id))

  if (loading) return <LoadingSpinner />
  if (!product) return <ErrorMessage message="Product not found" />

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ProductDetails product={product} />
      </div>
    </div>
  )
}
