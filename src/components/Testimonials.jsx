"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { testimonials } from "@/data/testimonials.js";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden" >
      <div className="max-w-7xl mx-auto px-6 text-center hidden md:block">
        <h2 className="text-4xl font-bold text-indigo-600 mb-12">What People Say</h2>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 mx-4 rounded-lg shadow hover:shadow-2xl transition bg-white"
            >
              <p className="text-gray-600 italic mb-6">"{t.feedback}"</p>
              <h3 className="text-lg font-semibold text-indigo-600">{t.name}</h3>
              <span className="text-gray-500 text-sm">{t.role}</span>
            </motion.div>
          ))}
        </Slider>
      </div>
              {/* Phone → 1 slide */}
        <div className="block md:hidden">
          <Slider {...settings} slidesToShow={1}>
            {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-8 mx-4 rounded-lg shadow hover:shadow-2xl transition bg-white 
                            h-full sm:h-64 flex flex-col justify-between"
                >
                  <p className="text-gray-600 italic mb-6 flex-grow">"{t.feedback}"</p>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-600">{t.name}</h3>
                    <span className="text-gray-500 text-sm">{t.role}</span>
                  </div>
                </motion.div>
            ))}
          </Slider>
        </div>
    </section>
  );
};

export default Testimonials;
