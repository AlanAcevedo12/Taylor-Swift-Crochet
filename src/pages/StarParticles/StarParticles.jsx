import React, { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const StarParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            await loadFull(engine);
            //   await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Particles Loaded
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={init}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent", // Color de fondo
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: false,
                        },
                        resize: false,
                    },

                },
                particles: {

                    color: {
                        value: "#ffffff", // Color de las partículas
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                        trails: {
                            enable: true,
                            length: 10, // Longitud del rastro
                            opacity: 1, // Opacidad del rastro
                            color: {
                                value: "#ffffff", // Color del rastro
                            },
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 150,
                    },
                    opacity: {
                        value: { min: 0.1, max: 1 }, // Opacidad variable para simular parpadeo
                        animation: {
                            enable: true,
                            speed: 2, // Velocidad del parpadeo
                            sync: false, // Los parpadeos no están sincronizados
                        },
                    },
                    shape: {
                        type: "star", // Forma de las partículas
                        options: {
                            star: {
                                sides: 5, // Número de lados de la estrella
                            },
                        },
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                // detectRetina: true,
            }}
        />
    );
};

export default StarParticles;