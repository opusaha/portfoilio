import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ProfilePic1 from '../../img/profile1.jpg'
import ProfilePic2 from '../../img/profile2.jpg'
import ProfilePic3 from '../../img/profile3.jpg'
import ProfilePic4 from '../../img/profile4.jpg'
import ProfilePic5 from '../../img/profile5.jpg'
import ProfilePic6 from '../../img/profile6.jpg'
import { Pagination } from 'swiper';
import 'swiper/css/pagination';

const Testimonial = () => {
    const Clients = [
        {
            img: ProfilePic1,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente illum similique numquam culpa et molestiae porro totam iure explicabo sint tenetur nobis praesentium placeat non nisi.",
        },
        {
            img: ProfilePic2,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente illum similique numquam culpa et molestiae porro totam iure explicabo sint tenetur nobis praesentium placeat non nisi.",
        },
        {
            img: ProfilePic3,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente illum similique numquam culpa et molestiae porro totam iure explicabo sint tenetur nobis praesentium placeat non nisi.",
        },
        {
            img: ProfilePic4,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente illum similique numquam culpa et molestiae porro totam iure explicabo sint tenetur nobis praesentium placeat non nisi.",
        },
        {
            img: ProfilePic5,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente illum similique numquam culpa et molestiae porro totam iure explicabo sint tenetur nobis praesentium placeat non nisi.",
        },
        {
            img: ProfilePic6,
            review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, sapiente illum similique numquam culpa et molestiae porro totam iure explicabo sint tenetur nobis praesentium placeat non nisi.",
        }
    ]
    return (
        <div className='t-wrapper'>
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Expectional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1"></div>
                <div className="blur t-blur2"></div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {Clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="Testimonial">
                                <img src={client.img} alt="" />
                                <span className='review'>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Testimonial;