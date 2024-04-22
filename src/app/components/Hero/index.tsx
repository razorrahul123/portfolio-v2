"use client";
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import styled from "styled-components";
import { navDelay, loaderDelay } from "../../utils";
import { usePrefersReducedMotion } from "../../hooks";

// const StyledHeroSection = styled.section`
//   ${({ theme }) => theme.mixins.flexCenter};
//   flex-direction: column;
//   align-items: flex-start;
//   min-height: 100vh;
//   height: 100vh;
//   padding: 0;

//   @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
//     height: auto;
//     padding-top: var(--nav-height);
//   }

//   h1 {
//     margin: 0 0 30px 4px;
//     color: var(--green);
//     font-family: var(--font-mono);
//     font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
//     font-weight: 400;

//     @media (max-width: 480px) {
//       margin: 0 0 20px 2px;
//     }
//   }

//   h3 {
//     margin-top: 5px;
//     color: var(--slate);
//     line-height: 0.9;
//   }

//   p {
//     margin: 20px 0 0;
//     max-width: 540px;
//   }

//   .email-link {
//     ${({ theme }) => theme.mixins.bigButton};
//     margin-top: 50px;
//   }
// `;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const one = (
    <h1 className="text-base  mb-2 text-[#87FCEB]">Hi, my name is</h1>
  );
  const two = (
    <h2 className=" text-2xl font-semibold text-5xl mb-2 text-[#eaeaea]">
      Sushant Kumar Singh.
    </h2>
  );
  const three = (
    <h3 className="text-slate-200 font-semibold text-5xl text-[#eaeaea] mb-5">
      I build things for the web.
    </h3>
  );
  const four = (
    <>
      <p className="text-slate-200  text-base text-[#eaeaea] max-w-lg">
        I’m a software engineer with 5+ years of experience in creating robust
        and user friendly web applications. Collaborative team player with
        excellent communication skills. Committed to staying up to date with
        industry trends and continuously enhancing technical skills.
      </p>
    </>
  );
  const five = (
    <a
      className="email-link py-4 px-5 border border-[#87FCEB] text-[#87FCEB] rounded-lg	 inline-block mt-10"
      href="https://www.linkedin.com/in/sushantkrsingh/"
      target="_blank"
      rel="noreferrer"
    >
      Check out Linkedin
    </a>
  );

  const items = [one, two, three, four, five];

  const itemsRef = items.map((_x) => useRef(null));

  useEffect(() => {
    if (typeof window !== undefined) {
      if (prefersReducedMotion) {
        return;
      }

      const timeout = setTimeout(() => setIsMounted(true), navDelay);
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <section className="flex items-start justify-center min-h-screen h-screen p-0 flex-col">
      {/* {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : ( */}
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition
              nodeRef={itemsRef[i]}
              key={i}
              classNames="fadeup"
              timeout={loaderDelay}
            >
              <div
                ref={itemsRef[i]}
                style={{ transitionDelay: `${i + 1}00ms` }}
              >
                {item}
              </div>
            </CSSTransition>
          ))}
      </TransitionGroup>
      {/* )} */}
    </section>
  );
};

export default Hero;
