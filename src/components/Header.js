import { useState } from 'react';
import {
   Navbar,
   NavbarBrand,
   Collapse,
   NavbarToggler,
   Nav,
   NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import UserLoginForm from '../features/user/UserLoginForm';

/* to do list
    - change icons for nav items
    - center texts
    - add login modal form
*/

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <Navbar dark color='primary' expand='md'>
         <NavbarBrand href='/'>
            <h1>Storage Solutions</h1>
            <h2>Pallet Locator</h2>
         </NavbarBrand>
         <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
         <Collapse isOpen={menuOpen} navbar>
            <Nav className='ms-auto' navbar>
               <NavItem>
                  <NavLink className='nav-link' to='/'>
                     <i className='fa fa-home fa-lg' /> Home
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className='nav-link' to='/add'>
                     <i className='fa fa-list fa-lg' /> Add
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink className='nav-link' to='/locate'>
                     <i className='fa fa-info fa-lg' /> Locate
                  </NavLink>
               </NavItem>
            </Nav>
            <UserLoginForm />
         </Collapse>
      </Navbar>
   );
};

export default Header;
