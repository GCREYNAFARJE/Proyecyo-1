import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { BuildingStorefrontIcon } from '@heroicons/react/24/solid'
import {ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li>
        < BuildingStorefrontIcon  className='size-8 text-black'>
        </ BuildingStorefrontIcon >
        </li>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>
          StellarShop 
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory()}
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Todos los productos 
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
        StellarShop@gmail.com
        </li>
        <li className='text-black/60'>
          Contacto:9174900674
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Mis ordenes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Mi cuenta
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sing-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            Iniciar sesión
          </NavLink>
        </li>
        <li className='flex'>
        < ShoppingBagIcon  className='size-5 text-black'>
        </ ShoppingBagIcon > 
        <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar