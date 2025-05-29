import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-zinc-900 py-8">
            <div className=" container mx-auto px-4 lg:px-8 xl:max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <a href="/portfolio-website/" className="logo flex items-center">
                            <img
                                className="logo-img"
                                src="./images/logo.png"
                                width={100}
                                height={100}
                                alt="AC"
                            />
                        </a>
                    </div>
                    <nav className="flex flex-col md:flex-row items-center">
                        <a href="#home" className="nav-link hover:text-zinc-50 mx-2">Home</a>
                        <a href="#about" className="nav-link hover:text-zinc-50 mx-2">About</a>
                        <a href="#skills" className="nav-link hover:text-zinc-50 mx-2">Skills</a>
                        <a href="#projects" className="nav-link  hover:text-zinc-50 mx-2">Projects</a>
                        <a href="#courses" className="nav-link hover:text-zinc-50 mx-2">Courses</a>
                        <a href="#certifications" className="nav-link hover:text-zinc-50 mx-2">Certifications</a>
                        <a href="#contact" className="nav-link hover:text-zinc-50 mx-2">Contact</a>
                    </nav>
                </div>
                <div className="mt-4 text-center font-bold text-sm text-zinc-500">
                    &copy; 2025 Admire Madyira. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;

/*
Icons used in this project are licensed under Creative Commons. You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensors endorse you or your use.

- GitHub icon by GitHub, CC BY-SA 3.0
- LinkedIn icon by LinkedIn, CC BY-SA 3.0
- Handshake icon by Handshake, CC BY-SA 3.0
- Substack icon by Substack, CC BY-SA 3.0
*/