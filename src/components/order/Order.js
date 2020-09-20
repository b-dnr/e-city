import React, { useState } from 'react'
import { Row, Col, FormGroup, Input, Form, Button, Container, Label, Alert } from 'reactstrap'
import { connect } from 'react-redux';
import styles from './Order.module.css';
import Toaster from '../Toaster';

function Order(props) {
    const [alert, setAlert] = useState(false);
    const handleClick = (e) => {
        e.preventDefault()
        setAlert(true)
        setTimeout(()=>{
            setAlert(false)
        }, 3000)
    }
    let checkout = 0 
    return (
        <Container className='md-2 mt-5'>
            <Toaster isOpen={alert}>
                Ваш заказ успешно отправлен!
            </Toaster>
            <Row>
                <Col md={12}>
                    <Form onSubmit={handleClick}>
                        <h2>Заполните поля для оформления заказа</h2>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type='email' name='email' placeholder='Введите Ваш адрес электронной почты'></Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type='text' name='name' placeholder='Введите Ваше имя'></Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input type='number' name='number' placeholder='Введите ваш номер телефона'></Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <ol className='mt-3'>
                            {props.cartItems.map((item)=>(
                                <li>
                                    <h5>{item.title}</h5>
                                    <div className={styles.imageContainer}>
                                        <img alt={item.title} className={styles.image} src={item.image} />
                                    </div>
                                    <p>Цена: {item.price} $</p>
                                </li>
                            ))}
                        </ol>
                        <p>Итого: {props.cartItems.reduce((a,b)=>a+ parseFloat(b.price), 0)} $</p>
                        <Button type='sumbit' className='btn btn-outline-success bg-light w-50'>Заказать</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
const mapStateToProps = state => state.CartReducer
export default connect(mapStateToProps, null)(Order)
