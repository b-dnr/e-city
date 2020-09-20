import React from 'react'
import { Row, Col } from 'reactstrap'
import ListItem from './ListItem'
import styles from './Products.module.css';

function List(props) {
    // console.log(props)
    return (
        <Row>
            {props.data.map((item)=>(
                <Col md={4} className={styles.card} key={item._id}>
                    <ListItem item={item}/>
                </Col>
            ))}
        </Row>
    )
}

export default List
