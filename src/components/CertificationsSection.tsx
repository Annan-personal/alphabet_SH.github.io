import { AnimatedTestimonials } from "./ui/animated-testimonials";
import KnifeShearTestImage from "../resources/KnifeShearTest.jpg"
import SaltSprayTestImage from "../resources/SaltSprayTest.jpg"
import Congrats from "../resources/Congrats.jpg"

function CertificationsSection() {
  const testimonials = [
    {
      quote:
        "",
      name: "Knife Shear Test",
      designation: "Passed AS5041 Knife Shear Test",
      src: "KnifeShearTest.jpg",
    },
    {
      quote:
        "",
      name: "Salt Spray test",
      designation: "Passed AkzoNobel 20 years Salt Spray test",
      src: "SaltSprayTest.jpg",
    },
    {
      quote:
        "",
      name: "AkzoNobel",
      designation: "AkzoNobel China Sales Director congratulations on the 20 years salt spray test passed",
      src: "Congrats.jpg",
    },
  ];
  return (
  <AnimatedTestimonials testimonials={testimonials} />);
}

export default CertificationsSection;
