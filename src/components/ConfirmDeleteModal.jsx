"use client"

import { AlertCircle } from "lucide-react"

export default function ConfirmDeleteModal({ isOpen, onConfirm, onCancel, productTitle }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="border border-border bg-card w-full max-w-sm rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-5 h-5 text-destructive" />
          <h2 className="text-lg font-bold text-foreground">Delete Product</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          Are you sure you want to delete <span className="font-semibold text-foreground">"{productTitle}"</span>? This
          action cannot be undone.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-border text-foreground hover:bg-muted rounded-md transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-destructive text-destructive-foreground hover:bg-opacity-90 rounded-md transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}
