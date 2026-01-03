import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CarouselComponent() {
    var settings = {
        // dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 20000,
        pauseOnHover: true
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="border h-full">
                    <h3 className="border text-center font-bold text-gray-500 py-0.5">Today</h3>
                    <div className="overflow-hidden rounded-lg border h-45 px-2">
                        {/* <img
                            src={image}
                            alt="img"
                            className="h-full w-full object-cover"
                        /> */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus debitis porro dicta. Nobis dolor accusantium odit eaque natus soluta.
                    </div>
                </div>
                <div className="border h-full">
                    <h3 className="border text-center font-bold text-gray-500 py-0.5">Month</h3>
                    <div className="overflow-hidden rounded-lg border h-45 px-2">
                        {/* <img
                            src={image}
                            alt="img"
                            className="h-full w-full object-cover"
                        /> */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus debitis porro dicta. Nobis dolor accusantium odit eaque natus soluta.
                    </div>
                </div>
                <div className="border h-full">
                    <h3 className="border text-center font-bold text-gray-500 py-0.5">Year</h3>
                    <div className="overflow-hidden rounded-lg border h-45 px-2">
                        {/* <img
                            src={image}
                            alt="img"
                            className="h-full w-full object-cover"
                        /> */}
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repellat eius laborum ullam ducimus debitis porro dicta. Nobis dolor accusantium odit eaque natus soluta.
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default CarouselComponent;
