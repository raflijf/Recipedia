import { Link } from 'react-router-dom'
import { useContext, useRef, useState } from 'react'

import NavItem from '../components/navbar/NavItem'
import PrimaryButton from '../components/button/PrimaryButton'

import logo from '../assets/Recipedia.png'
import SecondryButton from '../components/button/SecondryButton'

import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

import clsx from 'clsx'
import { SearchContext } from '../context/SearchContext'

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
    
    const {setOpenSearchModal} = useContext(SearchContext)
    return (
        <nav className='w-full h-15 lg:h-20 z-20 '>
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

                        <div className='duration-300 lg:hidden flex gap-4 items-center'>
                            <MagnifyingGlassIcon className='search size-5' onClick={() => setOpenSearchModal(true)}/>
                            {menuOpen ? 
                                <XMarkIcon className='size-6' onClick={handleMenu}/>
                                :
                                <Bars3Icon className='size-6' onClick={handleMenu}/>
                            }
                        </div>
                    </div>
                </div>
                {menuOpen && 
                    <div className='bg-light shadow-md  w-full h-fit pb-5 lg:hidden '>
                        <div>
                            <div className='grid grid-rows-4 gap-3 justify-items-center items-center '>
                                <NavItem to={'/'}>Beranda</NavItem>
                                <NavItem to={'/recipes'}>Resep</NavItem>
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