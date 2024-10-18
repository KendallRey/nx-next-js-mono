'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import { ILayout, MuiBox } from '@nx-next-js-micro/components';
import './embla.scss'
import Image from 'next/image';

export type IImageCarousel = {
  id: string;
  src?: string | null;
  children?: React.ReactNode;
  title?: string | null;
}

type ImageCarouselProps = {
  slides: IImageCarousel[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  const { slides } = props;

  const [emblaRef] = useEmblaCarousel(undefined, [
    Autoplay({ playOnInit: true, delay: 3000 })
  ])

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={slide.id}>
              <Image src={slide.src || ''} alt={slide.id} 
          objectFit="cover"
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"/>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div> */}
    </section>
  )
}
