export default function DetailPostSkeleton() {
    return (
    <div className="grid lg:grid-cols-2 gap-3 max-w-6xl mx-auto animate-pulse">
        <div className="flex justify-center w-full">
            <div className="rounded-lg bg-gray-300 w-full md:h-80 2xl:h-100 aspect-[10/6] lg:aspect-[16/9]" />
        </div>

        <div className="grid grid-rows-[1fr_auto] gap-5">
        <div>
            <div className="h-8 w-2/3 bg-gray-300 rounded mb-4" />

            <div className="flex gap-2 my-2.5">
                <div className="rounded-full bg-gray-300 w-12 h-12" />
                    <div>
                        <div className="h-4 w-28 bg-gray-300 rounded mb-2" />
                    <div className="h-3 w-20 bg-gray-300 rounded" />
                </div>
            </div>

            <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-3 w-full bg-gray-300 rounded" />
                ))}
                <div className="h-3 w-1/2 bg-gray-300 rounded" />
            </div>

            <div className="h-4 w-24 bg-gray-300 rounded mt-3 mx-auto" />
        </div>

            <div className="flex items-center gap-8">
                <div className="h-10 w-10 bg-gray-300 rounded-full" />
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9 bg-gray-300 rounded-full" />
                    <div className="h-6 w-12 bg-gray-300 rounded" />
                </div>
            </div>
        </div>

        <div>
            <div className="mb-4">
                <div className="h-8 w-32 bg-gray-300 rounded mb-3" />
                <div className="flex w-26 items-center gap-2 opacity-70">
                    <div className="h-6 w-6 bg-gray-300 rounded" />
                    <div className="h-4 w-20 bg-gray-300 rounded" />
                </div>
            </div>

            <ul className="flex flex-col gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="h-4 w-40 bg-gray-300 rounded" />
                ))}
            </ul>
        </div>

        <div>
            <div className="mb-4">
                <div className="h-8 w-44 bg-gray-300 rounded mb-3" />
                <div className="flex items-center gap-3 opacity-70">
                    <div className="h-6 w-6 bg-gray-300 rounded" />
                    <div className="h-4 w-20 bg-gray-300 rounded" />
                </div>
            </div>

            <ol className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <li className="flex gap-3" key={i}>
                <div className="bg-gray-300 rounded-full w-9 h-9" />
                <div className="bg-gray-300 w-full h-10 rounded" />
                </li>
            ))}
            </ol>
        </div>
    </div>
    )
}