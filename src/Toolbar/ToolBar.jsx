import { AppBar, Tab, Tabs } from '@material-ui/core';
import React, { useState } from 'react';
import AboutMe from '../AboutMe/AboutMe'; // Import your components
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';


const ToolbarTabs = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div> 
      <AppBar position='static' style={{backgroundColor: 'white', border: "1px solid #0644A3"}}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About Me" style={{color: '#0644A3', fontColor: '#0644A3'}}/>
          <Tab label="Skills" style={{color: '#0644A3', fontColor: '#0644A3'}}/>
          <Tab label="Experience" style={{color: '#0644A3', fontColor: '#0644A3'}}/>
          <Tab label="Projects" style={{color: '#0644A3', fontColor: '#0644A3'}}/>
        </Tabs>
      </AppBar>
      <div>
        {value === 0 && <AboutMe />}
        {value === 1 && <Skills />}
        {value === 2 && <Experience />}
        {value === 3 && <Projects />}
      </div>
    </div>
  );
};

export default ToolbarTabs;