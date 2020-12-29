import React from 'react';
import { connect } from 'react-redux';

export const About = ({ name }) => (
  <div>
    <h4>Why yet another website?</h4>
    <p>
      I created "{name}" to showcase my weekend projects, get feedback, and get
      motivated to work on other projects.
    </p>

    <h4>
      Privacy
    </h4>
    <ul>
      <li> This website is open-source (<a href="https://github.com/amir734jj/idea-board-api">API</a>,
        <a href="https://github.com/amir734jj/idea-board-ui">UI</a>) so no monkey business
      </li>
      <li> Data on this site will NOT be sold to a third party</li>
      <li> There will never be any ads on this website</li>
      <li> This website is meant to be simple, not a yet another StackOverflow clone</li>
    </ul>

    <h4>
      Contact
    </h4>
    <ul>
      <li>
        <a href="mailto:admin@anahita.dev">Email</a>
      </li>
      <li>
        <a href="https://github.com/amir734jj">Github</a>
      </li>
    </ul>
  </div>
);

const mapStateToProps = ({ global }) => ({
  name: global.name,
});

export default connect(mapStateToProps, null)(About);
