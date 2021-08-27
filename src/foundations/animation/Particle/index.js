import React from 'react';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';
import * as S from './styles';

function Particle() {
  return (
    <S.StyledParticle>
      <Particles
        params={{
          particles: {
            number: {
              value: 600,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              color: '#f42a3b',
              opacity: 0.04,
            },
            move: {
              direction: 'right',
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            color: {
              value: '#f42a3b',
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 1,
              },
            },
          },
          // interactivity: {
          //   events: {
          //     onclick: {
          //       enable: true,
          //       mode: 'push',
          //     },
          //   },
          //   modes: {
          //     push: {
          //       particles_nb: 1,
          //     },
          //   },
          // },
	    retina_detect: true,
        }}
      />
    </S.StyledParticle>
  );
}
export default Particle;

Particle.propTypes = {

};
