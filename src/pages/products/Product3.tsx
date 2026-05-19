import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import background from "../../resources/product3-background.jpg";
import { motion } from "framer-motion";

function Product3() {
  useEffect(() => {
    // Scroll to the top when the page is visited
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
      <title>Hurricane Protection Screens - Products - Alphabet_SH</title>
      <meta
        name="description"
        content="Durable, lightweight, and visible hurricane protection screens from Alphabet_SH."
      />
    </Helmet>
    <main
      className="h-[800px] bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="border-2 border-white p-2">
        <div className="bg-white bg-opacity-70 shadow-lg p-6 md:p-10">
          <motion.h1
            className="text-5xl font-bold mb-4 text-center text-black pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            Hurricane Protection Screens
          </motion.h1>
          <motion.div
            className="my-4 h-1 bg-black"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ originX: 0 }}
          ></motion.div>
          <motion.p
            className="text-center text-gray-800 text-3xl relative pb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            durable, lightweight, and visible.
          </motion.p>
        </div>
      </div>
    </main>
    </>
  );
}
export default Product3;
