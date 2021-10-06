import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Particles from 'react-particles-js';
import * as S from './styles';

function Particle({ theme }) {
  return (
    <S.StyledParticle>
      <Particles
        width="100%"
        height={theme.windowHeight}
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
              color: '#ffffff',
              opacity: 0.03,
            },
            move: {
              enable: true,
              speed: 0.4,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'out',
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            size: {
              value: 1,
            },
            color: {
              value: '#ffffff',
            },
            opacity: {
              value: 0.7,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },

          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
	    retina_detect: true,
        }}
      />
    </S.StyledParticle>
  );
}
export default withTheme(Particle);

Particle.propTypes = {

};
