export default function PostCardSkeleton() {
    return (
        <div className="w-full max-w-md grid  gap-2 animate-pulse -z-10 ">
            <div className="[&>*]:bg-gray-300 grid grid-cols-[auto_auto_1fr] gap-2 items-center justify-items-end w-full  ">
                <div className="w-8 h-8 rounded-full"></div>
                <div className="w-20 h-4 rounded-xs"></div>
                <div className="w-12 h-4 rounded-xs"></div>
            </div>
            <div className="w-full ">
                <div className="bg-gray-300 w-full h-48 sm:h-60  rounded-sm "></div>
            </div>
            <div className="[&>*]:bg-gray-300 grid grid-cols-[auto_auto_1fr] gap-2 justify-items-end items-center">
                <div className="w-22 h-7 rounded-xs"></div>
                <div className="w-22 h-7 rounded-xs"></div>
                <div className="w-9 h-9 rounded-full"></div>
            </div>
            <div>
                <div className="bg-gray-300 w-full h-6 rounded-xs"></div>
            </div>
        </div>

    )
}