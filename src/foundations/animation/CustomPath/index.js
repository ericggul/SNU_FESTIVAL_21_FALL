import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useResize from '@U/hooks/useResize';

import BusSample from '@I/home/mobile/bus1.png';
import * as d3 from 'd3';
import * as S from './styles';

function CustomPath({ isMobile = false, busWidth = 50 }) {
  const MobilePath = 'M247 1C187 25 71.8001 94.2 91.0001 179C115 285 118.5 263.5 171 337C223.5 410.5 253 456.5 130.5 571C7.99986 685.5 165.5 812 190 838C214.5 864 302 957 142.5 1087.5C14.8999 1191.9 -4.33346 1208.33 1.99988 1203.5';
  const DesktopPath = 'M1697 1C1503.67 30.3333 1055.8 113.8 811 213C505 337 151 435 179 651C207 867 689 925 843 981C997 1037 1763 1277 1105 1579C447 1881 53 1867 1 1877';

  const initPath = isMobile ? MobilePath : DesktopPath;
  console.log(initPath);
  const height = 1205;
  const width = 248;
  const [scaledPath, setScaledPath] = useState(initPath);
  const [windowWidth, windowHeight] = useResize();

  console.log(scaledPath);
  useEffect(() => {
    const container = document.querySelector('.result');
    const responsive = isMobile ? new Meanderer(isMobile, height, MobilePath, width) : new Meanderer(isMobile, height, DesktopPath, width);

    setScaledPath(responsive.generatePath(container.offsetWidth));
    container.style.setProperty('--path', `${scaledPath}`);
    d3.select('.result path').attr('d', scaledPath);
  }, [windowWidth, windowHeight, isMobile]);

  return (
    <S.StyledCustomPath>
      <div className="result" style={{ position: 'relative', width: '100%', height: '300vh' }}>
        <svg
          className="svg"
          style={{
            position: 'absolute', width: '100%', height: '100%',
          }}
        >
          <path
            className="path"
            style={{
              fill: 'none', width: '100%', stroke: 'black', strokeWidth: '12',
            }}
          />
        </svg>
        <S.Element path={scaledPath} width={busWidth}>
          <S.BusObject src={BusSample} />
        </S.Element>
      </div>
    </S.StyledCustomPath>
  );
}
export default CustomPath;

class Meanderer {
  constructor(isMobile, height, path, width, threshold = 0.1) {
    this.isMobile = isMobile;
    this.height = height;
    this.path = path;
    this.threshold = threshold;
    this.width = width;
    this.aspect_ratio = width / height;
    this.path_data = this.convertPathToData(path);
    this.maximums = this.getMaximums(this.path_data);
    this.range_ratios = this.getRatios(this.maximums, width, height);
  }

  getMaximums = (data) => {
    const X_POINTS = data.map(point => point[0]);
    const Y_POINTS = data.map(point => point[1]);
    return [
      Math.max(...X_POINTS),
      Math.max(...Y_POINTS),
    ];
  }

  getRatios = (maxs, width, height) => [maxs[0] / width, maxs[0] / width];

  convertPathToData = (path) => {
    const svgContainer = document.createElement('div');
    svgContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg">
                        <path d="${path}"/>
                      </svg>`;
    const pathElement = svgContainer.querySelector('path');
    const DATA = [];
    for (let p = 0; p < pathElement.getTotalLength(); p++) {
      const { x, y } = pathElement.getPointAtLength(p);
      DATA.push([x, y]);
    }
    return DATA;
  }

  generatePath = (containerWidth) => {
    const OFFSETS = [0, 0];
    const newAspectRatio = 1;
    if (Math.abs(newAspectRatio - this.aspect_ratio) > this.threshold) {
      if (this.width < this.height) {
        const ratio = (this.height - this.width) / this.height;
        OFFSETS[0] = (ratio * containerWidth) / 2;
      } else {
        const ratio = (this.width - this.height) / this.width;
        OFFSETS[1] = (ratio * containerWidth) / 2;
      }
    }

    const xScale = d3
      .scaleLinear()
      .domain([0, this.maximums[0]])
      .range([0, containerWidth * this.range_ratios[0]]);

    let yScale;
    if (this.isMobile) {
      yScale = d3
        .scaleLinear()
        .domain([0, this.maximums[1]])
        .range([0, containerWidth * 4.8588 * this.range_ratios[0]]);
    } else {
      yScale = d3
        .scaleLinear()
        .domain([0, this.maximums[1]])
        .range([0, containerWidth * 1.106 * this.range_ratios[0]]);
    }

    const SCALED_POINTS = this.path_data.map(POINT => [
      xScale(POINT[0]), yScale(POINT[1]),
    ]);

    return d3.line()(SCALED_POINTS);
  }
}

CustomPath.propTypes = {

};
