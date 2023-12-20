import { Card, CardContent, Typography, useMediaQuery } from '@material-ui/core';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { cardContents } from './CardContents';
import ProjectsCardStyles from './ProjectsCardsStyles';

const Projects = () => {
    const desktop = useMediaQuery('(min-width: 960px)');
    const source = "https://github.com/noahnefsky/Preesh-Rewards";
    const website = null;
    const classes2 = ProjectsCardStyles();

    const [link, setLink] = React.useState('linkTextBlack');
    const handleHover = (hover) => {
        if (hover) {
            setLink('linkTextWhite');
        } else {
            setLink('linkTextBlack');
        }
    };

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <center>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginTop: '2vh', width: desktop ? '50%' : '80%'}} variant="dark">
                {cardContents.map((card, cardIndex) => (
                    <Carousel.Item key={cardIndex} style={{ marginBottom: '40px', }}>
                        <Typography variant="h5" style={{ color: '#0644A3' }}>
                            <b>{card.title}</b><br />
                        </Typography>
                        <Typography variant="h2"  style={{ fontSize: 16}} component="p">
                            {card.details}<br /><br />
                        </Typography>
                        <div>
                            <Card onMouseEnter={() => handleHover(true)} onMouseLeave={() => handleHover(false)} className={classes2.root}>
                                <img
                                    style={{ maxWidth: '90%', maxHeight: desktop ? '370px' : '220px' }}
                                    src={card.header}
                                    alt="Animated GIF"
                                />

                                <CardContent className={classes2.cardContent}>
                                    <div className={classes2.linkContainer}>
                                        <div className={classes2.linkSpacing}>
                                            {source && (
                                                <a rel="noreferrer" target="_blank" href={source} style={{ textDecoration: "none" }}>
                                                    <Typography className={classes2[link]} display="inline">See Source Code&nbsp;</Typography>
                                                </a>
                                            )}
                                            {(source && website) && (
                                                <>
                                                    <Typography style={{ fontSize: "0.85rem" }} display="inline">|&nbsp;</Typography>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </center>
    );
};

export default Projects;