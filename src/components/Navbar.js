import React, { useState } from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Form,
  Navbar,
  NavbarToggler,
} from "reactstrap";
import { Link } from "react-router-dom";
import CartBtn from './CartBtn';


const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      {/* <Navbar style={{ 'backgroundColor': "#e3f2fd" }} light expand="md">
                <Link className="nav-link" to="/">
                    <h3 className='text-success'>ECO Friday</h3>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link className="nav-link" to="/about-us/">About Us</Link>
                    </NavItem>
                    
                    <NavItem>
                        <Link className='nav-link' to='/contacts/'>Contacts</Link>
                    </NavItem>
                </Nav>
                <CartBtn />
                <Link className='mr-3' to='/account'>Account</Link>
                <Link to="/auth/logout">Logout</Link>
                
            </Navbar>
      <Nav className="nav-bbar" pills>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className="katalog">
            Каталог товаров
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Смартфоны и гаджеты</DropdownItem>
            <DropdownItem>ТВ,аудио,фото,видео</DropdownItem>
            <DropdownItem>Ноутбуки и компьюеткры</DropdownItem>
            <DropdownItem>Бытовая техника</DropdownItem>
            <DropdownItem>Техника для кухни</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <Link className="nav-items" to='/contacts/'>
            Контакты
          </Link>
        </NavItem>
        <NavItem>
          <NavLink className="nav-items" href="#">
            Блог
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-items" href="#">
            Контакты
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-items" href="#">
           Оплата и доставка
          </NavLink>
        </NavItem>
        <div className="contacts">
            <i class="fa fa-whatsapp"></i>
              +996502600000 <br/>
              <i class="fa fa-whatsapp"></i>
              +996656688787
            </div>
      </Nav> */}
    </div>
  );
};

export default Example;
