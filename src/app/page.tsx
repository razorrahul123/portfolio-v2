"use client";
// import Image from "next/image";
// import ThemeSwitch from "./components/ThemeSwitch";
import NavBar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Jobs from "./components/Jobs";
// import Contact from "./components/Contact";
import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";
const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false,
});
const About = dynamic(() => import("./components/About"), {
  ssr: false,
});
const Jobs = dynamic(() => import("./components/Jobs"), {
  ssr: false,
});
const Contact = dynamic(() => import("./components/Contact"), {
  ssr: false,
});
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      {/* {!loading && ( */}
      <>
        <Hero />
        <About />
        <Jobs />
        <Contact />
      </>
      {/* )} */}

      {/* </Suspense> */}

      {/* <section> */}
      {/* <NavBar /> */}
      {/* <ThemeSwitch />
        <p className="text-gray-300	">Vercel app</p> */}
      {/* </section> */}
    </main>
  );
}
