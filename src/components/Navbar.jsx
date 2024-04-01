import { IoPlanetOutline } from "react-icons/io5";
import { GoKebabHorizontal } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const menuLinks = [
  { href: '/',text: 'Home'},
  { href: '/data',text: 'Data'},
  { href: '/blog',text: 'Blog'},
  { href: '/contact',text: 'Contact'}
  ]


const Navbar = () => {
  return (
    <div>
        <nav className='navbar mx-auto max-w-6xl '>
        {/* Navbar Start */}

        <div className='navbar-start'>
        <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
                <GoKebabHorizontal/>
            </div>
            <ul tabIndex={0} className='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52' style={{'zIndex': '100'}}> 
                {menuLinks.map((link)=>(
                <li key={link.href} className=''>
                    <a href={link.href} className=''>{link.text}</a>
                </li>
                ))}
            </ul> 
            </div>
        </div>

        {/* Navbar Center */}

        <div className='navbar-center'>
        <div className=''>
            <div className='flex text-xl items-center'>
                <IoPlanetOutline/>
                <div className=''> 
                <span className='font-bold'>Data</span>Verse
                </div>
            </div>
            </div>
        </div>


        <div className='navbar-end'>
            <div>
            <FaUser/>
            </div>
        </div>
        

        </nav>
    </div>
  )
}

export default Navbar