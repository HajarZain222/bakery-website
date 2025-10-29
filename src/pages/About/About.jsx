import "./About.css";
import chef from "../../assets/chef.jpg";

function About() {
    const bakeryFeatures = [
        "Facilities",
        "Best Equipment",
        "Incredible Location",
        "Premium Support",
        "Incredible Team",
        "Incredible Location"
    ];

    const stats = [
        { icon: "fa-regular fa-thumbs-up", value: "1430", label: "Page Likes" },
        { icon: "fa-solid fa-house-chimney", value: "64", label: "Locations" },
        { icon: "fa-regular fa-lightbulb", value: "960", label: "Create Ideas" },
        { icon: "fa-regular fa-comment", value: "420", label: "Comments" }
    ];

    return (
        <>
        {/* Hero Section */}
        <header className="about">
            <div className="hero-background">
            <div className="hero-content">
                <h2 className="hero-title">About</h2>
                <p className="hero-desc">Learn more about us.</p>
            </div>
            </div>
        </header>

        {/* Our Story Section */}
        <section className="ourStory p-lg-5 p-2">
            <div className="container">
            <div className="row p-lg-5 align-items-center">
                <div className="col-md-6">
                <img src={chef} className="w-100" alt="Our Story" />
                </div>
                <div className="col-md-6">
                <div className="info p-lg-5 p-3">
                    <h2 className="s-title mb-4">Our Story</h2>
                    <p className="s-desc mb-3">
                    We have been operating for over 30 years and are Members of The Federation of Master Builders. 
                    We work on projects big and small from small residential extensions to full house and commercial builds, 
                    and we are registered NHBC house builders.
                    </p>
                    <p className="s-desc mb-3">
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Why Our Bakery Section */}
        <section className="whyOurBakery p-lg-5 p-2">
            <div className="container">
            <div className="info text-center mb-5">
                <i className="fa-solid fa-rug mb-4 icon"></i>
                <h2 className="s-title">Why our Bakery?</h2>
                <p className="s-desc">Learn why it's worth to try our bakings.</p>
            </div>

            <div className="row">
                {bakeryFeatures.map((title, index) => (
                <div className="col-md-4" key={index}>
                    <div className="card border-0">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                        Ipsum dolor sit amet, consectetur adipiscing elit. 
                        Phasellus ultricies nisi at scelerisque pellentesque. 
                        Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper.
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Stats Section */}
        <section className="stats p-lg-5 p-2">
            <div className="container">
            <div className="row p-lg-5 p-3">
                {stats.map((stat, index) => (
                <div className="col-md-3" key={index}>
                    <div className="card border-0">
                    <div className="card-body text-center">
                        <i className={`${stat.icon} card-icon`}></i>
                        <h5 className="card-stats">{stat.value}</h5>
                        <p className="card-desc">{stat.label}</p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
        </>
    );
}

export default About;
