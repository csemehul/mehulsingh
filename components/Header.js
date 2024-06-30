import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <h1>Mehul Singh</h1>
        <p>Software Engineer</p>
        <p><a href="mailto:mehulsingh127@gmail.com">mehulsingh127@gmail.com</a> | <a href="tel:+917383811493">(+91) 7383811493</a></p>
        <p><a href="https://github.com/csemehul">GitHub</a> | <a href="https://leetcode.com/u/mehulsng/">LeetCode</a></p>
      </div>
    </header>
  );
}

export default Header;
