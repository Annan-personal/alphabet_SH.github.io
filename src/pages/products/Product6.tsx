import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import MainProductSection from "../../components/MainProductSection";
import ProductImage1 from "../../resources/preparing.jpg";

function Product6() {
  useEffect(() => {
    // Scroll to the top when the page is visited
    window.scrollTo(0, 0);
  }, []);
    return (
        <>
        <Helmet>
          <title>Curtain Wall - Products - Alphabet_SH</title>
          <meta
            name="description"
            content="Architectural curtain wall solutions — coming soon from Alphabet_SH."
          />
        </Helmet>
        <main style={{ backgroundColor: "#0f172a" }} className="text-white min-h-screen">
          {/* Main Product Section */}
          <MainProductSection
            imageSrc={ProductImage1}
            title="Preparing, to be ready soon..."
            description=""
          />
          </main>
        </>
    )
}
export default Product6