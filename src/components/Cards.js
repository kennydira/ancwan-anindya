import React from 'react'
import CardItem from './CardItem'
import { Row} from 'react-bootstrap'

function Cards() {
    return (
        <>
            <div>
                <Row style={{margin: "auto", justifyContent: "center", alignItems: "center"}}>
                    <CardItem />
                </Row>
            </div>
        </>
    )
}

export default Cards
