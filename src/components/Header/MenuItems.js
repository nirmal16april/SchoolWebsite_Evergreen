import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
  const { mobileMenu } = props;
  const [course, setCourse] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === 'course') {
      setCourse(!course);
      setAboutOpen(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'about') {
      setCourse(false);
      setAboutOpen(!aboutOpen);
      setPage(false);
      setBlog(false);
    } else if (menu === 'page') {
      setCourse(false);
      setAboutOpen(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === 'blog') {
      setCourse(false);
      setAboutOpen(false);
      setPage(false);
      setBlog(!blog);
    }
  };

  const handleClick = (e) => {
    if (mobileMenu) {
      e.preventDefault();
    }
  };

  return (
    <ul>
      <li>
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li className="has-dropdown">
        <Link
          to="#"
          className={aboutOpen ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>About</span>
          <button
            className={`${
              aboutOpen
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            type="button"
            onClick={() => {
              openMobileMenu('about');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            aboutOpen ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/about-society">Society</Link>
          </li>
          <li>
            <Link to="/about-aims-objectives">Aims &amp; Objectives</Link>
          </li>
          <li>
            <Link to="/about-school-curriculum">School Curriculum</Link>
          </li>
          <li>
            <Link to="/about-facilities">Facilities</Link>
          </li>
          <li>
            <Link to="/mandatory-public-disclosure">
              Mandatory Public Disclosure
            </Link>
          </li>
        </ul>
      </li>
      {/* <li className="has-dropdown">
        <Link
          to="/course-details"
          className={course ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Courses</span>
          <button
            className={`${
              course
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            onClick={() => {
              openMobileMenu('course');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            course ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link to="/course-1">Course 01</Link>
          </li>
          <li>
            <Link to="/course-2">Course 02</Link>
          </li>
          <li>
            <Link to="/course-details">Course Details</Link>
          </li>
        </ul>
      </li> */}
      <li className="has-dropdown p-static">
        <Link to="#" className={page ? 'expanded' : ''} onClick={handleClick}>
          <span>Pages</span>
          <button
            className={`${
              page
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            onClick={() => {
              openMobileMenu('page');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <div
          className={
            page
              ? 'it-submenu submenu it-mega-menu d-block'
              : 'it-submenu submenu it-mega-menu'
          }
        >
          <div className="it-mega-menu-wrap">
            <div className="row">
              <div className="col-xl-3">
                <ul className="it-megamenu-space-1">
                  {/* <li>
                    <Link to="/event">Event</Link>
                  </li>
                  <li>
                    <Link to="/event-details">Event Details</Link>
                  </li> */}
                  <li>
                    <Link to="/our-founder">Our Founder</Link>
                  </li>
                  <li>
                    <Link to="/chairmans-message">Chairman&apos;s Message</Link>
                  </li>
                  <li>
                    <Link to="/managing-directors-message">
                      Managing Director&apos;s Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/principals-message">
                      Principal&apos;s Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/vice-principals-message">
                      Vice Principal&apos;s Message
                    </Link>
                  </li>
                  <li>
                    <Link to="/teacher">Instructor</Link>
                  </li>
                  <li>
                    <Link to="/teacher-details">Instructor Details</Link>
                  </li>
                  <li>
                    <Link to="/instructor-registration">
                      Instructor Registration
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-4">
                <ul className="it-megamenu-space-2">
                  <li>
                    <Link to="/services-1">Service Style 01</Link>
                  </li>
                  <li>
                    <Link to="/services-2">Service Style 02</Link>
                  </li>
                  <li>
                    <Link to="/services-3">Service Style 03</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Details</Link>
                  </li>
                  <li>
                    <Link to="/student-registration">Student Registration</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3">
                <ul className="it-megamenu-space-3">
                  <li>
                    <Link to="/testimonial">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/faq">Faq</Link>
                  </li>
                  <li>
                    <Link to="/price">Price</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/shop-details">Shop Details</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-2">
                <ul className="it-megamenu-space-4">
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/checkout">Checkout</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/signin">Sign In</Link>
                  </li>
                  <li>
                    <Link to="/404">Error</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="has-dropdown">
        <Link
          to="/blog-1"
          className={blog ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Blog</span>
          <button
            className={`${
              blog
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            onClick={() => {
              openMobileMenu('blog');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={blog ? 'it-submenu submenu d-block' : 'it-submenu submenu'}
        >
          <li>
            <Link to="/blog-1">Blog Style 01</Link>
          </li>
          <li>
            <Link to="/blog-2">Blog Style 02</Link>
          </li>
          <li>
            <Link to="/blog-sidebar">Blog Sidebar</Link>
          </li>
          <li>
            <Link to="/blog-details">Blog Details</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
      </li>
    </ul>
  );
};
export default MenuItems;
