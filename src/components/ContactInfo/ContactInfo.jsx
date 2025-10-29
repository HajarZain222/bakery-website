import './ContactInfo.css';

function ContactInfo() {
    return (
        <>
            <div className="contactInfo p-lg-5 p-3">
                {/*  Section Title  */}
                <h2 className="s-title mb-4">Contact Information</h2>

                {/*  Description  */}
                <p className="s-desc mb-3">
                    I am text block. Click edit button to change this text. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <p className="s-desc mb-3">Our contact details:</p>

                {/*  Contact Details List  */}
                <ul className="contactInfo-list ps-4">
                    <li className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-map rounded-circle me-3 icon"></i>
                        <span>Manchester St 123-78B, Random 713, UK</span>
                    </li>

                    <li className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-phone rounded-circle me-3 icon"></i>
                        <span>+46 123 456 789</span>
                    </li>

                    <li className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-headphones rounded-circle me-3 icon"></i>
                        <span>+37 431 456 789</span>
                    </li>

                    <li className="d-flex align-items-center mb-3">
                        <i className="fa-solid fa-envelope rounded-circle me-3 icon"></i>
                        <span>hello@sitename.com</span>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ContactInfo;
