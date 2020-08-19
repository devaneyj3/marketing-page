import React, { useState } from 'react';
import './about.scss'
import { newArray } from './Person.js'
import Staff from './Staff.js'


const About = () => {
    const [ people, setPeople ] = useState(newArray)
    return (
        <>
            <h1>About</h1>
            <div className="about">
                {people.map(person => {
                    return (
                        <Staff
                            name={person.name}
                            title={person.title}
                            quote={person.quote}
                            photo={person.photo}/>
                        )
                } )}
            </div>
        </>
    )
}

export default About;
