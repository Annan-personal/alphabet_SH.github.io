import React from "react";
import { motion } from "framer-motion";

interface MainProductSectionProps {
    imageSrc: string;
    title: string;
    description: string;
}

const MainProductSection: React.FC<MainProductSectionProps> = ({
    imageSrc,
    title,
    description,
}) => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center p-8">
            <motion.img
                src={imageSrc}
                alt={title}
                className="w-full max-w-2xl max-h-xl mb-8"
                fetchPriority="high"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            />
            <motion.h1
                className="text-4xl font-bold mb-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {title}
            </motion.h1>
            <motion.p
                className="text-xl text-center max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {description}
            </motion.p>
        </section>
    );
};

export default MainProductSection;
