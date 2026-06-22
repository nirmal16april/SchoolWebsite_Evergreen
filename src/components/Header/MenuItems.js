import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuItems = (props) => {
  const { mobileMenu } = props;
  const [course, setCourse] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  const [toppersOpen, setToppersOpen] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [page, setPage] = useState(false);
  const [blog, setBlog] = useState(false);

  const openMobileMenu = (menu) => {
    if (menu === 'course') {
      setCourse(!course);
      setAboutOpen(false);
      setRulesOpen(false);
      setToppersOpen(false);
      setMessageOpen(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'about') {
      setCourse(false);
      setAboutOpen(!aboutOpen);
      setRulesOpen(false);
      setToppersOpen(false);
      setMessageOpen(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'rules') {
      setCourse(false);
      setAboutOpen(false);
      setRulesOpen(!rulesOpen);
      setToppersOpen(false);
      setMessageOpen(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'toppers') {
      setCourse(false);
      setAboutOpen(false);
      setRulesOpen(false);
      setToppersOpen(!toppersOpen);
      setMessageOpen(false);
      setPage(false);
      setBlog(false);
    } else if (menu === 'message') {
      setCourse(false);
      setAboutOpen(false);
      setRulesOpen(false);
      setToppersOpen(false);
      setMessageOpen(!messageOpen);
      setPage(false);
      setBlog(false);
    } else if (menu === 'page') {
      setCourse(false);
      setAboutOpen(false);
      setRulesOpen(false);
      setToppersOpen(false);
      setMessageOpen(false);
      setPage(!page);
      setBlog(false);
    } else if (menu === 'blog') {
      setCourse(false);
      setAboutOpen(false);
      setRulesOpen(false);
      setToppersOpen(false);
      setMessageOpen(false);
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
      <li className="has-dropdown">
        <Link
          to="#"
          className={aboutOpen ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>About Us</span>
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
            <Link to="/our-founder">Our Founder</Link>
          </li>
          <li>
            <Link to="/about-us">Mission &amp; Vision</Link>
          </li>
          <li>
            <Link to="/about-society">Our Society</Link>
          </li>
          <li>
            <Link to="/about-aims-objectives">Aims &amp; Objectives</Link>
          </li>
          <li>
            <Link to="/about-school-curriculum">School Curriculum</Link>
          </li>
          <li>
            <Link to="/about-facilities">Infrastructure</Link>
          </li>
          <li>
            <Link to="/smc">School Management Committee (SMC)</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link
          to="#"
          className={messageOpen ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Message</span>
          <button
            className={`${
              messageOpen
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            type="button"
            onClick={() => {
              openMobileMenu('message');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            messageOpen ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link to="/chairmans-message">Chairman&apos;s Message</Link>
          </li>
          <li>
            <Link to="/managing-directors-message">
              Managing Director&apos;s Message
            </Link>
          </li>
          <li>
            <Link to="/principals-message">Principal&apos;s Message</Link>
          </li>
          <li>
            <Link to="/vice-principals-message">
              Vice Principal&apos;s Message
            </Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link
          to="#"
          className={rulesOpen ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Rules</span>
          <button
            className={`${
              rulesOpen
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            type="button"
            onClick={() => {
              openMobileMenu('rules');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            rulesOpen ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link to="/rules-discipline">Discipline</Link>
          </li>
          <li>
            <Link to="/rules-admission">Admission</Link>
          </li>
          <li>
            <Link to="/rules-withdrawal">Withdrawal</Link>
          </li>
          <li>
            <Link to="/rules-uniform">School Uniform</Link>
          </li>
          <li>
            <Link to="/rules-fees">School Fees</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link
          to="#"
          className={toppersOpen ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Our Achievers</span>
          <button
            className={`${
              toppersOpen
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            type="button"
            onClick={() => {
              openMobileMenu('toppers');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            toppersOpen ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link to="/toppers-class-x">Class X Toppers</Link>
          </li>
          <li>
            <Link to="/toppers-class-xii">Class XII Toppers</Link>
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
      <li className="has-dropdown">
        <Link to="#" className={page ? 'expanded' : ''} onClick={handleClick}>
          <span>Academics</span>
          <button
            className={`${
              page
                ? 'dropdown-toggle-btn dropdown-opened'
                : 'dropdown-toggle-btn'
            } d-xl-none`}
            type="button"
            onClick={() => {
              openMobileMenu('page');
            }}
          >
            <i className="fal fa-angle-right"></i>
          </button>
        </Link>
        <ul
          className={
            page ? 'it-submenu submenu d-block' : 'it-submenu submenu'
          }
        >
          <li>
            <Link to="/fee-structure">Fee Structure</Link>
          </li>
          <li>
            <Link to="/book-list">Book List</Link>
          </li>
          <li>
            <Link to="/gallery">Photo Gallery</Link>
          </li>
          <li>
            <Link to="/calendar">Academic Calendar</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link
          to="/blog-1"
          className={blog ? 'expanded' : ''}
          onClick={handleClick}
        >
          <span>Blog</span>
          <button
            type="button"
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
            <Link to="/blog-1">Blog Catalog</Link>
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
