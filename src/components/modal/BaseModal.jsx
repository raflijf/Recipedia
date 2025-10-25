import { useEffect } from "react"

export default function BaseModal({ show, onClose, children }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])
  
  useEffect(() => {
      if (show) {
          document.body.classList.add('overflow-hidden')
      } else {
          document.body.classList.remove('overflow-hidden')
      }
  }, [show])

  if (!show) return null

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      onClose()
    }
  }

  return (
    <div
      className="modal-backdrop fixed inset-0 flex items-center justify-center bg-black/60 z-50 overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div
        className="modal-container bg-light rounded p-6 w-[90%] md:w-full max-w-md shadow-lg animate-slide-up  "
      >
        {children}
      </div>

      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }

        .modal-backdrop {
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
