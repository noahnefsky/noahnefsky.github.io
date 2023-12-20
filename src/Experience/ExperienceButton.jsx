import { Button, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import { Alert, Collapse } from 'reactstrap';


const ExperienceButton = ({ title, summary }) => {
    const mobile = useMediaQuery('(max-width: 960px)');
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div style={{ margin: '5px', textAlign: mobile ? 'center' : 'left' }}>
                <Button
                    // variant="outlined"
                    color='primary'
                    onClick={toggle}
                    style={{ width: mobile ? '300px' : '600px', padding: '20px', backgroundColor: 'white', border: "1px solid #0644A3" }}
                >
                    {title}
                </Button>
                <Collapse horizontal isOpen={isOpen}>
                    <Alert
                        style={{
                            width: mobile ? '300px' : '600px',
                            height: '100%',
                            backgroundColor: 'white',
                        }}
                    >
                        <Typography style={{ color: '#0644A3', }}>
                            {summary}
                        </Typography>
                    </Alert>
                </Collapse>
        </div>
    )
}

export default ExperienceButton;