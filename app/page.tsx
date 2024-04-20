import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Statistic from "./components/Statisc";
import Pricing from "./components/Pricing/Index";
import Footer from "./components/Footer/Index";

const page = () => {
  return (
    <body>
      <div>
        <Header />
        <Login />
        <Statistic />
        <Pricing />
        <Footer />
      </div>
    </body>
  );
};

export default page;
