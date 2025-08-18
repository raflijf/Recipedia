import clsx from "clsx"

export default function SecondryButton({size = 'medium', color = 'primary', children}) {
    const sizeClasses = {
        small: 'py-0.5 px-2 text-xs sm:py-1 sm:px-2.5 sm:text-sm',
        medium: 'py-1 px-3 text-sm sm:py-1.5 sm:px-3.5 sm:text-base',
        large: 'py-1.5 px-4 text-base sm:py-2.5 sm:px-5.5 sm:text-lg'
    }
    const colorClasses = {
        primary : 'border-primary text-primary hover:bg-primary hover:text-white  ',
        secondry : 'border-secondry text-secondry hover:bg-secondry  hover:text-white',
        accent : 'border-accent text-accent hover:bg-accent  hover:text-white'
    }
    return <button className={clsx(sizeClasses[size], colorClasses[color], 'border-2 rounded duration-200 font-semibold')}>{children}</button>
}