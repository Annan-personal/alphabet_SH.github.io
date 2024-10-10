import React from 'react';

const NavPic: React.FC = () => {
    return (
        <div
            className="h-[600px] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/HomePagePic.jpg)` }}
        >
            <div className="text-black text-center">
                <h1 className="text-5xl font-bold mb-4">ALPHABET</h1>
                <p className="text-lg">MODULAR | EXTRUTION | DECORATION | ECOSYSTEM</p>
            </div>
        </div>
    );
};

export default NavPic;