import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Retro, we are passionate about providing high-quality products
            that combine style, comfort, and affordability. Our team is
            dedicated to curating a wide range of collections that cater to
            different tastes and lifestyles, ensuring there's something for
            everyone. Since our founding, we’ve been committed to offering
            exceptional customer service and a seamless shopping experience. We
            believe in the power of fashion to inspire confidence and
            self-expression, and we strive to make that accessible to all our
            customers.
          </p>
          <p>
            We take pride in fostering a strong connection with our customers,
            valuing their feedback, and using it to shape our future
            collections. Our goal is to not only meet but exceed expectations by
            delivering exceptional value and timeless designs. Whether you're
            shopping for everyday essentials or standout pieces, we are here to
            make your experience as enjoyable and rewarding as possible.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to deliver thoughtfully crafted products that enhance
            everyday life. We aim to create a shopping environment where
            customers feel valued and empowered, offering items that are both
            functional and stylish. With a focus on quality, innovation, and
            sustainability, we are dedicated to continuously improving our
            offerings to meet the needs of our ever-growing community. Above
            all, we strive to build lasting relationships with our customers by
            consistently exceeding their expectations.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            We are committed to providing products of the highest quality,
            rigorously tested to meet industry standards. Each item is carefully
            crafted to ensure durability, comfort, and excellence in every
            detail.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Shopping with us is simple and hassle-free. From an easy-to-navigate
            website to fast shipping and flexible return policies, we make sure
            your experience is smooth and enjoyable.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Our dedicated customer support team is here to help you every step
            of the way. We take pride in offering personalized assistance and
            quick solutions to ensure your satisfaction with every purchase.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
