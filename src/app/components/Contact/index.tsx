"use client";
import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
import { srConfig, email } from "../../config";
// import sr from "../../utils/sr";
// import useScrollReveal from "../../utils/sr";
import ScrollReveal from "scrollreveal";
import { usePrefersReducedMotion } from "../../hooks";

// const StyledContactSection = styled.section`
//   max-width: 600px;
//   margin: 0 auto 100px;
//   text-align: center;

//   @media (max-width: 768px) {
//     margin: 0 auto 50px;
//   }

//   .overline {
//     display: block;
//     margin-bottom: 20px;
//     color: var(--green);
//     font-family: var(--font-mono);
//     font-size: var(--fz-md);
//     font-weight: 400;

//     &:before {
//       bottom: 0;
//       font-size: var(--fz-sm);
//     }

//     &:after {
//       display: none;
//     }
//   }

//   .title {
//     font-size: clamp(40px, 5vw, 60px);
//   }

//   .email-link {
//     ${({ theme }) => theme.mixins.bigButton};
//     margin-top: 50px;
//   }
// `;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  // const sr = useScrollReveal();
  useEffect(() => {
    if (window && typeof window && typeof window !== undefined) {
      if (prefersReducedMotion) {
        return;
      }

      ScrollReveal().reveal(revealContainer.current, srConfig());
    }
  }, []);

  return (
    <section
      className="text-center max-w-[600px] mx-auto mb-[100px]"
      id="contact"
      ref={revealContainer}
    >
      <h2 className="numbered-heading underline text-[#87FCEB] pb-2 ">
        What’s Next?
      </h2>

      <h2 className="title text-[#eaeaea] text-4xl font-semibold mb-4">
        Get In Touch
      </h2>

      <p className="text-[#eaeaea] text-base font-semibold mb-4">
        Feel free to contact me with any questions or for information anytime.
      </p>
      <a
        className="email-link py-4 px-5 border border-[#87FCEB] text-[#eaeaea] rounded-lg inline-block mt-10"
        href={`mailto:${email}`}
        target="_blank"
        rel="noreferrer"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
