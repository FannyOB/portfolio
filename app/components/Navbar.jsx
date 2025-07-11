'use client';
import Image from 'next/image'
import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'


const Navbar = ({isDarkMode, setIsDarkmode}) => {

    const[isScroll, setIsScroll] = useState(false);

    const sideMenuRef = useRef();
    const pathname = usePathname();
    const router = useRouter();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    }, [])

    // Fonction pour gérer le scroll ou la redirection
    const handleNav = (e, id) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien
        if (pathname === '/') {
            // Si on est sur la page d'accueil, on fait défiler la page
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            router.push('/#' + id);
        }
    }

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='Header background' priority className='w-full' />
            </div>

            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
                ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""} `}>
                <a href='/' aria-label="Accueil">
                    <Image src={isDarkMode ? assets.logo_dark_f : assets.logo_f} alt='' className='w-28 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8
                rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
                    <li><a className="font-Ovo" href="/" onClick={e => { if(pathname !== '/') { e.preventDefault(); router.push('/'); } }}>Home</a></li>
                    <li><a className="font-Ovo" href="#about" onClick={e => handleNav(e, 'about')}>About me</a></li>
                    <li><a className="font-Ovo" href="#work" onClick={e => handleNav(e, 'work')}>My Work</a></li>
                    <li><a className="font-Ovo" href="#contact" onClick={e => handleNav(e, 'contact')}>Contact me</a></li>
                </ul>

            <div className='flex items-center gap-4'>
                <button onClick={() => setIsDarkmode(prev => !prev)}>
                    {console.log('isDarkMode:', isDarkMode, 'icon path:', isDarkMode ? assets.sun_icon : assets.moon_icon)}
                    <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='Toggle theme' className='w-6'/>
                </button>

                    <a href="#contact" className='hidden lg:flex items-center gap-3 px-10
                    py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'
                    onClick={e => handleNav(e, 'contact')}
                    >Contact
                        <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>

                {/* Menu mobile */}
                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    <li><a className="font-Ovo" href="/" onClick={e => { closeMenu(); if(pathname !== '/') { e.preventDefault(); router.push('/'); } }}>Home</a></li>
                    <li><a className="font-Ovo" href="#about" onClick={e => { closeMenu(); handleNav(e, 'about'); }}>About me</a></li>
                    <li><a className="font-Ovo" href="#work" onClick={e => { closeMenu(); handleNav(e, 'work'); }}>My Work</a></li>
                    <li><a className="font-Ovo" href="#contact" onClick={e => { closeMenu(); handleNav(e, 'contact'); }}>Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
