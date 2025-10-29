import "./Footer.css";
import logoLight from "../../assets/bakery-light.png";

function Footer() {
    // Lists data to make code shorter & cleaner
    const specialList = [
        "Our magical recipe.",
        "We care about environment.",
        "We are trusted by hundreds of clients.",
        "Social media loves us!",
        "This list is super easy to create.",
    ];

    const openingHours = [
        "Monday 10AM - 9PM",
        "Tuesday 10AM - 9PM",
        "Wednesday 10AM - 9PM",
        "Thursday 10AM - 10PM",
        "Friday 10AM - 10PM",
        "Weekends 10AM - 11PM",
    ];

    const contactDetails = [
        {
        icon: "fa-location-dot",
        text: "Manchester Road 123-78B, Silictown 7854MD, Great Country",
        },
        { icon: "fa-phone", text: "+46 123 456 789", link: "tel:+46123456789" },
        {
        icon: "fa-envelope",
        text: "hello@sitename.com",
        link: "mailto:hello@sitename.com",
        },
        {
        icon: "fa-earth-americas",
        text: "http://www.sitename.com",
        link: "http://www.sitename.com",
        },
    ];

    return (
        <footer className="footer">
        {/* Top Section */}
        <div className="top p-lg-5 p-3">
            <div className="container">
            <div className="row">
                {/* About Us */}
                <div className="col-md-3">
                <h5>About us</h5>
                <p>
                    I am text block. Click edit button to change this text. Lorem
                    ipsum dolor sit amet, consectetur. I am text block. Click edit
                    button to change this text. Lorem ipsum dolor sit amet,
                    consectetur.
                </p>
                <p>
                    We are the champions! We are the most amazing theme of all time,
                    yeah.
                </p>
                </div>

                {/* Why We Are Special */}
                <div className="col-md-3">
                <h5>Why we are special?</h5>
                <ul className="list">
                    {specialList.map((item, index) => (
                    <li key={index}>{item}</li>
                    ))}
                </ul>
                </div>

                {/* Opening Hours */}
                <div className="col-md-3">
                <h5>Opening Hours</h5>
                <ul className="list">
                    {openingHours.map((time, index) => (
                    <li key={index}>{time}</li>
                    ))}
                </ul>
                </div>

                {/* Contact Details */}
                <div className="col-md-3">
                <h5>Contact Details</h5>
                <ul className="list background position-relative z-1">
                    {contactDetails.map((item, index) => (
                    <li key={index} className="d-flex">
                        <i className={`fa-solid ${item.icon} me-2 icon`}></i>
                        {item.link ? (
                        <a href={item.link}>{item.text}</a>
                        ) : (
                        <span>{item.text}</span>
                        )}
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom p-lg-5 p-3">
            <div className="container text-center">
            <img src={logoLight} className="w-25 mb-4" alt="logo" />
            <p className="mb-3">Copyright 2017. All rights reserved.</p>

            {/* Social Icons */}
            <div className="social-icons d-flex justify-content-center gap-2">
                <i className="fa-brands fa-facebook-f icon rounded-circle facebook"></i>
                <i className="fa-brands fa-google-plus-g icon rounded-circle google"></i>
                <i className="fa-brands fa-linkedin-in icon rounded-circle linkedin"></i>
                <i className="fa-brands fa-twitter icon rounded-circle twitter"></i>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;

