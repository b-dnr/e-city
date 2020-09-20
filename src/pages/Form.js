import React, { useState } from 'react'
import Axios from 'axios';
import { addNewProduct } from '../redux/actions';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

function Form(props) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");

    const history = useHistory();

    const url = "http://localhost:8000"

    function addNewProduct(e) {
        e.preventDefault()
        const data = {
            id: Date.now(),
            title,
            price,
            image,
            phone,
            name
        }
        if (title !== '' && price !== '') {
            (async function () {
                await Axios.post(`${url}/posts`, data)
                props.addNewProduct(data)
                setTitle('')
                setPrice('')
                setImage('')
                setPhone('')
                setName('')
            }());
        }
        history.push('/')

    }
    return (
        <div>
            <Container>
                <Row
                className="justify-content-center align-items-center">
                    <Col md={8}>
                        <Card className="shadow">
                            <CardBody>
                                <form onSubmit={(event) => addNewProduct(event)}>
                                    <h5 
                                    className="text-center"
                                    >Заполните поля для добавления товара</h5>
                                    <div className="form-group col-md-12 mt-4    
                                    d-flex flex-column">
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="Название товара"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="number"
                                            placeholder="Цена"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                        
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="URL фото"
                                            value={image}
                                            onChange={(e) => setImage(e.target.value)}
                                        />
                                        <input
                                            className="form-control mb-3"
                                            type="text"
                                            placeholder="Имя и фамилия"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input className="form-control mb-3"
                                            type="number"
                                            placeholder="Контактный номер телефона"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <button className="btn btn-primary w-100"
                                            type="submit">
                                            Опубликовать товар
                                        </button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}



export default connect(null, { addNewProduct })(Form)