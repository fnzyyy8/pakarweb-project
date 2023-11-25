/* eslint-disable react/prop-types */
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
