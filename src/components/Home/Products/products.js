import React, { useState } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import {cereals} from './cereals'
import './products.scss';

const Products = () => {
    const [ products ] = useState(cereals)
    return (
        <>
        {products.map((product, index) => {
            return (
            <CardDeck key={index}>
                <Card>
                    <CardImg top width="50%" src={product.image} alt="Cereal" />
                    <CardBody>
                        <CardTitle>{product.name}</CardTitle>
                        <CardSubtitle>{product.price}</CardSubtitle>
                        <CardText>{product.description}</CardText>
                        <Button>Button</Button>
                    </CardBody>
                </Card>
            </CardDeck>
            )
        })}
        </>
    )
}

export default Products