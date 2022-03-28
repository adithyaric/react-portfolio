import React from "react";
import "./testimonials.css";
import ava1 from "../../assets/avatar1.jpg";
import ava2 from "../../assets/avatar2.jpg";
import ava3 from "../../assets/avatar3.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

const data = [
  {
    avatar: ava1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis ad quibusdam quas quam ullam velit, aperiam officia nobis in exercitationem, incidunt aliquid accusantium ex, veritatis laborum maiores blanditiis quaerat labore.",
  },
  {
    avatar: ava2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ratione velit facere. Obcaecati quidem nobis exercitationem laudantium omnis? Fuga ipsum mollitia quam officiis nobis laborum deserunt omnis minima, asperiores eum!",
  },
  {
    avatar: ava3,
    name: "Kwame Despite",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et veniam enim illum aliquid. Impedit ipsam quasi voluptates ipsum alias dicta quibusdam asperiores corrupti architecto rem, neque, nihil accusantium doloremque sed.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
