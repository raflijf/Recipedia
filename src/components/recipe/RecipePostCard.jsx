
export default function SecondaryPostCard({title, img}) {
    return (
        <div className="max-w-md w-full cursor-pointer ">
            <div className="rounded-lg w-full  overflow-hidden group relative text-base ">
                <img 
                    src={img} 
                    alt={title} 
                    className="group-hover:scale-106 w-full aspect-[16/12.5] transform duration-300  brightness-70 "
                />
                <h2 className="absolute top-[45%]  text-center w-full   text-[1em] lg:text-[1.6em] font-semibold text-white">{title}</h2>
            </div>
        </div>
    )
}