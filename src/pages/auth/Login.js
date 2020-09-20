import React, { useState, useEffect } from 'react'
import { Container, Input, Button, ButtonGroup, Label, Row, Col, Card, CardBody } from 'reactstrap'
import { useHistory, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const handleSumbit = (e) => {
        e.preventDefault();
        props.loginUser({ email, password }, history);
    }

    const handleRegister = () => {
        history.replace('/auth/register')
    }
    const { clearError } = props;
    useEffect(() => {
        clearError()
    }, [clearError])

    if (localStorage.getItem('token')) {
        return <Redirect to='/' />
    }
    return (
        <div style={{ backgroundColor: '#e3f2fd' }}>
            <Container>
                <Row
                    style={{ height: '100vh' }}
                    className='justify-content-center align-items-center'>
                    <Col md={8}>
                        <Card className="shadow">
                            <CardBody className="d-flex justify-content-around">
                                <form className="col-md-6"
                                    onSubmit={handleSumbit}>
                                    {/* <h2>Войти</h2> */}
                                    {props?.err && props?.err?.response?.data?.message && (
                                        <h4 className='text-danger'>
                                            Ошибка: {props.err.response.data.message}
                                        </h4>
                                    )}
                                    <Label htmlFor='email' className="mt-3">
                                        Адрес электронной почты:
                                    </Label>
                                    <Input
                                        id='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Label htmlFor='password' className="mt-3">
                                        Пароль:
                                    </Label>
                                    <Input
                                        id='password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <ButtonGroup className=' w-100 mt-4'>
                                        <Button style={{
                                            'backgroundColor': '#7FB3FF',
                                            'color': 'black',
                                            'border': 'none',
                                        }}
                                            type='submit'
                                        >Войти
                                    </Button>
                                    </ButtonGroup>
                                </form>
                                <form className='col-md-6' style={{ 'backgroundColor': '#7FB3FF' }}>
                                    <p className="text-center mt-3">
                                        <h2>Регистрация</h2>
                                        <p>Регистрируясь на наш сайт Вы получаете
                                            возможность продать старую, новую, 
                                            неиспользованную бытовую технику и купить 
                                            любую бытовую технику по 
                                            привлекательной цене.</p> {" "}
                                        <Link to="/auth/register">
                                            <Button
                                                onClick={handleRegister}
                                                className='mb-3 text-dark' style={{'backgroundColor': 'white', 'border': 'none'}}
                                            >
                                                Зарегистрироваться
                                            </Button>
                                        </Link>
                                    </p>

                                </form>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

const mapStateToProps = state => {
    const { isAuth, loading, err } = state.AuthReducer;
    return { isAuth, loading, err }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: ({ email, password }, history) => {
            dispatch(loginUser(
                { email, password },
                history
            )
            )
        },
        clearError: () => dispatch({
            type: 'CLEAR_ERROR'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
