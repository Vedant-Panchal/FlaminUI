"use client"
import Section1 from "@/components/Sections/Section1/Section1";
import Section2 from "@/components/Sections/Section2/Section2";
const Home = () => {
  return (
   <div className="w-full h-screen ">
   <Section1/>
   <Section2/>
   <div className="h-screen w-screen"></div>
   </div>
  );
};

export default Home;
