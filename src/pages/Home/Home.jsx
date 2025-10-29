import './Home.css';
import whoWeAre_Image from '../../assets/breads.jpg';
import ourLocation_Image from '../../assets/location.jpg';
import superior_breads from '../../assets/superior_breads.jpg';
import Bagels from '../../assets/Bagels.jpg';
import Cookies from '../../assets/Cookies.jpg';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

function Home() {
    return (
        <>
            {/* Header Section */}
            <header className='home'>
                <div className='hero-background'>
                    <div className='hero-content text-white text-center'>
                        <div className='info'>
                            <p className='welcome mb-4'>Welcome to</p>
                            <h1 className='mb-5'>Family Bakery</h1>
                            <p className='description container mb-4'>
                                We're the biggest, best equipped and most advanced Bakery in the greater Los Angeles area.
                            </p>
                            <div className='buttons text-white'>
                                <button className='btn learn'>Learn More</button>
                                <button className='btn contact'>Contact us</button>
                            </div>
                        </div>
                        <div className='mouse btn d-flex justify-content-center rounded-5'>
                            <a href='#whoWeAre' className='d-flex justify-content-center pt-1'>
                                <span className='mouse-dot rounded-circle bg-white'></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Who We Are Section */}
            <section className='whoWeAre p-lg-5 p-2' id='whoWeAre'>
                <div className='container'>
                    <div className='row align-items-center p-lg-5 p-3'>
                        <div className='col-md-6'>
                            <img src={whoWeAre_Image} className='w-100' alt='whoWeAre' />
                        </div>
                        <div className='col-md-6'>
                            <div className='info p-lg-5 p-3'>
                                <h2 className='s-title mb-3'>Who We Are?</h2>
                                <p className='s-desc mb-lg-3 p-2'>
                                    We have been operating for over 30 years and are Members of The Federation of Master Builders.
                                    We work on projects big and small from small residential extensions to full house.
                                    We are so happy with this theme. Everyday it make our lives better.
                                </p>
                                <ul className='features'>
                                    <li className='d-flex align-items-center mb-3'>
                                        <i className='fa-brands fa-envira rounded-circle me-3 icon'></i>
                                        <span>We care about environment.</span>
                                    </li>
                                    <li className='d-flex align-items-center mb-3'>
                                        <i className='fa-solid fa-users rounded-circle me-3 icon'></i>
                                        <span>We are trusted by hundreds of clients.</span>
                                    </li>
                                    <li className='d-flex align-items-center mb-3'>
                                        <i className='fa-solid fa-heart rounded-circle me-3 icon'></i>
                                        <span>Social media loves us!</span>
                                    </li>
                                    <li className='d-flex align-items-center mb-3'>
                                        <i className='fa-solid fa-check rounded-circle me-3 icon'></i>
                                        <span>This list is super easy to create.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Location Section */}
            <section className='ourLocation p-lg-5 p-2' id='ourLocation'>
                <div className='container'>
                    <div className='row p-lg-5 align-items-center'>
                        <div className='col-md-6'>
                            <div className='info p-lg-5 p-3'>
                                <h2 className='s-title mb-3'>Our Location</h2>
                                <p className='s-desc mb-3'>
                                    We have been operating for over 30 years and are Members of The Federation of Master Builders.
                                    We work on projects big and small from small residential extensions to full house.
                                    We are so happy with this theme. Everyday it make our lives better.
                                </p>
                                <p className='s-desc mb-3'>
                                    Story on projects big and small from small residential extensions to full house.
                                    We are so happy with this theme. Everyday it make our lives better.
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={ourLocation_Image} className='w-100' alt='ourLocation' />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Baking Section */}
            <section className='ourBaking p-lg-5 p-2' id='ourBaking'>
                <div className='container'>
                    <div className='info text-center'>
                        <h2 className='s-title'>Our Baking</h2>
                        <p className='s-desc'>
                            Learn more about them. We have worked truly hard to make them perfect for every use.
                        </p>
                    </div>

                    <div className='row p-lg-5 p-3 align-items-center'>
                        {[
                            { img: superior_breads, title: 'Superior Breads' },
                            { img: Bagels, title: 'Bagels' },
                            { img: Cookies, title: 'Cookies' },
                        ].map((item, index) => (
                            <div className='col-md-4 mb-3' key={index}>
                                <div className='card border-0 text-center'>
                                    <img src={item.img} className='card-img-top' alt={item.title} />
                                    <div className='card-body'>
                                        <h4 className='card-title'>{item.title}</h4>
                                        <p className='card-text'>
                                            Proin interdum, ante ut sollicitudin commodo, tellus quam sagittis libero,
                                            at semper mauris velit a velit. Phasellus commodo turpis et lacinia posuere.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Info Section */}
            <section className='contactInfo p-lg-5 p-2' id='contactInfo'>
                <div className='container'>
                    <div className='row align-items-center p-lg-5 p-3'>
                        <div className='col-md-6'>
                            <ContactInfo />
                        </div>
                        <div className='col-md-6'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0765443994!2d-74.30914285197929!3d40.69667271523003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1753646392276!5m2!1sen!2seg'
                                className='w-100'
                                height='450'
                                loading='lazy'
                                title='Bakery Location'
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;

