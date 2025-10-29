import './Offer.css';

function Offer() {
    const offers = [
        { title: 'Great Service', price: '15$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Beef Delicious', price: '12$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Short Cut', price: '24$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Quick Dig', price: '13$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'King Pizza', price: '29$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Enormous Bite', price: '32$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Short Stuff', price: '36$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Premium Type', price: '36$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
        { title: 'Luxurious Offer', price: '52$', desc: 'Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae.' },
    ];

    return (
        <>
        {/* Hero Section */}
        <header className="offer">
            <div className="hero-background">
            <div className="hero-content">
                <h2 className="hero-title">Our Offer</h2>
                <div className="hero-links d-flex justify-content-center gap-2">
                <a href="/">Home</a>
                <span>/</span>
                <p>Our Offer</p>
                </div>
            </div>
            </div>
        </header>

        {/* Offer Cards Section */}
        <section className="ourOffer p-lg-5 p-2">
            <div className="container">
            <div className="row p-lg-5 p-3">
                {offers.map((offer, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card border-0">
                    <div className="card-header bg-body d-flex justify-content-between">
                        <h6>{offer.title}</h6>
                        <span>{offer.price}</span>
                    </div>
                    <div className="card-body">
                        <p className="card-desc">{offer.desc}</p>
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

export default Offer;

