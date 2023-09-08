import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const handleMouseLeave = () => {
    setOpen(false);
  };

  const handleMouseEnter = () => {
    setOpen(true);
  };

  return (
    <div>
      <div className="flex navbar">
        <div className="pr-5">
          <h1> SINGAPORE AMERICAN SCHOOL </h1>
        </div>
        <div className="flex">
          <img
            alt=""
            src="/images/safeguarding.png"
            width={60}
            height={20}
          />
          <img
            src="/images/reimagined.png"
            alt=""
            width={65}
            height={20}
          />
          <img
            src="/images/menu-dropdown.png"
            alt=""
            width={30}
            height={17}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <img
            src="/images/search-icon.png"
            alt=""
            width={15}
            height={15}
          />
        </div>
      </div>
      {isOpen && (
        <div>
          <ul>
            <li>Students</li>
            <li>Parents</li>
            <li>Alumni</li>
            <li>Employee</li>
            <li>New Families</li>
          </ul>
        </div>
          )}
          <div>
              <Link to='/about-us'>ABOUT US</Link>
              <Link to='/admissions'>ADMISSIONS</Link>
              <Link to='/academics'>ACADEMICS</Link>
              <Link to='/activities'>ACTIVITIES, ATHLETES, ART</Link>
              <Link to='/student-life'>STUDENT LIFE</Link>
              <Link to='/community'>COMMUNITY</Link>
              <Link to='/donation'>GIVE TO SAS</Link>
              <Link to='vancancy'>WORK AT SAS</Link>
          </div>
    </div>
  );
}

