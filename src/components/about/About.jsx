import React from 'react';
import { connect } from 'react-redux';

export const About = ({ name }) => (
  <div>
    <h3>
      Welcome to { name }
    </h3>

    <p>
      The idea of this website is to capture ideas that are floating on the internet and
      make sure they don't get lost. Simple things that we gets passed by us from a chat
      forum or comment section of a website. These ideas may be interesting and have
      substantial value.
    </p>

    <p>
      We will capture these ideas, discuss them further and vote on them. Hopefully these
      ideas can change the work in a positive way.
    </p>

    <p>
      This website and it's database is all open source and everyone can get an access.
      The ultimate goal of {name} is to change the world for better.
    </p>
  </div>
);

const mapStateToProps = ({ global }) => ({
  name: global.name,
});

export default connect(mapStateToProps, null)(About);
