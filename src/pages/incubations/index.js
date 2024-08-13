// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Pag from './page/card.js';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./style.css";

const Incubations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className='incubations' id='incubations'>
        <div class="incubations_header"> 
          <h1 data-aos="fade-down">Incubations</h1>
          <p  data-aos="fade-right"> NIT Patna's Incubation Center fosters a statewide startup ecosystem, offering essential infrastructure like office spaces, meeting rooms, networking platforms, and management support for aspiring entrepreneurs.</p>
        </div>
 
        <div className="incubations_swiper" data-aos="zoom-in-up">
 
          <Swiper class="card__incubations swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            grabCursor={{ grabCursor: true }}
            loop={{ loop: true }}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/incubations/onibus.png" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Onibus</h3>
                  <p class="card__description">
                  Onibus offers a service-oriented app and web platform facilitating efficient communication between schools and parents about students' activities.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/incubations/busymech.png" alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Busy Mechanic</h3>
                  <p class="card__description">
                  Expert mobile mechanics providing reliable vehicle care and service at competitive prices, conveniently at your home or office.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/incubations/shekhartele.png " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Shekhar Telesystems</h3>
                  <p class="card__description">
                  Shekhar Telesystems revolutionizes water management with advanced solutions for hassle-free living and upgraded surroundings. 
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>

            <SwiperSlide>
              <article class="card__incubationarticle swiper-slide">
                <div class="card__image">
                  <img src="img/image.jpg.jpg " alt="image" class="card__img" />
                  <div class="card__shadow"></div>
                </div>

                <div class="card__incubationdata">
                  <h3 class="card__name">Kell Dawx</h3>
                  <p class="card__description">
                    Passionate about development and design,
                    I carry out projects at the request of users.
                  </p>

                  <a href="#" class="card__button">View More</a>
                </div>
              </article>
            </SwiperSlide>



          </Swiper>
       
        </div>

     
        {/* <!-- Navigation buttons --> */}
        {/* <div class="swiper-button-next">
        <i class="ri-arrow-right-s-line"></i>
      </div>

      <div class="swiper-button-prev">
        <i class="ri-arrow-left-s-line"></i>
      </div> */}

        {/* <!-- Pagination --> */}
        
        <div class="swiper-pagination" data-aos="zoom-in-up"></div>
          <div className="events_btn" data-aos="fade-left">
 
          <button className='btn' onClick={() => navigate('/Pag')}>
            Litsen More</button>
        </div>

      </section>

    </div>



  );
};

export default Incubations