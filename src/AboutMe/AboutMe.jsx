import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';

const AboutMe = () => {
  const desktop = useMediaQuery('(min-width: 960px)');

  const renderEducationInfo = () => (
    <>
      <div style={tabStyle}>
        <b>Education</b>: Computer Science student at the University of Waterloo,
      </div>
      <div style={tabStyle}>
      <b>Graduation Year</b>: 2025 (I have completed 6 semesters),
      </div>
      <div style={tabStyle}>
        <b>Minor</b>: Economics,
      </div>
      <div style={tabStyle}>
        <b>Passions</b>: ['Software development, finance']
      </div>
      <div style={tabStyle}>
        <b>Sports</b>: ['Baseball, hockey, basketball']
      </div>
      <div style={tabStyle}>
        <b>Other interests</b>: ['AI, Machine Learning, fitness, food']
      </div>
    </>
  );

  return (
    <center>
      <div style={containerStyle}>
        <Typography style={{ ...textStyle, width: desktop ? '50%' : '80%' }}>
          {"{"}
          <br />
          {renderEducationInfo()}
          {"}"}
          <br />
          Click the mailbox button below to shoot me an email, or feel free to send me a Linkedin message.
        </Typography>
      </div>
    </center>
  );
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '2vh',
  marginBottom: '40px',
};

const textStyle = {
  textAlign: 'left',
  lineHeight: '2', // Adjust the value for double spacing
  fontFamily: 'monospace',
  fontSize: '16px'
};

const tabStyle = {
  paddingLeft: '2.5em'
}

export default AboutMe;
