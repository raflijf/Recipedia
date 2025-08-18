import { Link } from 'react-router-dom'

import Logo from '../assets/Recipedia.png'

export default function Footer() {
    return (
        <div className="w-full h-auto mt-20 p-5 ">
            <footer className="bg-thirdty text-white w-full h-full rounded-lg p-4 grid grid-rows-[1fr_auto]  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5   gap-5   ">
                <div className='border-white  col-span-full lg:col-span-2'>
                    <img src={Logo} alt="logo" />
                    <p className='text-sm'>Recipedia adalah platform pribadi untuk menyimpan dan mengeksplorasi resep favoritmu. Dibuat sebagai proyek latihan fullstack menggunakan React & Django.</p>
                </div>
                <div>
                    <h2 className='text-xl font-bold mb-4 max-sm:text-center'>Navigation</h2>
                    <ul className='grid gap-1 max-sm:justify-items-center'>
                        <li>
                            <Link className='underline-offset-4 hover:underline' to={'/'}>Beranda</Link>
                        </li>
                        <li>
                            <Link className='underline-offset-4 hover:underline'  to={'/recipe'}>Resep</Link>
                        </li>
                        <li>
                            <Link className='underline-offset-4 hover:underline' to={'/favorite'}>favorit</Link>
                        </li>
                        <li>
                            <Link className='underline-offset-4 hover:underline' to={'/add-recipe'}>Buat</Link>
                        </li>
                        <li>
                            <Link className='underline-offset-4 hover:underline' to={'/add-recipe'}>kontak</Link>
                        </li>
                    </ul>

                </div>
                
                <div>
                    <h2 className='text-xl font-bold mb-4 max-sm:text-center'>Resources</h2>
                    <ul className='grid gap-1 max-sm:justify-items-center '>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit '>API</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>Docs</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>Tutorial</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>Community</li>
                    </ul>
                </div>
                
                <div className='max-sm:col-span-full'>
                    <h2 className='text-xl font-bold mb-4  max-sm:text-center'>Connect</h2>
                    <ul className='grid gap-1 max-sm:justify-items-center'>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit '>Github</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>Tiktok</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>Instagram</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>Facebook</li>
                        <li className='underline-offset-4 hover:underline cursor-pointer w-fit'>X</li>
                    </ul>
                </div>
                
                <div className='   col-span-full '>
                    <hr className='mb-4 text-gray-600'/>
                    <p className='text-white/45 text-[12px] text-center'>&copy; 2025 Recipedia | Built with ❤️ using React, Tailwind & Django</p>
                    <p className='text-white/45 text-[12px] text-center'> Disclaimer : this website just for Dummy project </p>
                </div>
                
            </footer>
        </div>
    )
}