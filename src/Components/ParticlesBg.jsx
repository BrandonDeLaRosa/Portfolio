import Particles from 'react-tsparticles'
import particlesConfig from './config/particlesConfig';

const ParticlesBg = () => {
    return (
            <Particles params={particlesConfig} ></Particles>
    );
};

export default ParticlesBg;