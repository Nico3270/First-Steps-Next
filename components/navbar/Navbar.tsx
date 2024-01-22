import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'


let navItems = [{"path":"/about", "texto":"About"}, 
{"path":"/pricing", "texto":"Pricing"}
,{"path":"/contact", "texto":"Contact"}]


export const Navbar = () => {
  return (
    
        <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>

            <Link href={"/"}><span>Home <HomeIcon size={16} className='mr-4' /> </span></Link>
            <div className='flex flex-1'></div>
            {navItems.map((item) => <ActiveLink key={item.path} path={item.path} text={item.texto}/>)}         
        </nav>
  )
}
