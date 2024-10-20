'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ILayout, MuiBox } from '@nx-next-js-micro/components';
import './embla.scss';
import Image from 'next/image';
import { DotButton, useDotButton } from './EmblaDotButton';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaArrowButtons';

export type IImageCarousel = {
  id: string;
  src?: string | null;
  children?: React.ReactNode;
  title?: string | null;
};

type SlideProps = {
  height?: number | string;
};

type ImageCarouselProps = {
  slides: IImageCarousel[];
  onPrevButtonClick?: () => void;
  onNextButtonClick?: () => void;
  prevBtnDisabled?: boolean;
  nextBtnDisabled?: boolean;
  slideProps?: SlideProps;
  containerProps?: React.ComponentProps<'div'>
};

export const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  const { slides, slideProps, containerProps } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(undefined, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport"  {...containerProps} ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={slide.id}>
              <Image
                src={slide.src || ''}
                alt={slide.id}
                objectFit="cover"
                fill
                className="w-full h-full top-0 left-0 object-cover"
              />
              <div
                className="embla__slide__number"
                style={{ height: slideProps?.height }}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
};
