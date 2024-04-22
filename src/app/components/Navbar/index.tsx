"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import styled, { css } from "styled-components";
import { navLinks } from "../../config";
import { usePathname } from "next/navigation";
// import { loaderDelay } from "@utils";
import { loaderDelay } from "../../utils";
import { useScrollDirection, usePrefersReducedMotion } from "../../hooks";
// import { Menu } from "@components";
// import { IconLogo, IconHex } from "@components/icons";

// const StyledHeader = styled.header`
//   ${({ theme }) => theme.mixins.flexBetween};
//   position: fixed;
//   top: 0;
//   z-index: 11;
//   padding: 0px 50px;
//   width: 100%;
//   height: var(--nav-height);
//   background-color: rgba(10, 25, 47, 0.85);
//   filter: none !important;
//   pointer-events: auto !important;
//   user-select: auto !important;
//   backdrop-filter: blur(10px);
//   transition: var(--transition);

//   @media (max-width: 1080px) {
//     padding: 0 40px;
//   }
//   @media (max-width: 768px) {
//     padding: 0 25px;
//   }

//   @media (prefers-reduced-motion: no-preference) {
//     ${(props) =>
//       props.scrollDirection === "up" &&
//       !props.scrolledToTop &&
//       css`
//         height: var(--nav-scroll-height);
//         transform: translateY(0px);
//         background-color: rgba(10, 25, 47, 0.85);
//         box-shadow: 0 10px 30px -10px var(--navy-shadow);
//       `};

//     ${(props) =>
//       props.scrollDirection === "down" &&
//       !props.scrolledToTop &&
//       css`
//         height: var(--nav-scroll-height);
//         transform: translateY(calc(var(--nav-scroll-height) * -1));
//         box-shadow: 0 10px 30px -10px var(--navy-shadow);
//       `};
//   }
// `;

// const StyledNav = styled.nav`
//   ${({ theme }) => theme.mixins.flexBetween};
//   position: relative;
//   width: 100%;
//   color: var(--lightest-slate);
//   font-family: var(--font-mono);
//   counter-reset: item 0;
//   z-index: 12;

//   .logo {
//     ${({ theme }) => theme.mixins.flexCenter};

//     a {
//       color: var(--green);
//       width: 42px;
//       height: 42px;
//       position: relative;
//       z-index: 1;

//       .hex-container {
//         position: absolute;
//         top: 0;
//         left: 0;
//         z-index: -1;
//         @media (prefers-reduced-motion: no-preference) {
//           transition: var(--transition);
//         }
//       }

//       .logo-container {
//         position: relative;
//         z-index: 1;
//         svg {
//           fill: none;
//           user-select: none;
//           @media (prefers-reduced-motion: no-preference) {
//             transition: var(--transition);
//           }
//           polygon {
//             fill: var(--navy);
//           }
//         }
//       }

//       &:hover,
//       &:focus {
//         outline: 0;
//         transform: translate(-4px, -4px);
//         .hex-container {
//           transform: translate(4px, 3px);
//         }
//       }
//     }
//   }
// `;

// const StyledLinks = styled.div`
//   display: flex;
//   align-items: center;

//   @media (max-width: 768px) {
//     display: none;
//   }

//   ol {
//     ${({ theme }) => theme.mixins.flexBetween};
//     padding: 0;
//     margin: 0;
//     list-style: none;

//     li {
//       margin: 0 5px;
//       position: relative;
//       counter-increment: item 1;
//       font-size: var(--fz-xs);

//       a {
//         padding: 10px;

//         &:before {
//           content: "0" counter(item) ".";
//           margin-right: 5px;
//           color: var(--green);
//           font-size: var(--fz-xxs);
//           text-align: right;
//         }
//       }
//     }
//   }

//   .resume-button {
//     ${({ theme }) => theme.mixins.smallButton};
//     margin-left: 15px;
//     font-size: var(--fz-xs);
//   }
// `;

