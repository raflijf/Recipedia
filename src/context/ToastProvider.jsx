import { createContext, useState } from "react";
import Toast from "../components/toast/Toast";

export const ToastContext = createContext(null)

export function ToastProvider({children}) {
    const [toast, setToast] = useState({show : false, status : 'success', message : ''})

    return (
        <ToastContext.Provider value={setToast}>
            <Toast toast={toast}/>
            {children}
        </ToastContext.Provider>
    )
}