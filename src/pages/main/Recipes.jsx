import { Helmet } from "react-helmet";

import RecipeCategoryCard from "../../components/recipe/RecipeCategoryCard";
import makananPembuka from "../../assets/category/risol_mayo.jpg"
import makananPenutup from "../../assets/category/pudding.jpg"
import makananUtama from "../../assets/category/ayam_geprek.jpg"
import makananInternasional from "../../assets/category/sushi.jpg"
import sarapan from "../../assets/category/nasi_uduk.jpg"
import makananLokal from "../../assets/category/rendang.jpg"
import makananSehat from "../../assets/category/salad_sayur.jpg"
import minuman from "../../assets/category/jus_alpukat.jpg"
import cemilan from "../../assets/category/cireng.jpg"
import cepatSaji from "../../assets/category/burger.jpg"
import RecipePostCard from "../../components/recipe/RecipePostCard";

import recipesData from "../../data/recipe_data.json"

import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

export default function Recipes() {

    const categoriesRecipe = [
        {name : 'Makanan Utama', img : makananUtama},
        {name : 'Makanan Penutup', img : makananPenutup},
        {name : 'Makanan Pembuka', img : makananPembuka},
        {name : 'Sarapan', img : sarapan},
        {name : 'Cepat Saji', img : cepatSaji},
        {name : 'Cemilan', img : cemilan},
        {name : 'Makanan Lokal', img : makananLokal},
        {name : 'Makanan Sehat', img : makananSehat},
        {name : 'Minuman', img : minuman},
        {name : 'Makanan Internasional', img : makananInternasional},
    ]
    const recipeDataArray = Object.entries(recipesData)
    
    const categoryRef = useRef(null)
    const goUpButtonRef = useRef(null)

    useEffect(() => {
        const handleShowButton = () => {
            const categoryRect = categoryRef.current.getBoundingClientRect()
            goUpButtonRef.current.style.display = categoryRect.y <= 108 ? 'flex' : 'none'

        }
        window.addEventListener('scroll', handleShowButton)

        return () => window.removeEventListener('scroll', handleShowButton)

    }, [])

    return (
        <>
            <Helmet>    
                <title>Resep</title>
            </Helmet>
            <div className="grid grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] mt-15 ">
                <div className="col-start-2 grid gap-20">
                    <div className="flex flex-wrap justify-center gap-4 scroll-mt-27" id="menu">
                        {categoriesRecipe.map((itm, idx) => (
                            <RecipeCategoryCard 
                                name={itm.name} 
                                img={itm.img}
                                key={idx}
                                id={idx}
                                
                            />
                        ))}
                    </div>
                    <div className="grid gap-10 " ref={categoryRef} >
                        {recipeDataArray.map(([key, values], idx) => (
                            <div key={idx} id={idx} className="scroll-mt-27 grid gap-5  " >
                                <a href={`#${idx}`} className="  text-xl md:text-2xl lg:text-4xl font-bold text-secondry group w-fit grid grid-cols-[auto_1fr] gap-1 cursor-pointer max-md:justify-items-center"><span className="group-hover:text-accent text-light max-md:hidden">#</span>{key}</a>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
                                    {Object.entries(values).map(([name, img], idx) => (
                                        <RecipePostCard title={name} img={img} key={idx} />
                                    ))}
                                </div>                        
                            </div>
                        ))
                        }
                    </div>
                    <div className=" sticky bottom-3 justify-center  w-full " ref={goUpButtonRef}  style={{'display' : 'none'}}>
                        <a href="#menu" className="bg-secondry w-fit  flex items-center text-white p-1 h-10 px-3 rounded-xl font-semibold gap-3 pointer-events-auto "> 
                            <ArrowUpIcon className="size-7" strokeWidth={2.5} />
                            <p>Kembali keatas</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

// fixed  bottom-4 left-0 justify-center flex w-full pointer-events-none  duration-1  