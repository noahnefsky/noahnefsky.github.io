import { Card, CardContent, Typography, useMediaQuery } from '@material-ui/core';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { AndroidOriginal, BootstrapOriginal, CplusplusOriginal, DartOriginal, DjangoPlain, ReduxOriginal, FirebasePlain, FlutterOriginal, JavaOriginal, JavascriptOriginal, KotlinPlain, LinuxOriginal, PythonOriginal, ReactOriginal, SequelizeOriginal, SpringOriginal, TypescriptOriginal, VuejsOriginal, PytorchOriginal, NumpyOriginal, OpencvOriginal, NextjsOriginal, NodejsOriginal } from 'devicons-react';
import React from 'react';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { FaDatabase } from 'react-icons/fa';
import { GiBreakingChain } from "react-icons/gi";
import { GoGear } from 'react-icons/go';
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
                                        Programming languages:
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack direction={mobile ? 'row' : "column"} spacing={1} justifyContent={'center'}>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3} sx={{ marginBottom: '10px' }}>
                                    <Chip className={classes.chipFont} icon={<PythonOriginal />} label="Python" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<CplusplusOriginal />} label="C++" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<JavascriptOriginal />} label="Javascript" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<KotlinPlain />} label="Kotlin" variant="outlined" />
                                </Stack>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3}>
                                    <Chip className={classes.chipFont} icon={<SequelizeOriginal />} label="SQL" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<DartOriginal />} label="Dart" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<JavaOriginal />} label="Java" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<TypescriptOriginal />} label="Typescript" variant="outlined" />
                                </Stack>
                            </Stack>
                        </Stack>
                        {mobile ? <br /> : null}
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <Stack direction={mobile ? 'column' : "row"} spacing={mobile ? 2 : 5}>
                            <Card variant="outlined" className={classes.cardContainer} style={{ height: mobile ? "auto" : '90px', width: mobile ? "auto" : '265px' }}>
                                <CardContent>
                                    <AiOutlineAntDesign className={classes.icon} />
                                    <Typography className={classes.header} gutterBottom>
                                        Frontend and Mobile:
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack direction={mobile ? 'row' : "column"} spacing={1} justifyContent={'center'}>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3} sx={{ marginBottom: '10px' }}>
                                    <Chip className={classes.chipFont} icon={<ReactOriginal />} label="React" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<ReactOriginal />} label="React Native" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<NextjsOriginal />} label="Nextjs" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<FlutterOriginal />} label="Flutter" variant="outlined" />
                                </Stack>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3}>
                                    <Chip className={classes.chipFont} icon={<AndroidOriginal />} label="Android" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<ReduxOriginal />} label="Redux" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<VuejsOriginal />} label="Vue.js" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<BootstrapOriginal />} label="Bootstrap" variant="outlined" />
                                </Stack>
                            </Stack>
                        </Stack>
                        {mobile ? <br /> : null}
                    </div>

                    <div >
                        <Stack direction={mobile ? 'column' : "row"} spacing={mobile ? 2 : 5}>
                            <Card variant="outlined" className={classes.cardContainer} style={{ height: mobile ? "auto" : '90px', width: mobile ? "auto" : '265px' }}>
                                <CardContent>
                                    <FaDatabase className={classes.icon} />
                                    <Typography className={classes.header} gutterBottom>
                                        Backend and other tools:
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Stack direction={mobile ? 'row' : "column"} spacing={1} justifyContent={'center'}>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3} sx={{ marginBottom: '10px' }}>
                                    <Chip className={classes.chipFont} icon={<FirebasePlain />} label="Firebase" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<SpringOriginal />} label="Spring Boot" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<DjangoPlain />} label="Django" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<NodejsOriginal />} label="Node.js" variant="outlined" />
                                </Stack>
                                <Stack direction={mobile ? 'column' : "row"} spacing={3}>
                                    <Chip className={classes.chipFont} icon={<PytorchOriginal />} label="PyTorch" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<NumpyOriginal />} label="Numpy" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<GiBreakingChain />} label="Langchain" variant="outlined" />
                                    <Chip className={classes.chipFont} icon={<LinuxOriginal />} label="Linux" variant="outlined" />
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
