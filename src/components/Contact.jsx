/**
 * @copyright 2025 Aime Cesaire Mugishawayo
 * @license Apache-2.0
 * 
 */


const Contact = ({theme}) => {
    const socialLinks = [
        {
            icon: theme == 'dark' ? "./images/github-mark-white.png": "./images/github-mark.png",
            href: "https://github.com/Mireinstein",
            alt: "Github"
        },
        {
            icon: "./images/linkedin.png",
            href: "https://www.linkedin.com/in/admire-madyira/",
            alt: "Linkedin"
        }
    ]


  return (
    <section
      id="contact"
      className="section"
    >

        <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
            <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">

                <h2 className="headline-2  reveal-up ">
                    {`Find me on these platforms!`}
                </h2>

                <p className="mt-3 mb-8 max-w-[50ch] lg:max-w-[50ch]">
                    Whether you just want to read my musings on tech or contact me for opportunities, click and find me on these platforms.
                </p>
                <div className="flex items-center gap-12 mt-auto bg">
                {
                    socialLinks.map(({ icon, href, alt }, key) => (
                        <div key ={key} className="reveal-up relative rounded-lg w-12 h-12 grid place-items-center mb-12
                        transition-[background-color, color] border-none opacity-100 transition duration-300"  
                        >
                            <span aria-hidden="true" className="hover:opacity-60 active:opacity-30" >
                                <img className="" src={icon} alt={alt} />
                                    <a
                                        href={href}
                                        target='_blank'
                                        className="absolute inset-0"
                                    >
                                    </a>
                            </span>
                        </div>
    ))
}
                </div>
            </div>

    </div>

    </section>
  )
}

export default Contact