import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import {
  OrbitControls, Sky, Stars,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Physics, usePlane, useBox } from '@react-three/cannon';
import { Water } from './Water';
import * as S from './styles';

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

  let scene = new THREE.Scene();

  const water = new Water(
    waterGeometry,
    {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
    },
  );

  water.rotation.x = -Math.PI / 2;

  scene.add(water);

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <sphereBufferGeometry />
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="transparent" />
    </mesh>
  );
}

function WaterThreejs() {
  return (
    <S.StyledWaterThreejs>
      <Canvas>
        <OrbitControls />
        <Sky />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
    </S.StyledWaterThreejs>
  );
}
export default WaterThreejs;

WaterThreejs.propTypes = {

};
