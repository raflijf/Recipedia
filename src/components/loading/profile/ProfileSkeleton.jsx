import PostCardProfile from "../../post/profile/PostCardProfile";
import PostCardProfileSkeleton from "./PostCardProfileSkeleton";

export default function ProfileSkeleton() {
    return (
        <div className="animate-pulse mt-5 lg:grid lg:grid-cols-[auto_1fr] gap-10 space-y-10">
            <div className="lg:w-xs w-full">
                <div>
                    <div className="flex justify-center">
                        <div className="w-70 h-70 rounded-full bg-gray-300"></div>
                    </div>

                    <div className="my-3 flex flex-col gap-3">

                        <div className="h-8 bg-gray-300 rounded-md w-2/3 "></div>
                        <div className="h-6 bg-gray-300 rounded-md w-1/2 "></div>

                        <div className="h-10 bg-gray-300 rounded-md w-full"></div>

                        <div className="space-y-2">
                            <div className="h-3 bg-gray-300 rounded-md w-full"></div>
                            <div className="h-3 bg-gray-300 rounded-md w-5/6"></div>
                            <div className="h-3 bg-gray-300 rounded-md w-4/6"></div>
                            <div className="h-3 bg-gray-300 rounded-md w-3/6"></div>
                        </div>

                    </div>
                </div>

                <hr className="opacity-20 my-8" />

                <div className="flex flex-col gap-4">

                    {[...Array(4)].map(i => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="size-5 bg-gray-300 rounded"></div>
                            <div className="h-4 bg-gray-300 rounded w-40"></div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="gap-3.5 grid">
                {[...Array(6)].map((_, idx) => (
                    <PostCardProfileSkeleton key={idx}/>
                ))}
            </div>
        </div>
    )
}