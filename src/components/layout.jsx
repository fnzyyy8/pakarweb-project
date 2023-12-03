/* eslint-disable react/prop-types */
import FooterPage from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterPage />
    </>
  );
}
