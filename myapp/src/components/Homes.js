import React, {useEffect} from 'react';
import devImage from './images/img2.jpg'; 
import useSmoothScroll from './useSmoothScroll';
import aos from 'aos'
import 'aos/dist/aos.css';

const Home = () => {
    useSmoothScroll('home', 'home-link');
    useEffect(()=>{
aos.init({duration:2000});
    },[])

    return (
        <section id='home' className='home' data-aos="fade-up">
            <div className='content'>
                <div className='name' data-aos="fade-down-right">
                    MY NAME IS <br/><span>PRIYANSHU</span>
                </div>
                <div className='des'data-aos="fade-right">
                I'm Priyanshu, currently pursuing my engineering degree in Mangalore,although my roots lie in Kundapur. My educational journey began at HMM ENGLISH MEDIUM PRIMARY AND HIGH  SCHOOL in Kundapur, followed by completing my Pre-University Course (PUC) in Science at RNS PU College, Kundapur. Now, I'm continuing my studies at Sahyadri college of Engineering and Management, Manglore,specializing in Computer Science and Engineering.My hobbies are listening to music, watching movies, and drawing.
                </div>
            </div>

            <div className='card' data-aos="zoom-in">
                <img src={devImage} alt="img" />
            </div>
        </section>
    );
};

export default Home;
