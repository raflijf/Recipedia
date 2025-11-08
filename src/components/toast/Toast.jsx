import clsx from "clsx"
import { useContext, useEffect, useState } from "react"
import { ToastContext } from "../../context/ToastProvider"

export default function Toast({ toast }) {
    const [visible, setVisible] = useState(false)
    const setToast = useContext(ToastContext)
    useEffect(() => {
        if (toast.show) {
            setVisible(true)
            const timeOut = setTimeout(() => {
                setToast(prev => ({...prev, show : false}))
            }, 4000)
            return () => clearTimeout(timeOut)
        } else {
            const timeout = setTimeout(() => {
                setVisible(false)
            }
            , 300) 
            return () => clearTimeout(timeout)
        }
    }, [toast])

    const status = {
        success: "bg-green-500/25 text-green-700",
        error: "bg-red-500/25 text-red-700",
        warning: "bg-yellow-500/25 text-yellow-700",
        info: "bg-blue-500/25 text-blue-700",
        neutral: "bg-gray-500/25 text-gray-700" 
    }
    const icons = {
        success: ( 
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 50 50" strokeWidth="2" stroke="#16a34a">
                <path d="M25 2C12.309 2 2 12.309 2 25s10.309 23 23 23 23-10.309 23-23S37.691 2 25 2zm0 2c11.61 0 21 9.39 21 21S36.61 46 25 46 4 36.61 4 25 13.39 4 25 4zm9.988 10.988a1 1 0 0 0-.816.451L23.97 30.477l-7.29-6.766a1 1 0 1 0-1.36 1.467l9 8.348 11.512-16.965a1 1 0 0 0-.844-1.573z"></path>
            </svg>
        ),
        warning: (
            <svg width="31" height="31" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#EAB308" transform="rotate(0)" strokeWidth="2">
                <g id="SVGRepo_iconCarrier">
                    <path d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 9V13" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 17.0195V17" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
            </svg>
        ),
        info: (
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 256 256" fill="none">
                <g fill="#3B82F6" fillRule="nonzero" stroke="#3B82F6" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" style={{ mixBlendMode: "normal" }}>
                    <g transform="scale(5.12,5.12)">
                        <path d="M25,2c-12.6907,0 -23,10.3093 -23,23c0,12.69071 10.3093,23 23,23c12.69071,0 23,-10.30929 23,-23c0,-12.6907 -10.30929,-23 -23,-23zM25,4c11.60982,0 21,9.39018 21,21c0,11.60982 -9.39018,21 -21,21c-11.60982,0 -21,-9.39018 -21,-21c0,-11.60982 9.39018,-21 21,-21zM25,11c-1.65685,0 -3,1.34315 -3,3c0,1.65685 1.34315,3 3,3c1.65685,0 3,-1.34315 3,-3c0,-1.65685 -1.34315,-3 -3,-3zM21,21v2h1h1v13h-1h-1v2h1h1h4h1h1v-2h-1h-1v-15h-1h-4z"></path>
                    </g>
                </g>
            </svg>
        ),
        error: (
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" stroke="#DC2626"></circle>
                <line x1="15" y1="9" x2="9" y2="15" stroke="#DC2626"></line>
                <line x1="9" y1="9" x2="15" y2="15" stroke="#DC2626"></line>
            </svg>
        ),  
        neutral: (
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" stroke="#6B7280"></circle>
                <line x1="8" y1="15" x2="16" y2="15" stroke="#6B7280"></line>
            </svg>
        )
    }
    return (
        visible && (
        <div
            className={clsx("fixed top-18 lg:top-23 right-2 max-w-sm h-15 p-1.5 rounded w-full z-50  grid grid-cols-[auto_1fr] items-center gap-2.5",
            "toast", toast.show ? "toast-show" : "toast-hide", status[toast.status])}
        >   {}
            {icons[toast.status]}
            <p className="font-medium">{toast.message}</p>
            <style>
                {`
                 .toast {
                    opacity: 0;
                    transition: opacity 0.3s ease-in-out;
                }
                .toast-show {
                    opacity: 1;
                }
                .toast-hide {
                    opacity: 0;
                }
                `} 
            </style>
        </div>
        )
    )
}
       