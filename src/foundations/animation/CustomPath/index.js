import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useResize from '@U/hooks/useResize';
import * as d3 from 'd3';
import * as S from './styles';

function CustomPath() {
  const path = 'M10.362 18.996s-6.046 21.453 1.47 25.329c10.158 5.238 18.033-21.308 29.039-18.23 13.125 3.672 18.325 36.55 18.325 36.55l12.031-47.544';
  const height = 79.375;
  const width = 79.375;
  const [scaledPath, setScaledPath] = useState('M 10.364');
  const [windowWidth, windowHeight] = useResize();

  useEffect(() => {
    const container = document.querySelector('.result');
    const responsive = new Meanderer(height, path, width);
    setScaledPath(responsive.generatePath(container.offsetWidth, container.offsetHeight));
    container.style.setProperty('--path', `${scaledPath}`);
    d3.select('.result path').attr('d', scaledPath);
  }, [scaledPath, windowWidth, windowHeight]);

  return (
    <S.StyledCustomPath>
      <div className="result" style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <svg className="svg" style={{ position: 'absolute', width: '100%', height: '100%' }}>
          <path className="path" style={{ fill: 'none', stroke: '#f00', strokeWidth: '12' }} />
        </svg>
        <S.Element path={scaledPath} />
      </div>
    </S.StyledCustomPath>
  );
}
export default CustomPath;

class Meanderer {
  constructor(height, path, width, threshold = 0.2) {
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

  getRatios = (maxs, width, height) => [maxs[0] / width, maxs[1] / height];

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

  generatePath = (containerWidth, containerHeight) => {
    const OFFSETS = [0, 0];
    const newAspectRatio = containerWidth / containerHeight;
    if (Math.abs(newAspectRatio - this.aspect_ratio) > this.threshold) {
      if (this.width < this.height) {
        const ratio = (this.height - this.width) / this.height;
        OFFSETS[0] = (ratio * containerWidth) / 2;
      } else {
        const ratio = (this.width - this.height) / this.width;
        OFFSETS[1] = (ratio * containerHeight) / 2;
      }
    }

    const xScale = d3
      .scaleLinear()
      .domain([0, this.maximums[0]])
      .range([OFFSETS[0], containerWidth * this.range_ratios[0] - OFFSETS[0]]);
    const yScale = d3
      .scaleLinear()
      .domain([0, this.maximums[1]])
      .range([OFFSETS[1], containerHeight * this.range_ratios[1] - OFFSETS[1]]);

    const SCALED_POINTS = this.path_data.map(POINT => [
      xScale(POINT[0]), yScale(POINT[1]),
    ]);

    return d3.line()(SCALED_POINTS);
  }
}

CustomPath.propTypes = {

};
