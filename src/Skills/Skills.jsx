import { Card, CardContent, Typography, useMediaQuery } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { CplusplusOriginal, PythonOriginal, ReactOriginal, TypescriptOriginal, PytorchOriginal, NextjsOriginal, NodejsOriginal, FastapiOriginal } from 'devicons-react';
import React from 'react';
import { FaAws, FaBrain, FaPlug, FaProjectDiagram, FaRobot, FaSearch, FaServer, FaTools } from 'react-icons/fa';
import { GoGear } from 'react-icons/go';
import { PiFileSql } from "react-icons/pi";
import { useStyles } from '../Skills/SkillsStyles';




const Skills = () => {
    const classes = useStyles();

    const mobile = useMediaQuery('(max-width: 960px)');

    return (
        <div className={classes.container}>
            <center>
                <div container className={classes.background}>
                    <div style={{ marginBottom: '20px' }}>
                        <Stack direction={mobile ? 'column' : "row"} spacing={mobile ? 2 : 5}>
                            <Card variant="outlined" className={classes.cardContainer} style={{ height: mobile ? "auto" : '90px', width: mobile ? "auto" : '265px' }}>
                                <CardContent>
                                    <GoGear className={classes.icon} />
                                    <Typography className={classes.header} gutterBottom>
                                        Languages:
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack direction={mobile ? 'row' : "column"} spacing={1} justifyContent={'center'}>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3} sx={{ marginBottom: '10px' }}>
                                    <Chip className={classes.chipFont} icon={<PythonOriginal />} label="Python" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<TypescriptOriginal />} label="Typescript" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<CplusplusOriginal />} label="C++" variant="outlined" />
                                </Stack>
                            </Stack>
                        </Stack>
                        {mobile ? <br /> : null}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Stack direction={mobile ? 'column' : "row"} spacing={mobile ? 2 : 5}>
                            <Card variant="outlined" className={classes.cardContainer} style={{ height: mobile ? "auto" : '90px', width: mobile ? "auto" : '265px' }}>
                                <CardContent>
                                    <FaServer className={classes.icon} />
                                    <Typography className={classes.header} gutterBottom>
                                        Full-stack:
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack direction={mobile ? 'row' : "column"} spacing={1} justifyContent={'center'}>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3} sx={{ marginBottom: '10px' }}>
                                    <Chip className={classes.chipFont} icon={<ReactOriginal />} label="React" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<NextjsOriginal />} label="Next.js" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FastapiOriginal />} label="FastAPI" variant="outlined" />
                                </Stack>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3}>
                                    <Chip className={classes.chipFont} icon={<NodejsOriginal />} label="Node.js" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<PiFileSql />} label="SQL" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FaAws />} label="AWS" variant="outlined" />
                                </Stack>
                            </Stack>
                        </Stack>
                        {mobile ? <br /> : null}
                    </div>

                    <div>
                        <Stack direction={mobile ? 'column' : "row"} spacing={mobile ? 2 : 5}>
                            <Card variant="outlined" className={classes.cardContainer} style={{ height: mobile ? "auto" : '90px', width: mobile ? "auto" : '265px' }}>
                                <CardContent>
                                    <FaBrain className={classes.icon} />
                                    <Typography className={classes.header} gutterBottom>
                                        AI:
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack direction={mobile ? 'row' : "column"} spacing={1} justifyContent={'center'}>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3} sx={{ marginBottom: '10px' }}>
                                    <Chip className={classes.chipFont} icon={<FaSearch />} label="Information Retrieval" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FaProjectDiagram />} label="LangGraph" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FaRobot />} label="Claude Agent SDK" variant="outlined" />
                                </Stack>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3}>
                                    <Chip className={classes.chipFont} icon={<PytorchOriginal />} label="PyTorch" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FaTools />} label="Langsmith" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FaPlug />} label="MCP" variant="outlined" />
                                </Stack>
                            </Stack>
                        </Stack>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Skills;
