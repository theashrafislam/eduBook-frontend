import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <section className='flex flex-col min-h-screen scroll-smooth max-w-7xl mx-auto'>
            <header className='sticky top-0 z-50 bg-white shadow-lg'>
                <Navbar />
            </header>
            <main className='flex-grow'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </section>
    );
};

export default Root;