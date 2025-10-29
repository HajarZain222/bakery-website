import './Contact.css';
import ContactInfo from '../../components/ContactInfo/ContactInfo';

function Contact() {
    return (
        <>
            {/*  Header Section  */}
            <header className="contact">
                <div className="hero-background">
                    <div className="hero-content">
                        <h2 className="hero-title">Contact</h2>
                        <div className="hero-links d-flex justify-content-center gap-2">
                            <a href="/">Home</a>
                            <span>/</span>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
            </header>

            {/*  Contact Form Section  */}
            <section className="contact-content p-lg-5 p-2">
                <div className="container">
                    <div className="row">
                        {/* --- Contact Form --- */}
                        <div className="col-md-7">
                            <div className="p-lg-5 p-3">
                                <h2 className="s-title mb-4">Contact Form</h2>
                                <form>
                                    <div className="contact-inputs d-flex justify-content-between gap-3 mb-3">
                                        <div className="form-floating w-100">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="floatingName"
                                                placeholder="name"
                                            />
                                            <label htmlFor="floatingName">Name</label>
                                        </div>
                                        <div className="form-floating w-100">
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="floatingEmail"
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="floatingEmail">Email</label>
                                        </div>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingSubject"
                                            placeholder="subject"
                                        />
                                        <label htmlFor="floatingSubject">Subject</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <textarea
                                            className="form-control"
                                            style={{ height: '150px', resize: 'none' }}
                                            placeholder="Message"
                                            id="floatingTextarea"
                                        ></textarea>
                                        <label htmlFor="floatingTextarea">Message</label>
                                    </div>

                                    <button type="button" className="btn send">
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* --- Contact Info --- */}
                        <div className="col-md-5">
                            <ContactInfo />
                        </div>
                    </div>
                </div>
            </section>

            {/*  Google Map Section  */}
            <section className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387196.0765443994!2d-74.30914285197929!3d40.69667271523003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2seg!4v1753646392276!5m2!1sen!2seg"
                    className="w-100"
                    height="450"
                    loading="lazy"
                ></iframe>
            </section>
        </>
    );
}

export default Contact;
