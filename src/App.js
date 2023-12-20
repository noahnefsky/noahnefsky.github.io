import { IconButton, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './App.css';
import headshot from './headshot.jpg';
import Toolbar from './Toolbar/ToolBar';
import AppStyles from './AppStyles';
import Typewriter from "typewriter-effect"
import { MdOutlineEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Resume from "./resume.pdf";
import Particles from './Particles/Particles'

const App = () => {
  const appStyles = AppStyles();
  const mobile = useMediaQuery('(max-width: 960px)');

  return (
    <div>
      <Particles />
      <div>
        <center>
          <img className={appStyles.headshot} src={headshot} alt="Headshot" style={{width: mobile ? '120px' : '140px',}} />
          <div className={appStyles.inline}>
          <h2><Typewriter
          options={{cursor: '', delay: 100, }}
            onInit={(typewriter) => {
              typewriter.typeString('Noah Nefsky')
                .start()
                .callFunction(() => {
                  console.log('Typing completed!');
                  typewriter.pause();
                  typewriter.stop();
                })
            }}
          /></h2>
          </div>
        </center>
      </div>
      <Toolbar />
      <div>
        <center>
          <div>
            <a rel="noreferrer" href="https://github.com/noahnefsky" className="fa" target="_blank">
              <IconButton className={appStyles.iconButtonBorder} aria-label="github">
                <FaGithub className={appStyles.iconButton} />
              </IconButton>
            </a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/noah-nefsky-586562205/" target="_blank">
              <IconButton className={appStyles.iconButtonBorder} aria-label="github">
                <FaLinkedin className={appStyles.iconButton} />
              </IconButton>
            </a>
            <a href="mailto:noahnefsky@gmail.com" className="connect" target="_blank" rel="noreferrer">
              <IconButton className={appStyles.iconButtonBorder} aria-label="github">
                <MdOutlineEmail className={appStyles.iconButton} />
              </IconButton>
            </a>
            <a rel="noreferrer" href={Resume} target="_blank">
              <IconButton className={appStyles.iconButtonBorder} aria-label="github">
                <IoDocumentText className={appStyles.iconButton} />
              </IconButton>
            </a>
          </div>
        </center>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default App;
