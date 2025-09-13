"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { Section } from "../../ui/section";
import {
  Slide,
  SlideContent,
  SlideTitle,
  SlideDescription,
  SlideVisual,
  SlideButton,
  SlideExpandedContent,
} from "../../ui/slide";
import Glow from "../../ui/glow";
import Screenshot from "../../ui/screenshot";
interface SlideProps {
  tagline: string;
  title: string;
  description: string;
  image: React.ReactNode;
}

interface CarouselSmallProps {
  title?: string;
  description?: string;
  slides?: SlideProps[];
  className?: string;
}

export default function CarouselSmall({
  title = "All the components you need",
  description = "Launch UI provides a comprehensive set of components that includes everything you might need to build an effective, modern landing page.",
  slides = [
    {
      tagline: "Hero sections",
      title: "Start with the right impression",
      description:
        "These shadcn hero sections are designed to make a strong first impression. They are optimized for maximum performance and deliver smooth animations and responsive interactions without compromising on functionality or design.",
      image: (
        <Screenshot
          srcLight="/img/billing.png"
          srcDark="/img/billing.png"
          alt="Hero sections"
          width={900}
          height={600}
        />
      ),
    },
    {
      tagline: "Bento grids",
      title: "Showcase your features",
      description:
        "These shadcn bento grids are designed to showcase your features in a way that is both functional and visually appealing. They are optimized for maximum performance and deliver smooth animations and responsive interactions without compromising on functionality or design.",
      image: (
        <Screenshot
          srcLight="/app-mail-light.png"
          srcDark="/app-mail-dark.png"
          alt="Bento grids"
          width={900}
          height={600}
        />
      ),
    },
    {
      tagline: "Navbars",
      title: "Guide your users like a pro",
      description:
        "These shadcn navbars are designed to help you stay organized. They are optimized for maximum performance and deliver smooth animations and responsive interactions without compromising on functionality or design.",
      image: (
        <Screenshot
          srcLight="/app-settings-light.png"
          srcDark="/app-settings-dark.png"
          alt="Navbars"
          width={900}
          height={600}
        />
      ),
    },
    {
      tagline: "Testimonials",
      title: "Prove your success",
      description:
        "These shadcn testimonials, quotes, and reviews are designed to showcase your success. They are optimized for maximum performance and deliver smooth animations and responsive interactions without compromising on functionality or design.",
      image: (
        <Screenshot
          srcLight="/app-tasks-light.png"
          srcDark="/app-tasks-dark.png"
          alt="Testimonials"
          width={900}
          height={600}
        />
      ),
    },
    {
      tagline: "Illustrations",
      title: "Showcase your product",
      description:
        "These shadcn mockup, illustration, and background components are designed to showcase your product. They are optimized for maximum performance and deliver smooth animations and responsive interactions without compromising on functionality or design.",
      image: (
        <Screenshot
          srcLight="/mobile-light.png"
          srcDark="/mobile-dark.png"
          alt="Illustrations"
          width={900}
          height={600}
        />
      ),
    },
  ],
  className,
}: CarouselSmallProps) {
  const [expandedSlides, setExpandedSlides] = React.useState<boolean[]>(
    new Array(slides.length).fill(false),
  );

  const toggleSlide = (index: number) => {
    setExpandedSlides((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Section className={cn("w-full overflow-hidden", className)}>
      <div className="max-w-container mx-auto flex flex-col items-start gap-6 sm:gap-12">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-center text-3xl font-semibold text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[720px] font-medium text-balance sm:text-xl">
            {description}
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            startIndex: 0,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {slides.map((slide, index) => (
              <CarouselItem
                key={index}
                className="flex basis-4/5 pl-4 sm:basis-2/3 lg:basis-5/12 xl:basis-1/3"
              >
                <Slide
                  className="grow cursor-pointer"
                  onClick={() => toggleSlide(index)}
                >
                  <SlideVisual
                    className="fade-bottom-lg min-h-[300px] items-end overflow-hidden"
                    isExpanded={expandedSlides[index]}
                  >
                    <div className="h-full max-h-[300px] w-full origin-top-left scale-200 object-cover transition-transform duration-300 group-hover:scale-[2.1]">
                      {slide.image}
                    </div>
                    <Glow
                      variant="center"
                      className="scale-[2.5] opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                    />
                  </SlideVisual>
                  <SlideButton isExpanded={expandedSlides[index]} />
                  <SlideContent isExpanded={expandedSlides[index]}>
                    <SlideDescription>{slide.tagline}</SlideDescription>
                    <SlideTitle className="text-balance">
                      {slide.title}
                    </SlideTitle>
                  </SlideContent>
                  <SlideExpandedContent isExpanded={expandedSlides[index]}>
                    {slide.description}
                  </SlideExpandedContent>
                </Slide>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-12 flex justify-start gap-4">
            <CarouselPrevious className="static" />
            <CarouselNext className="static" />
          </div>
        </Carousel>
      </div>
    </Section>
  );
}
