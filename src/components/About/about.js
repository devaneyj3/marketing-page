import React, { useState } from 'react';
import './about.scss'
import { newArray } from './Person.js'
import Staff from './Staff.js'


const About = () => {
    const [ people ] = useState(newArray)
    return (
        <>
            <h1 className="about-heading">We take pride in high quality cereal. The best cereal on the face of the earth. However, be warned that there might be some of Dwight's dandruff in some of the cereal.</h1>
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
