import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from 'reactstrap';
import '../pages/Home.css'

const items = [
    {
        src: 'https://proprikol.ru/wp-content/uploads/2020/04/kartinki-bytovoj-tehniki-2.jpg',
        // altText: 'Акция',
        // caption: 'Бытовая техника'
    },
    {
        src: 'https://img4.goodfon.ru/wallpaper/big/5/38/apple-mak-kompiuter-kompiuternyi-stol-displen-klaviatura-mak.jpg',
        // altText: 'Распродажа',
        // caption: 'Ноутбуки и компьютеры'
    },
    {
        src: 'https://htstatic.imgsmail.ru/pic_image/80ddab9bb6e2662b98073603a212252c/840/472/1893792/',
        // altText: 'Новинка',
        // caption: 'Смартфоны и гаджеты'
    },
    
];

const HomeCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    }

    const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    }

const slides = items.map((item, index) => {
    return (
        <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index+ "--carousel-item"}
        >
        <img className="img-car" im src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
    );
});

    return (
        <div className='HomeMainDiv'>
            <Container className='main-container'>
                <Carousel className="custom-tag"
                    activeIndex={activeIndex}
                    next = { next }
                    previous={ previous }
                >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
                </Carousel>
            </Container>
        </div>
    );
}

export default HomeCarousel;