import React from 'react'
import CardItem from './CardItem'
import { Row} from 'react-bootstrap'

function Cards() {
    return (
        <>
            <div  style={{margin: "auto"}}>
                <Row md={4}>
                    <CardItem />
                </Row>
            </div>
        </>
    )
}

export default Cards
