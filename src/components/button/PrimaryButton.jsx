import clsx from "clsx"

export default function PrimaryButton({size = 'medium', color = 'primary', children, className, ...props}) {
    const Size = {
        small: 'py-1 px-3 text-xs sm:py-1.5 sm:px-3.5 sm:text-sm',
        medium: 'py-2 px-3 text-sm sm:py-2 sm:px-4 sm:text-base',
        large: 'py-2 px-4 text-base sm:py-3 sm:px-6 sm:text-xl'
    }
    const colorClasses = {
        primary : 'bg-primary hover:bg-primaryHover ',
        secondry : 'bg-secondry hover:bg-secondryHover ',
        accent : 'bg-accent hover:bg-accentHover  '
    }
    
    return <button {...props} className={clsx(Size[size], colorClasses[color],`duration-200 rounded cursor-pointer font-medium  text-white  `, className )}>{children}</button>   
}