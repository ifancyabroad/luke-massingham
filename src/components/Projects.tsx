"use client";

import { PROJECTS } from "@/utils/constants";
import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import arrowLeft from "../../public/arrow_left.svg";
import arrowRight from "../../public/arrow_right.svg";

export default function Projects() {
    const ref = useRef<Carousel>(null);

    const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		}
	};

    const handleNext = () => {
        if (ref.current) {
            ref.current.next();
        }
    };

    const handlePrev = () => {
        if (ref.current) {
            ref.current.previous();
        }
    };

	return (
        <div>
            <div className="flex justify-between items-center flex-wrap mb-5">
                <h3 className="text-2xl md:text-3xl">Recent projects <span className="font-light">(further project details coming soon)</span></h3>
                <div className="flex items-center gap-12">
                    <button aria-label="previous" onClick={handlePrev}>
                        <Image src={arrowLeft} alt="arrow left" />
                    </button>
                    <button aria-label="next" onClick={handleNext}>
                        <Image src={arrowRight} alt="arrow right" />
                    </button>
                </div>
            </div>
            <Carousel
                ref={ref}
                responsive={responsive}
                infinite
                arrows={false}
            >
                {PROJECTS.map((project) => (
                    <div key={project.title} className="mr-4">
                        <div className="bg-slate-400 rounded-[4px] min-h-[572px] mb-4" />
                        <h3 className="text-xl tracking-widest font-semibold mb-2">{project.title}</h3>
                        <p className="font-light">{project.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
	);
}