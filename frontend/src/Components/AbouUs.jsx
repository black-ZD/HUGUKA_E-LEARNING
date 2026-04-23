  import { useState } from "react";
   import NavBar from "./NavBar";
   import Footer from "./Footer";
export default function AboutUs(){

  return (<>
     <NavBar/>
     <section className="py-20 px-6 bg-gradient-to-b from-huguka-green to-black text-center">
      <h2 className="text-3xl font-bold text-green-100 ">About Huguka</h2>

      <p className="mt-6 max-w-3xl mx-auto text-white">
        Huguka e-Learning is designed to bridge the gap between education and real-world skills.
        We focus on practical learning, structured modules, and modern digital education systems.
      </p>
    </section>
    <Footer/>
  </>
    
  );
}