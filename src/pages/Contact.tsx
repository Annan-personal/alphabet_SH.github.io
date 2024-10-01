import React from 'react';

const Contact: React.FC = () => {
    return (
        <div
            style={{
                backgroundImage: "url('/world.gif')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: '100vh',
            }}
        >
            <h1 className="text-3xl font-bold text-center text-black py-10 pt-20">We have business across the world!</h1>
            {/* Contact Information - Positioned near cities */}
            <div className="relative w-full h-full">
                {/* Shanghai */}
                {/* <div className="absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-xl font-bold">Shanghai</h2>
                    <p>Phone: +86 21-1234567</p>
                    <p>Email: shanghai@example.com</p>
                </div> */}

                {/* Singapore */}
                {/* <div className="absolute top-[60%] left-[65%] transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-xl font-bold">Singapore</h2>
                    <p>Phone: +65 1234-5678</p>
                    <p>Email: singapore@example.com</p>
                </div> */}

                {/* London */}
                {/* <div className="absolute top-[30%] left-[35%] transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-xl font-bold">London</h2>
                    <p>Phone: +44 20-1234-5678</p>
                    <p>Email: london@example.com</p>
                </div> */}

                {/* San Francisco */}
                {/* <div className="absolute top-[40%] left-[10%] transform -translate-x-1/2 -translate-y-1/2">
                    <h2 className="text-xl font-bold">San Francisco</h2>
                    <p>Phone: +1 415-123-4567</p>
                    <p>Email: sanfrancisco@example.com</p>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;
