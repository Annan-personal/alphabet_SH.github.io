import { AnimatedTestimonials } from "./ui/animated-testimonials";

function AkzoNobelCertificationsSection() {
  const testimonials = [
    {
      quote:
        "",
      name: "AKZO NOBEL LAB TEST REPORT",
      designation: "AkazoNobel: SALT SPRAY TEST, PAGE 1",
      src: "akzoImage1.jpg",
    },
    {
      quote:
        "",
      name: "AKZO NOBEL LAB TEST REPORT",
      designation: "AkazoNobel: SALT SPRAY TEST, PAGE 2",
      src: "akzoImage2.jpg",
    },
    {
      quote:
        "",
      name: "AKZO NOBEL LAB TEST REPORT",
      designation: "AkazoNobel: SALT SPRAY TEST, PAGE 3",
      src: "akzoImage3.jpg",
    },
    {
      quote:
        "",
      name: "AKZO NOBEL LAB TEST REPORT",
      designation: "Congratulations from AkzoNobel China Sales Director",
      src: "akzoImage4.jpg",
    },
  ];
  return (
  <AnimatedTestimonials testimonials={testimonials} />);
}

export default AkzoNobelCertificationsSection;
