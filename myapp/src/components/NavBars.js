import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeTabActive } from '../redux/action';

const Navbar = ({ activeTab }) => {
    const [listnav] = useState(['home', 'projects', 'contacts', 'skills']);
    const dispatch = useDispatch();

    const changeTab = (value) => {
        dispatch(changeTabActive(value));
        scrollToSection(value);
    };

    const scrollToSection = (value) => {
        const sectionId = value === 'home' ? 'home' : value === 'contacts' ? 'contact' : value === 'skills' ? 'skills' : 'projects';
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <nav data-aos="flip-up">
                {listnav.map((value, key) => (
                    <span
                        key={key}
                        className={activeTab === value ? 'active' : ''}
                        onClick={() => changeTab(value)}
                    >
                        {value}
                    </span>
                ))}
            </nav>
        </header>
    );
};

const mapStateToProps = (state) => ({
    activeTab: state.activeTab
});

export default connect(mapStateToProps, { changeTabActive })(Navbar);
