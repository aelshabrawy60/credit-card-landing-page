"use client"
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Feature from "@/components/sections/Feature";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testomnials from "@/components/sections/Testomnials";
import Button from "@/components/ui/button/Button";
import CounterBar from "@/components/ui/CounterBar";
import Dora from '../components/ui/Dora'
import Navbar from "@/components/ui/Navbar/Navbar";
import Parteners from "@/components/ui/Parteners";
import UsersList from "@/components/ui/usersList/UsersList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageHeight, setPageHeight] = useState(0)

  function handleClick() {
    console.log("clicked");
  }
  useEffect(()=>{
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );
    setPageHeight(pageHeight)
  },[])
  return (
    <>
      <img src="line.svg" style={{height: pageHeight}} className="absolute -top-6 z-[-20]"></img>
      <Navbar/>
      <Dora className="left-1/2" top={0}/>
      <div className="mt-[150px] max-w-[1500px] px-10 lg:px-20">
        <Hero/>
        <div className="mt-[128px]">
          <CounterBar/>
        </div>
        <div className="mt-[128px]">
          <Parteners/>
        </div>
        <div className="mt-[128px]">
          <Services/>
        </div>
        <div className="mt-[128px]">
          <Feature title={"Design your personalized credit card."} description={"You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary"} CTA={"Create New Card"} image={"feature1.svg"} type={true}/>
        </div>
        <div className="mt-[128px]">
          <Feature title={"Find the Perfect Credit Card for You"} description={"Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations."} CTA={"Learn More"} image={"Feature2.svg"} type={false}/>
        </div>
        <div className="mt-[128px]">
          <Testomnials/>
        </div>
        <div className="mt-[128px]">
          <FAQ/>
        </div>
        <div className="mt-[240px]">
          <Download/>
        </div>
      </div>
      <div className="w-full">
          <Footer/>
      </div>
    </>
  );
}
