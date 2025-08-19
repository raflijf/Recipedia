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
        <div className="grid grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] mt-15">
            <div className="col-start-2 flex flex-wrap justify-center gap-4">
                {categoriesRecipe.map((itm, idx) => (
                    <RecipeCategoryCard 
                        name={itm.name} 
                        img={itm.img}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    )
}