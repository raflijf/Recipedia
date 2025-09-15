import { Helmet } from "react-helmet"

export default function Favorite() {
    return (
        <>
            <Helmet>
                <title>Favorit</title>
            </Helmet>

            <div className="grid  grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] h-screen" >
                <div className="col-start-2 h-full ">
                    <h2 className="text-center h-full items-center flex justify-center  text-text/35">Anda Belum Menambahkan Resep Favorit</h2>
                    

                </div>
            </div>        
        </>
    )
}