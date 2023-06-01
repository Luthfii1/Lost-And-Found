import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import achievement1 from '../../assets/Achievements/achievement-1.jpg';
import achievement2 from '../../assets/Achievements/achievement-2.jpeg';
import achievement3 from '../../assets/Achievements/achievement-3.jpg';
import {GrNext, GrPrevious} from 'react-icons/gr';

const Achievement = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    SliderArrow: true,
  };

  return (
    <div className="pt-20 mb-0 sm:pt-0">
        {/* Carousel for image slider to show 3 achievement sliders */}
        <Slider className='text-yellow' {...settings}>
            <div className="w-11/12">
                <div className="relative overflow-hidden w-full rounded-b-lg">
                    <div className="relative block w-full h-52">
                        <img alt="ecommerce" src={achievement1} className="object-cover object-center w-full h-full block" />
                    </div>
                    <span className="absolute bottom-0 left-0 right-0 px-1 py-1 text-md hover:bg-[#EEEEEE] text-black bg-yellow rounded">Title</span>
                </div>
            </div>
            <div className="w-11/12">
                <div className="relative overflow-hidden rounded-lg">
                    <div className="relative block w-full h-52">
                        <img alt="ecommerce" src={achievement2} className="object-cover object-center w-full h-full block" />
                    </div>
                    <span className="absolute bottom-0 left-0 right-0 px-1 py-1 text-md hover:bg-[#EEEEEE] text-black bg-yellow rounded">Title</span>
                </div>
            </div>
            <div className="w-11/12">
                <div className="relative overflow-hidden rounded-lg">
                    <div className="relative block w-full h-52">
                        <img alt="ecommerce" src={achievement3} className="object-cover object-center w-full h-full block" />
                    </div>
                    <span className="absolute bottom-0 left-0 right-0 px-1 py-1 text-md hover:bg-[#EEEEEE] text-black bg-yellow rounded">Title</span>
                </div>
            </div>
        </Slider>
    </div>
  );
};

export default Achievement;
