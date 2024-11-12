import { AnimatedTestimonials } from "./ui/animated-testimonials";

function AzumaCertificationsSection() {
  const testimonials = [
    {
      quote:
        "",
      name: "AZUMA TEST REPORT",
      designation: "AZUMA HONGKONG AS5041 SECTION 8: KNIFE SHEAR TEST, PAGE 1",
      src: "Azuma_1.jpg",
    },
    {
      quote:
        "",
      name: "AZUMA TEST REPORT",
      designation: "AZUMA HONGKONG AS5041 SECTION 8: KNIFE SHEAR TEST, PAGE 2",
      src: "Azuma_2.jpg",
    },
    {
      quote:
        "",
      name: "AZUMA TEST REPORT",
      designation: "AZUMA HONGKONG AS5041 SECTION 8: KNIFE SHEAR TEST, PAGE 3",
      src: "Azuma_3.jpg",
    },
    {
      quote:
        "",
      name: "AZUMA TEST REPORT",
      designation: "AZUMA HONGKONG AS5041 SECTION 8: KNIFE SHEAR TEST, PAGE 4",
      src: "Azuma_4.jpg",
    },
    {
      quote:
        "",
      name: "AZUMA TEST REPORT",
      designation: "AZUMA HONGKONG AS5041 SECTION 8: KNIFE SHEAR TEST, PAGE 5",
      src: "Azuma_5.jpg",
    },
    {
      quote:
        "",
      name: "AZUMA TEST REPORT",
      designation: "AZUMA HONGKONG AS5041 SECTION 8: KNIFE SHEAR TEST, PAGE 6",
      src: "Azuma_6.jpg",
    },
  ];
  return (
  <AnimatedTestimonials testimonials={testimonials} />);
}

export default AzumaCertificationsSection;
