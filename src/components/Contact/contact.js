import React from 'react';
import { Button } from 'reactstrap';
import './contact.scss'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <section className="contact-info">
                    <h1>Do you have questions about our amazing cereal. Contact us below. We also cater.</h1>
                </section>
            </div>
            <section className="contact-form">
                <form>
                        <input className="email" type="email" name="email" placeholder="Please enter your email" />
                        <textarea className='message' type="textarea" name="message" placeholder="Please enter message"/>
                    <Button>Submit</Button>
                </form>
            </section>
        </>
    )
}

export default Contact