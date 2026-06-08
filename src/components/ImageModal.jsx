import { useEffect } from 'react'

export default function ImageModal({ src, alt, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[10000] bg-black/60 flex items-center justify-center p-6 cursor-zoom-out" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image preview">
      <div className="relative max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)] cursor-default bg-black" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || ''} className="block max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain" />
      </div>
    </div>
  )
}
