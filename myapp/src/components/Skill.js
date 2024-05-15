import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import useSmoothScroll from './useSmoothScroll';
import aos from 'aos'
import 'aos/dist/aos.css';

const Skill = () => {
  const [listskills] = useState([
    {
      name: 'html',
      des: 'Im Competent in HTML, the language used to create and structure  web pages and also about the css part used to designing and making Attractive and morden  website  ',
      icon: faHtml5
    },
    {
      name: 'react',
      des: ' im good at React the JavaScript library  which is a component based architecture for building user interfaces and responsive website  ',
      icon: faReact
    },
    {
      name: 'Software Testing',
      des: 'I am well-versed in both manual and automated testing methodologies. With manual testing, I can examine software applications, and identifying defects to ensure optimal performance and functionality'
    },
    {
      name: 'C++',
      des: ' Im good at C++ a versatile and powerful programming language and also I possess good problem-solving skills and a systematic approach to tackling challenges in C++ programming'
    },
    {
      name:'javaScipt',
      des: 'Im good in Java Script a widely used programing language  with help of that I can craft dynamic and engaging logic to website',
      icon: faJs
    }
  ]);
  useSmoothScroll('skills', 'skills-link');
  useEffect(()=>{
    aos.init({duration:2000});
        },[])
  return (
    <section  id="skills" className='skills' data-aos="fade-up">
      <div className='title'  data-aos="fade-up">
        This is my Skills
      </div>
      <div className='des' data-aos="flip-left">
      Welcome to the skills section where I showcase the diverse set of abilities that define my professional and creative journey.Through this section,  you can  explore the breadth and depth of my capabilities, 
      </div>
      <div className='list' >
        {listskills.map((value, key) => (
          <div key={key} className='item' data-aos="zoom-out-up">
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className='des'> {value.des} </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
