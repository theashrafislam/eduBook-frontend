const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8">
            <div className="container mx-auto text-center px-6">
                <p className="mb-4 text-lg font-semibold">&copy; 2024 EduBook. All Rights Reserved.</p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                        <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                </div>
                <p className="mt-4 text-sm text-gray-400">EduBook - Your Trusted College Booking Platform</p>
            </div>
        </footer>
    );
};

export default Footer;  