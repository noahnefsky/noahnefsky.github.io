import React from 'react';
import { Typography, useMediaQuery } from '@material-ui/core';

const AboutMe = () => {
  const desktop = useMediaQuery('(min-width: 960px)');

  const renderEducationInfo = () => (
    <>
      <div style={tabStyle}>
        <b>Education</b>: Honours Bachelor's Computer Science at the University of Waterloo,
      </div>
      <div style={tabStyle}>
        <b>Minor</b>: Economics,
      </div>
      <div style={tabStyle}>
        <b>Passions</b>: ['Making AI useful, Science'],
      </div>
      <div style={tabStyle}>
        <b>Sports</b>: ['Baseball, hockey, basketball'],
      </div>
      <div style={tabStyle}>
        <b>Other interests</b>: ['Fitness, sports, finance, food']
      </div>
    </>
  );

  return (
    <center>
      <div style={containerStyle}>
        <Typography style={{ ...textStyle, width: desktop ? '50%' : '80%', fontSize: desktop ? 16 : null }}>
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
};

const tabStyle = {
  paddingLeft: '2.5em'
}

export default AboutMe;
