import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

import NavItem from '../components/navbar/NavItem'
import PrimaryButton from '../components/button/PrimaryButton'

import logo from '../assets/Recipedia.png'
import SecondryButton from '../components/button/SecondryButton'

import clsx from 'clsx'

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleMenu = (e) => {
        e.stopPropagation()
        setMenuOpen(prev => !prev)
    }
    window.addEventListener('click', () => setMenuOpen(false))

    const shadowRef = useRef(null)
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 20) shadowRef.current.classList.add('shadow-lg')
        else shadowRef.current.classList.remove('shadow-lg')
    })
    
    return (
        <nav className='w-full h-15 lg:h-20 z-10 '>
            <div className='fixed w-full'>
                <div className={clsx('bg-light duration-[1000ms] h-15 lg:h-20 grid place-items-center  w-full ')} ref={shadowRef}  >
                    <div className='w-[90%] lg:w-[95%] flex items-center justify-between '>
                        <Link to={'/'} >
                            <img 
                                src={logo} 
                                alt="logo"
                                className='w-35 sm:w-45'
                            />
                        </Link>                            

                        <div className='hidden  lg:flex  justify-between w-[40%] items-center '>
                            <NavItem to={'/'}>Beranda</NavItem>
                            <NavItem to={'/recipes'}>Resep</NavItem>
                            <NavItem to={'/Favorite'}>Favorit</NavItem>
                            <Link to={'/'}>
                                <PrimaryButton >Buat Resep</PrimaryButton>
                            </Link>
                        </div>
                        <div className='hidden  lg:flex  gap-1 items-center'>
                            {/* <img src="https://imageio.forbes.com/specials-images/imageserve/62d599ede3ff49f348f9b9b4/0x0.jpg?format=jpg&crop=821,821,x155,y340,safe&height=416&width=416&fit=bounds"  className='rounded-full w-12' alt="" /> */}
                            <SecondryButton color='secondry' >Register</SecondryButton>
                            <PrimaryButton color='secondry' >Login</PrimaryButton>
                        </div> 
                        <div className='duration-300 lg:hidden'>
                            {menuOpen ? 
                                <svg onClick={handleMenu}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                                :
                                <svg onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 ">
                                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                </svg>
                            }
                        </div>
                    </div>
                </div>
                {menuOpen && 
                    <div className='bg-light shadow-md  w-full h-fit pb-5 lg:hidden '>
                        <div>
                            <div className='grid grid-rows-4 gap-3 justify-items-center items-center '>
                                <NavItem to={'/'}>Beranda</NavItem>
                                <NavItem to={'/recipe'}>Resep</NavItem>
                                <NavItem to={'/Favorite'}>Favorit</NavItem>
                                <Link to={'/'}>
                                    <PrimaryButton >Buat Resep</PrimaryButton>
                                </Link>
                                <div className='flex gap-3'>
                                    <SecondryButton color='secondry' >Register</SecondryButton>
                                    <PrimaryButton color='secondry' >Login</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div> 
                }
            </div>
        </nav>
    )
}