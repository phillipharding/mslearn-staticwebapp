import React from 'react';
import { ListHeader } from './components';

const About = () => (
  <div className="content-container">
    <ListHeader
      title="About us"
      routePath="/about"
    />
    <div className="content-title-group not-found">
      <h2 className="title">Why?</h2>
      <p>
        This project was created to help represent a fundamental app written
        with React. The shopping theme is used throughout the app.
      </p>
      <br />
      <h2 className="title">Resources</h2>
      <ul>
        <li>
          <a href="https://github.com/MicrosoftDocs/mslearn-staticwebapp">
            Code in GitHub
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default About;
