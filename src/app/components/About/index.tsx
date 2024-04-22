"use client";
import React, { useEffect, useRef } from "react";
import { srConfig } from "../../config";
// import useScrollReveal from "../../utils/sr";
import ScrollReveal from "scrollreveal";
import { usePrefersReducedMotion } from "../../hooks";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import "./index.css";

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  // const sr = useScrollReveal();
  // console.log("window: ", window);

  useEffect(() => {
    if (typeof window !== undefined) {
      console.log("window: ", window);

      if (prefersReducedMotion) {
        return;
      }
      // if(scr)

      console.log("ScrollReveal: ", ScrollReveal);

      // ScrollReveal().reveal(revealContainer.current, srConfig());
    }
  }, []);

  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "NextJS",
    "Node.js",
    "React Native",
  ];

  return (
    <section
      id="about"
      className="max-w-[900px] pb-[100px]"
      ref={revealContainer}
    >
      <h2 className="numbered-heading text-4xl text-[#eaeaea] mb-12">
        About Me
      </h2>

      <div className="inner flex justify-between gap-x-5">
        <div>
          <div>
            <p className="text-xl text-[#eaeaea] mb-12">
              Hello! My name is Sushant and I enjoy creating things that live on
              the internet. I like learning about tech advancement and applying
              them in real life scenarios.
            </p>

            <p className="text-xl text-[#eaeaea] mb-12">
              I’ve had the privilege of working at{" "}
              <a
                href="https://www.makemytrip.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#87FCEB]"
              >
                largest travel company in India
              </a>
              ,{" "}
              <a
                href="https://www.urbanpiper.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#87FCEB]"
              >
                food tech sector
              </a>
              ,{" "}
              <a
                href="https://www.cowrks.com/"
                target="_blank"
                rel="noreferrer"
              >
                and startups
              </a>
              . Currently, I'm building reusable frontend components library at{" "}
              <a
                href="https://www.makemytrip.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[#87FCEB]"
              >
                MakeMyTrip
              </a>
              .
            </p>

            <p className="text-xl text-[#eaeaea] mb-12">
              I recently worked on creating a product named{" "}
              <a
                href="https://roundup.co/"
                target="_blank"
                rel="noreferrer"
                className="text-[#87FCEB]"
              >
                Roundup
              </a>{" "}
              . The technologies used were Remix JS, Prisma, Fly.io. It was
              created from scratch and I worked as a frontend developer for it.
              The product was launched on ProductHunt on 11 Jan 2023 and gained
              484 upvotes and stayed at 8th position overall.
            </p>

            <p className="text-xl text-[#eaeaea] mb-12">
              Here are a few technologies I’ve been working with recently:
            </p>
          </div>

          <ul className="skills-list grid-cols-2 grid text-base text-[#eaeaea] mb-12">
            {skills &&
              skills.map((skill, i) => (
                <li
                  className="text-sm mb-3 text-[#eaeaea] flex gap-x-3"
                  key={i}
                >
                  <ChevronDoubleRightIcon className="w-4 h-4 text-[#87FCEB] shrink-0  mt-0.5" />
                  {skill}
                </li>
              ))}
          </ul>
        </div>

        <div className="shrink-0">
          <div className="img-wrapper">
            {/* <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
            /> */}
            <Image
              src="/images/profile.jpg"
              width={300}
              height={300}
              className="object-cover img"
              alt="Picture of the author"
            />
            {/* <img
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              // width={500}
              // height={500}
              className="w-[300px] h-[300px] object-cover	img"
              alt="Picture of the author"
            /> */}
            {/* <img
              src="/profile.jpg"
              // width={500}
              // height={500}
              className="w-[300px] h-[300px] object-cover	img"
              alt="Picture of the author"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
