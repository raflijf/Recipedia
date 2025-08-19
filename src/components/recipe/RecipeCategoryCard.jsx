
export default function RecipeCategoryCard({name, img}) {
    return (
        <div className="  w-32 h-27 sm:w-40 sm:h-35 lg:w-48 lg:h-43  relative flex justify-center overflow-hidden rounded-md group cursor-pointer " >
            <img src={img} alt="" className="w-full h-full brightness-75 transform group-hover:scale-108 transition-transform duration-300 object-cover" />
            <h1 className="absolute  bottom-[16%] text-center bg-no-repeat text-white w-[86%]    text-xl font-semibold">{name}</h1>
        </div>

    )
}