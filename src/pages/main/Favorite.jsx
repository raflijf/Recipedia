import { Link } from "react-router-dom"

import { Helmet } from "react-helmet"

export default function Favorite() {

    return (
        <>
            <Helmet>
                <title>Favorit</title>
            </Helmet>
            <div className=" h-screen ">
                <div className="h-full items-center flex  flex-col justify-center">
                    <h2 className="text-center   text-text font-medium">Anda Belum Menambahkan Resep Favorit</h2>
                    <Link to={'/'}  className="text-secondry font-medium hover:underline underline-offset-2 ">Cari Resep</Link>
                </div>
            </div>        
        </>
    )
}