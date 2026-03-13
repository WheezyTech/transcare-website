import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="why-us">
                <div className="container">
                    <h2>Why Us?</h2>
                    <div className="why-image">
                        <img src="path_to_image.jpg" alt="Why Us" />
                    </div>
                    <p>Description of why us</p>
                </div>
            </section>
            {/* Other sections */}
        </div>
    );
};

export default Home;