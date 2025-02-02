import React from 'react';
import Carousel from '../Components/Carousel';
import CollegeSection from '../Components/CollegeSection';
import Gallery from '../Components/Gallery';
import ResearchPaper from '../Components/ResearchPaper';
import ReviewSection from '../Components/ReviewSection';

const Home = () => {
    return (
        <div>
            <Carousel />
            <div>
                <CollegeSection />
            </div>
            <div>
                <Gallery />
            </div>
            <div>
                <ResearchPaper />
            </div>
            <div>
                <ReviewSection />
            </div>
        </div>
    );
};

export default Home;