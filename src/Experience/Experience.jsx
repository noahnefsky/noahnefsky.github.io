import { Typography } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import React from 'react';
import Resume from '../resume.pdf';
import ExperienceButton from './ExperienceButton';

const Experience = () => {
    const pccTitle = "Software Engineer Co-op | PointClickCare, Mississauga";
    const pccSummary = `I was a part of a mobile development team and worked on a
        Flutter secure messaging application, an Android nursing application
        and won an AI-focused hackathon.`;

    const gmTitle = "Junior Software Developer | GrantMatch, Oakville";
    const gmSummary = `I worked on their web application built in Vue.js and Django,
        created web scrapers and used AI to automate form filling for grants.`;

    const twTitle = "Software Engineer Intern | Thoughtwire, Toronto";
    const twSummary = `I created a VSCode extension to automate common processes,
        increasing development and testing efficiency. I also fixed bugs on the backend of
        data collection application.`;

    const sbTitle = "Junior Software Engineer | Sparcblock, Toronto";
    const sbSummary = `I developed cloud integrations for accounting solutions
        and a Windows desktop application to authenticate and automatically update local
        accounting info.`;

    const squintTitle = "Software Engineer Intern | Squint AI, San Jose";
    const squintSummary = `I am working on a small team to build a React-Next.js web application.
        I am also leveraging LLMs and computer vision technqiues for video analysis to streamline factory training.`;


    return (
        <Stack direction="column" spacing={0} justifyItems='center' justifyContent={'center'} alignItems={'center'} style={{ marginTop: '2vh', marginBottom: '35px' }}>
            <ExperienceButton title={squintTitle} summary={squintSummary} />
            <ExperienceButton title={pccTitle} summary={pccSummary} />
            <ExperienceButton title={gmTitle} summary={gmSummary} />
            <ExperienceButton title={twTitle} summary={twSummary} />
            <ExperienceButton title={sbTitle} summary={sbSummary} />
            <br />
            <Typography variant="h2" style={{ fontSize: 16, textAlign: 'center' }}>
                For more information about my experiences, see my <a rel="noreferrer" href={Resume} target="_blank">résumé</a> below!
            </Typography>
        </Stack>
    );
}

export default Experience;
