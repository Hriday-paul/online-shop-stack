import { Navigation, Pagination, Scrollbar, A11y, EffectCreative, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSComp() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        className="mySwiper"
        >
            <SwiperSlide>
                <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Amazfit_Pop_3s_and_3r_Big_Banner_1_.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://i.ibb.co/DQP9gDb/ezgif-com-webp-to-jpg.jpg" alt="banner" />
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-56 mt-4 lg:mt-0 md:h-80 lg:h-[448px] w-full object-cover' src="https://www.startech.com.bd/image/cache/catalog/home/banner/mpl-pc-laptop-offer-982x500.webp" alt="banner" />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperSComp
