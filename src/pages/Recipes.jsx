import RecipeCategoryCard from "../components/recipe/RecipeCategoryCard";
import makananPembuka from "../assets/category/risol_mayo.jpg"
import makananPenutup from "../assets/category/pudding.jpg"
import makananUtama from "../assets/category/ayam_geprek.jpg"
import makananInternasional from "../assets/category/sushi.jpg"
import sarapan from "../assets/category/nasi_uduk.jpg"
import makananLokal from "../assets/category/rendang.jpg"
import makananSehat from "../assets/category/salad_sayur.jpg"
import minuman from "../assets/category/jus_alpukat.jpg"
import cemilan from "../assets/category/cireng.jpg"
import cepatSaji from "../assets/category/burger.jpg"
import RecipePostCard from "../components/recipe/RecipePostCard";


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

    return (
        <div className="grid grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] mt-15 ">
            <div className="col-start-2 grid gap-20">
                <div className="flex flex-wrap justify-center gap-4">
                    {categoriesRecipe.map((itm, idx) => (
                        <RecipeCategoryCard 
                            name={itm.name} 
                            img={itm.img}
                            key={idx}
                            id={idx}
                            
                        />
                    ))}
                </div>
                <div>
                    <div id="0" className="scroll-mt-27 grid gap-5  ">
                        <a href="#0" className="text-4xl font-bold text-secondry group w-fit grid grid-cols-[auto_1fr] gap-1 cursor-pointer max-md:justify-items-center"><span className="group-hover:text-accent text-light max-md:hidden">#</span>Makanan Utama</a>
                        <div>
                            <div className="grid place-items-center   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-14">
                                <RecipePostCard/>
                                <RecipePostCard/>
                                <RecipePostCard/>

                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}