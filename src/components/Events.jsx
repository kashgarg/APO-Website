import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Events = () => {

    const eventData = [
        { src: "assets/apo_events_1.png", alt: "Event1", legend: "Legend 1" },
        { src: "assets/apo_events_2.png", alt: "Event2", legend: "Legend 2" },
        { src: "assets/apo_events_3.png", alt: "Event3", legend: "Legend 3" },
        { src: "assets/apo_events_4.png", alt: "Event4", legend: "Legend 4" },
        { src: "assets/apo_events_5.png", alt: "Event5", legend: "Legend 5" },
        { src: "assets/apo_events_6.png", alt: "Event6", legend: "Legend 6" },
        { src: "assets/apo_events_7.png", alt: "Event7", legend: "Legend 7" },
        { src: "assets/apo_events_8.png", alt: "Event8", legend: "Legend 8" }
    ];

        return (
            <>
            <h1 className="text-4xl my-6 text-[#0F3B8E] font-serif">Events</h1>
            <Carousel swipeable={true} emulateTouch={true} dynamicHeight={true}>
                {eventData.map((event, index) => (
                <div key={index}>
                    <img src={event.src} alt={event.alt} />
                    <p className="legend">{event.legend}</p>
                </div>
                ))}
            </Carousel>
            </>
        );
};

export default Events
