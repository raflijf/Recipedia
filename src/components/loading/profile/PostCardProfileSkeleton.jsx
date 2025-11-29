
export default function PostCardProfileSkeleton() {
    return (
        <div className="flex w-full gap-3 h-24 lg:h-36 animate-pulse">
            <div className="lg:w-55 w-30 aspect-[16/9] bg-gray-300 rounded"></div>
            <div className="grid grid-rows-[1fr_auto] w-full">
                <div>
                    <div className="h-3 w-24 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-1"></div>
                    <div className="h-4 w-4/5 bg-gray-300 rounded"></div>
                </div>
                <div className="grid grid-cols-2 items-center gap-5 md:gap-7 w-30">
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-4 w-20 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    )
}