import { useEffect } from 'react';

const useSmoothScroll = (sectionId, linkId) => {
    useEffect(() => {
        const handleScrollToSection = () => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        const link = document.getElementById(linkId);
        if (link) {
            link.addEventListener('click', handleScrollToSection);
        }

        return () => {
            if (link) {
                link.removeEventListener('click', handleScrollToSection);
            }
        };
    }, [sectionId, linkId]);
};

export default useSmoothScroll;
