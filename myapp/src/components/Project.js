import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'; // Updated icon import
import React, { useState ,useEffect} from 'react';
import image1 from './images/ctf.png';
import image2 from './images/project-portfolio.png';
import image3 from './images/soil.png'
import useSmoothScroll from './useSmoothScroll';
import aos from 'aos'
import 'aos/dist/aos.css';

const Project = () => {
 

  const [listproject] = useState([
    {
      name: 'project Capture the flag website',
      des: 'During my internship in 5th sem provided by my college I had the opportunity to develop a captivating "Capture the Flag" (CTF) website, aimed at fostering cybersecurity skills among participants. the development of this website has been a rewarding experience, allowing me to contribute to cybersecurity education while enhancing my technical skills. ',
      language: 'HTML, CSS, PHP, XAMPP server',
      images: image1
    },
    {
      name: 'project Portfolio website',
      des: '"I have developed a portfolio website as my personal project  that showcases my skills in web development, primarily focusing on React. This platform provides Demonstrating my expertise in creating captivating and interactive websites with the latest technology',
      language: 'React, css',
      images: image2
    },
    {
      name: 'project Soil Moisture Sensor Detection',
      des: 'I developed a soil moisture sensor project using IoT technology, which establishes a server-client relationship through C programming on Arduino. This innovative system collects moisture data from the soil and transmits it to a local host server,Additionally, weve integrated separate webpages displaying water status for specific crops',
      language: 'IOT(Arduino)',
      images: image3
    }
  ]);
  useSmoothScroll('projects', 'projects-link');
  useEffect(()=>{
    aos.init({duration:2000});
        },[])
  return (
    <section  id="projects" className='project'  >
      <div className='title' data-aos="fade-up" >
        This is my Project
      </div>
      <div className='des' data-aos="flip-left">
        Welcome to Project section which provides overview of the project that i have done as in  engineering feild ,In this section, I showcase my adept problem-solving skills and highlight impactful projects that have made
      </div>
      <div className='list' >
        {listproject.map((value, key) => { // Added return statement
          return (
            <div key={key} className='item'>
              <div className='images' data-aos="fade-right">
                <img src={value.images} alt="" />
              </div>
              <div className='content'  data-aos="zoom-in-right">
                <h3 data-aos="flip-up">{value.name}</h3>
                <div className='des' data-aos="fade-right">{value.des}</div>
                <div className='mission'>
                  <div><FontAwesomeIcon icon={faGlobeAmericas} /></div> {/* Updated icon */}
                  <div>
                    <h4>Languages</h4>
                    <div className='de'>{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
