import { useEffect } from "react"
import clsx from "clsx"

export default function BaseModal({ show, onClose, children, width, fullScreen }) {
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
  const widthClasses = {
    sm:"max-w-sm",
    md:"max-w-md",
    lg:"max-w-lg",
    xl:"max-w-xl",
    twoxl:"max-w-2xl",
    threexl:"max-w-3xl",
  }

  return (
    <div
      className="modal-backdrop fixed inset-0 flex items-center justify-center bg-black/60 z-50 overflow-hidden"
      onClick={handleBackdropClick}
    >
      <div
        className={clsx("modal-container bg-light rounded   p-6  shadow-lg animate-slide-up",
          width ? widthClasses[width]  :  "max-w-md ",
          fullScreen ? "h-full w-full" : "w-[95%] md:w-full "
          )}
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
