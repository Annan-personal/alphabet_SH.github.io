import MainProductSection from "../../components/MainProductSection";
import ProductImage1 from "../../resources/preparing.jpg";

function Product5() {
    return (
        <div style={{ backgroundColor: "#0f172a" }} className="text-white min-h-screen">
          {/* Main Product Section */}
          <MainProductSection
            imageSrc={ProductImage1}
            title="Preparing, to be ready soon..."
            description=""
          />
          </div>
    )
}
export default Product5