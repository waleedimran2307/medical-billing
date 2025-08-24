import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const ServicesData = [
    "Billing Services",
    "Value Added Services",
    "Custom Financial Reporting",
  ];

  const handleNavClick = () => {
    setExpanded(false);
  };

  return (
    <>
      <div className="conatiner-fluid bg-[#00223A] w-auto sm:!h-10 h-16 text-white">
        <ul className="flex sm:flex-row sm:gap-x-16 flex-col items-center justify-center md:justify-end md:mr-60 pt-2  ">
          <li className="flex gap-x-1 items-center">
            <MdPhone className=" md:text-2xl text-xl text-[#239ADF]" />
            <a href="#" className="text-md">
              04078453042
            </a>
          </li>

          <li className="flex gap-x-1 items-center">
            <CgMail className=" md:text-2xl text-xl text-[#239ADF]" />
            <a href="#" className="text-md">
              info@stallionsystem.com
            </a>
          </li>
        </ul>

        <span className="xl:before:block xl:before:absolute xl:before:-inset-2 xl:translate-y-1 xl:translate-x-5 xl:before:-skew-x-[12deg] xl:before:rounded-tl-full xl:before:rounded-tr-full xl:before:bg-white relative -top-3 left-28 px-24 inline-block">
          <span className="xl:block hidden">""</span>
        </span>
      </div>

      <Navbar
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
        className="xl:px-[140px] lg:px-[40px] text-black font-bold lg:!-mt-2 -mt-3"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <img
                className="md:w-[90px] md:h-[90px] w-[70px] h-[70px] xl:ml-8 lg:!-mt-1"
                src="/logo.png"
                alt="logo"
                loading="lazy"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="flex flex-col lg:!flex-row lg:!justify-between items-center w-full gap-y-4 "
          >
            <Nav className="flex flex-col lg:flex-row  items-center  xl:gap-4 gap-1  mx-auto   ">
              <Nav.Link as={NavLink} to="/" onClick={handleNavClick}>
                <span className="hover:text-[#239ADF]">Home</span>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/aboutus" onClick={handleNavClick}>
                <span className="hover:text-[#239ADF]">About Us</span>
              </Nav.Link>

              <NavDropdown
                title={
                  <span className="hover:text-[#239ADF]">Our Services</span>
                }
                id="navbarScrollingDropdown"
                className="hover:text-[#239ADF]"
              >
                {ServicesData.map((data) => (
                  <NavDropdown.Item
                    key={data}
                    href="#"
                    className="hover:text-[#239ADF]"
                  >
                    {data}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={NavLink} to="/contactus" onClick={handleNavClick}>
                <span className="hover:text-[#239ADF]">Contact Us</span>
              </Nav.Link>
            </Nav>

            <Form className="relative  lg:!w-[250px] w-[280px]">
              <Form.Control
                type="search"
                placeholder="Search"
                className="pr-10 outline-none shadow-none w-full"
                aria-label="Search"
              />
              <IoSearch className="bg-[#239ADF] text-white p-[10px] text-lg rounded absolute right-0 top-0 bottom-0 cursor-pointer w-auto h-auto" />
            </Form>

            <div className="leading-[3] text-white lg:!ml-3 lg:!mr-0  flex">
              <ul>
                <li className="flex gap-x-1">
                  <a href="#">
                    <FaFacebook className="bg-[#239ADF] w-auto h-auto p-2 text-xl rounded-full" />
                  </a>
                  <a href="#">
                    <FaTwitter className="bg-[#239ADF] w-auto h-auto p-2 text-xl rounded-full " />
                  </a>
                  <a href="#">
                    <FaInstagramSquare className="bg-[#239ADF] w-auto h-auto p-2 text-xl rounded-full " />
                  </a>

                  <a href="#">
                    <FaLinkedin className="bg-[#239ADF] w-auto h-auto p-2 text-xl rounded-full" />
                  </a>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
