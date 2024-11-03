import React from 'react';
import manufacturingImage from '../resources/manufacturingImage.jpg';

function About() {

    const who_is_alphabet_part1 = "Alphabet, the designer and manufacturer of architectural screen products, strives to set the benchmark for exceeding our customers’ expectations in innovation, quality, and product delivery. We understand our client, addressing business risks and opportunities whilst adhering to quality management systems, product requirements, statutory and regulatory requirement."
    const who_is_alphabet_part2 = "Alphabet provides solutions for construction materials leads the way of patented modular structure emphasizes on recycle ecosystem offering an unmatched balance of strength, durability, and productivity enhancements."

    return (
        <div className="min-h-screen bg-white text-gray-700 pt-20">
            {/* Header Section */}
            <section className="text-center py-16 px-6">
                <h1 className="text-4xl font-bold text-black mb-4">WHO IS ALPHABET</h1>
                <p className="max-w-3xl mx-auto text-lg text-black-500">
                    {who_is_alphabet_part1}
                </p>
                <br/>
                <p className="max-w-3xl mx-auto text-lg text-black-500">
                    {who_is_alphabet_part2}
                </p>
            </section>

            {/* Mission, Quality, Delivery Section */}
            <section className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-12">
                <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Mission</h2>
                    <p className="text-sm">
                        To maintain an impeccable degree of market awareness through ongoing research and analysis of our customers' requirements.
                    </p>
                    <p className="text-sm mt-4">
                        To design and develop innovative products that provide security solutions that meet our customers' precise requirements.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Quality</h2>
                    <p className="text-sm">
                        To train and develop the skills of our employees to ensure we satisfy our commitment to quality, ensuring customer satisfaction.
                    </p>
                    <p className="text-sm mt-4">
                        To develop our manufacturing technologies to improve the quality and value of our products.
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-black mb-4">Delivery</h2>
                    <p className="text-sm">
                        To continually develop and improve our Information Technology and management systems to control and manage our manufacturing and logistics performance.
                    </p>
                    <p className="text-sm mt-4">
                        Ensure timely fulfillment of our customers' orders, including a clear flow of information to our customers.
                    </p>
                </div>
            </section>


            {/* Image Section */}
            <section className="w-full py-8"> {/* Added padding on top and bottom */}
                <img
                    src={manufacturingImage}
                    alt="Manufacturing Process"
                    className="max-w-4xl mx-auto w-full h-auto object-cover"
                />
            </section>
        </div>
    );
}

export default About;
