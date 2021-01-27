import React from 'react'
import cars from '../cars.json'
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

// import material ui components here //
// Container, Paper, Chip //

const Car = (props) => {
    const currentCar = cars.find(car => car.id == props.match.params.id)

    const carArr = []

    for (const [key, value] of Object.entries(currentCar)) {
        carArr.push(`${key}: ${value}`);
    }

    return (
        <Container style={{marginTop: "3em"}} maxWidth="sm">
            <Paper style={{padding: "4em"}}>
            <h1>{currentCar.Name}</h1>
            {carArr.map(info => <Chip label={info}/>)}
            </Paper>
        </Container>
    )
}

export default Car