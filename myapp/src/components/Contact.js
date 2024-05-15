import React, { useState } from 'react';
import useSmoothScroll from './useSmoothScroll';

const Contact = () => {
    const [listcontacts] = useState([
        {
            title: 'Phone Number',
            value: '8951693676'
        },
        {
            title: 'Address',
            value: 'Kundapur'
        },
        {
            title: 'Email',
            value: 'poojarypriyanshu7@gmail.com'
        }

    ]);

    useSmoothScroll('contact', 'contact-link');

    return (
        <section id='contact' className='contact'>
            <div className='title' data-aos="fade-up">This is my contact</div>
            <div className='des' data-aos="flip-left">
            Thank you for visiting my portfolio website! If you have any inquiries,  or just want to say hello, feel free to reach out to me using the contact information below...
            </div>
            <div className='list'>
                {listcontacts.map((value, key) => (
                    <div key={key} className='item'data-aos="fade-right">
                        <h3>{value.title}</h3>
                        <div>{value.value}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Contact;
