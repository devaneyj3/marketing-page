import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';  

const Staff =({ name, title, quote, photo}) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{title}</CardSubtitle>
            </CardBody>
            <img height='100' width="100" src={photo} alt="Card" />
            <CardBody>
                <CardText>{quote}</CardText>
            </CardBody>
        </Card>
    )
}

export default Staff
