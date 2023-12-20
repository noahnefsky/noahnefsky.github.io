import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import './Particles.css';

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <Particles
            init={particlesInit} loaded={particlesLoaded}
            id="tsparticles"
            options={{
                "background": {
                    "size": "cover"
                },
                "interactivity": {
                    detectsOn: "window",
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": "repulse",
                            "parallax": {
                                "force": 60
                            }
                        }
                    },
                    "modes": {
                        "bubble": {
                            "distance": 400,
                            "duration": 2,
                            "opacity": 0.8,
                            "size": 40
                        },
                        "grab": {
                            "distance": 400
                        }
                    }
                },
                "particles": {
                    "color": {
                        "value": "#0644A3"
                    },
                    "links": {
                        "color": {
                            "value": "#0644A3"
                        },
                        "distance": 150,
                        "enable": true,
                        "opacity": 0.4
                    },
                    "move": {
                        "attract": {
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "enable": true,
                        "outModes": {
                            "bottom": "out",
                            "left": "out",
                            "right": "out",
                            "top": "out"
                        }
                    },
                    "number": {
                        "density": {
                            "enable": true
                        },
                        "value": 30
                    },
                    "opacity": {
                        "value": 0.5,
                        "animation": {
                            "enable": true,
                            "minimumValue": 0.1,
                            "speed": 1
                        }
                    },
                    "shape": {
                        "options": {
                            "character": {
                                "value": [
                                    "\u26BE",
                                    "🎾",
                                    "{}",
                                    "for",
                                    "NYSE",
                                    "01",
                                    "10",
                                    "📈",
                                    "🏒",
                                ],
                                "font": "Verdana",
                                "style": "",
                                "weight": "400",
                                "fill": true
                            },
                            "char": {
                                "value": [
                                    "</>",
                                    "==",
                                    "{}",
                                    "!=",
                                    "&&",
                                    ";",
                                    "*",
                                    "()",
                                    "def",
                                    "for",
                                    "if"
                                ],
                                "font": "Verdana",
                                "style": "10",
                                "weight": "400",
                                "fill": true
                            }
                        },
                        "type": "char"
                    },
                    "size": {
                        "value": 10,
                        "animation": {
                            "minimumValue": 10,
                            "speed": 5
                        }
                    },
                    "stroke": {
                        "width": 1,
                        "color": {
                            "value": "#0644A3",
                            "animation": {
                                "enable": false,
                                "speed": 1,
                                "sync": true
                            }
                        }
                    }
                }
            }
            }
        />
    );
}

export default Particle