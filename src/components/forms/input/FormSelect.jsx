import clsx from "clsx"

export default function FormSelect({size = "md", className, children, ...props}) {

    const sizes = {
        sm: "h-8 text-sm px-2",
        md: "h-10 text-base px-3",
        lg: "h-13 text-xl md:text-2xl px-4",
    }

    return (
        <div className="relative w-full">
        <select
            className={clsx(
            "bg-[#E6E6E6] text-thirdty w-full rounded-md focus:outline-none focus:ring-2 focus:ring-thirdty/40",
            "appearance-none transition-all duration-200 ease-in-out cursor-pointer",
            sizes[size],
            className
            )}
            {...props}
        >
            {children}
        </select>

        <span
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
            style={{
            fontSize: size === "lg" ? "1.5rem" : size === "sm" ? "0.8rem" : "1rem",
            }}
        >
            ▼
        </span>
        </div>
    )
}
