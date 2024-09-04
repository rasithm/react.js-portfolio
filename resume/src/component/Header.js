import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
function Header() {
    const [mobileNav , setMobileNav] = useState(false);
    return(
        
        <header className="flex justify-between px-5 py-2  bg-primary ">
            <a className="font-bold text-black" href="#">Rasith & co </a>
            <nav className="hidden md:block">
                <ul className="flex  text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                
                </ul>
            </nav>
            {mobileNav && <nav className="md:hidden block mobile-nav">
                <ul className="flex flex-col text-white">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Contact</a></li>
                
                </ul>
            </nav>}
            <button onClick={() => setMobileNav(!mobileNav)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
        </header>
)}
export default Header