const NavBar = ({}) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  console.log("isHome: ", isHome);
  const [isMounted, setIsMounted] = useState(!isHome);
  //   console.log("isMounted: ", isMounted);
  const scrollDirection = useScrollDirection("down");
  console.log("scrollDirection: ", scrollDirection);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  console.log("scrolledToTop: ", scrolledToTop);
  const prefersReducedMotion = usePrefersReducedMotion();
  const logoRef = useRef(null);
  const resumeRef = useRef(null);
  //   const navListRef = useRef([]);
  //   const [elRefs, setElRefs] = React.useState([]);
  //   console.log("elRefs: ", elRefs);
  const navListRef = navLinks.map((_x) => useRef(null));

  const handleScroll = () => {
    console.log("handleScroll: ", handleScroll);
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      if (prefersReducedMotion) {
        return;
      }

      const timeout = setTimeout(() => {
        setIsMounted(true);
      }, 100);

      window.addEventListener("scroll", handleScroll);

      // // add or remove refs
      // setElRefs((elRefs) =>
      //   Array(navLinks).map((_, i) => elRefs[i] || React.createRef())
      // );

      return () => {
        clearTimeout(timeout);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  //   const timeout = isHome ? loaderDelay : 0;
  const timeout = 2000;
  console.log("timeout: ", timeout);
  //   const timeout = 0;
  const fadeClass = isHome ? "fade" : "";
  const fadeDownClass = isHome ? "fadedown" : "";

  const Logo = (
    <div
      ref={logoRef}
      className="flex items-center justify-center "
      tabIndex={-1}
    >
      <a
        className="w-12 h-12 relative z-[1] transition-all ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] duration-[2500ms]"
        href="/"
        aria-label="home"
      >
        <div className="hex-container w-12 h-12 bg-pink-300 ">
          {/* <IconHex /> */}
          {/* <div className="bg-pink-300  w-12 h-12"></div> */}
        </div>
      </a>
    </div>
  );

  const ResumeLink = (
    <a
      className="text-base px-4 py-3 radius rounded ml-5  border border-[#87FCEB] text-[#87FCEB]"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <header
      className={`fixed flex items-center top-0 z-[11] px-12 w-full h-[100px] bg-[#121212] filter-none pointer-events-auto select-auto backdrop-blur-md transition-all  ease-[cubic-bezier(0.645, 0.045, 0.355, 1)] duration-[250ms] 
      shadow-[0_-1px_0_0_rgba(51,51,51,1)] 
      ${
        scrollDirection === "up" && !scrolledToTop
          ? "h-[70px] translate-y-0 bg-[#121212cc]  shadow-[0_-1px_0_0_#333] border-b-[0.2px] border-b-[#333]"
          : scrollDirection === "down" && !scrolledToTop
          ? "h-[70px] -translate-y-[70px] border-b-0"
          : ""
      }`}
      // scrollDirection={scrollDirection}
      //   scrolledToTop={scrolledToTop}
    >
      <nav className="relative w-full z-[12] flex justify-between items-center">
        <TransitionGroup component={null}>
          {isMounted && (
            <CSSTransition
              classNames={fadeClass}
              timeout={timeout}
              nodeRef={logoRef}
            >
              <>{Logo}</>
            </CSSTransition>
          )}
        </TransitionGroup>
        <div className="flex items-center">
          <ol className="flex items-center justify-between">
            <TransitionGroup component={null}>
              {isMounted &&
                navLinks &&
                navLinks.map(({ url, name }, i) => (
                  <CSSTransition
                    key={i}
                    classNames={fadeDownClass}
                    timeout={timeout}
                    nodeRef={navListRef[i]}
                  >
                    <li
                      ref={navListRef[i]}
                      className="mx-5 text-[#EAEAEA]"
                      key={i}
                      style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
                    >
                      <Link href={url}>{name}</Link>
                    </li>
                  </CSSTransition>
                ))}
            </TransitionGroup>
          </ol>

          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                classNames={fadeDownClass}
                timeout={timeout}
                nodeRef={resumeRef}
              >
                <div
                  ref={resumeRef}
                  style={{
                    transitionDelay: `${isHome ? navLinks.length * 100 : 0}ms`,
                  }}
                >
                  {ResumeLink}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
