import React, { useState } from 'react'
import {
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Form,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    ButtonGroup,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CartBtn from './CartBtn';
import logo from "../assets/logo.PNG";
import "./Header.css";





function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar style={{ 'backgroundColor': "#e3f2fd" }} light expand="md">
                <Link className="nav-link" to="/">
                <img className="logo-hdr" src={logo} alt="logo"></img>
                </Link>
                <Nav className="mr-auto" navbar>
                <NavbarToggler onClick={toggle} />
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle className='text-dark' nav caret>
                        Каталог товаров
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>Смартфоны и гаджеты</DropdownItem>
                        <DropdownItem>ТВ,аудио,фото,видео</DropdownItem>
                        <DropdownItem>Ноутбуки и компьюеткры</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Бытовая техника</DropdownItem>
                        <DropdownItem>Техника для кухни</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                    <NavItem>
                        <Link className="nav-link text-dark" to="/form/">Добавить товар</Link>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link text-dark" to="/about-us/">О нас</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='nav-link text-dark' to='/contacts/'>Контакты</Link>
                    </NavItem>
                </Nav>
                <Form>
                    <div className="form-grp">
                        <input type="search" name="search" className="search-inp" placeholder="Поиск..."/>
                        <ButtonGroup>
                            <Button className="nav-btn btn-info">Поиск</Button>
                        </ButtonGroup>
                    </div>
                </Form>
                <CartBtn />
                <Link className='mr-3 text-dark' to='/account'>Личный кабинет</Link>
                <Link className='text-dark' to="/auth/logout">Выйти</Link>
                
            </Navbar>
        </div>
    )
}

export default Header