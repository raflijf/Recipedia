import { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'

import NavItem from '../components/navbar/NavItem'
import PrimaryButton from '../components/button/PrimaryButton'

import { SearchContext } from '../context/SearchContext'

import logo from '../assets/Recipedia.png'
import profil from '../assets/billGates.jpeg'

import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const navigate = useNavigate()

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
    
    const getIdCreateRecipe = () => {
        const data = JSON.parse(localStorage.getItem('recipesSaved'))
        return data ? data.length : 0
    }

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
                            <Link to={`/recipe/create`}>
                                <PrimaryButton >Buat Resep</PrimaryButton>
                            </Link>
                        </div>
                        <div className='hidden  lg:flex  gap-1 items-center'>
                            {/* <Link to={'/profile/1'}>
                                <img src={profil} className='rounded-full w-12' alt="" />
                            </Link> */}
                            <PrimaryButton color='secondry' onClick={() => navigate('/login')}>Log in</PrimaryButton>
                        </div> 

                        <div className='duration-300 lg:hidden flex gap-4 items-center'>
                            <MagnifyingGlassIcon className='search size-5' onClick={() => setOpenSearchModal(true)}/>
                            <Link to={'/profile/1'}>
                                <img src={profil} className='rounded-full  w-7 lg:w-12  ' alt="" />
                            </Link>
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
                                <Link to={`/recipe/create?id=${getIdCreateRecipe()}`}>
                                    <PrimaryButton >Buat Resep</PrimaryButton>
                                </Link>
                                <div className='flex gap-3'>
                                    <PrimaryButton color='secondry' onClick={() => navigate('/login')} >Login</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div> 
                }
            </div>
        </nav>
    )
}