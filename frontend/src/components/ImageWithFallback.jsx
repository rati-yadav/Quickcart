import { useState } from 'react'

export function ImageWithFallback({ src, alt, className, style, ...props }) {
  const [error, setError] = useState(false)
  const fallbackImage = 'https://via.placeholder.com/400x400?text=No+Image'

  if (error || !src) {
    return <img src={fallbackImage} alt={alt || 'Image not available'} className={className} style={style} {...props} />
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setError(true)}
      {...props}
    />
  )
}
