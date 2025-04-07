import React from "react";
import Footer from "../Elements/Footer";

export default function Layout({ children }) {
  return <div className="md:h-screen dark:bg-[#0e1728] p-2">{children}</div>;
}
