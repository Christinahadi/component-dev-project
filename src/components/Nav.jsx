import './Nav.css'
const Nav = () => {
  return (
   
      <nav>
        <span className='logo'>Logo</span>
        <ul className='menu'>
          <li className='menu__item'>Component1</li>
          <li className='menu__item'>Display</li>
           {/* BEM  BLOCK ELEMENT Modifier */}
        </ul>
      </nav>
    
  );
}

export default Nav;
