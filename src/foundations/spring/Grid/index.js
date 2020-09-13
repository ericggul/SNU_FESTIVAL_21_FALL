import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';
import { Transition, animated } from 'react-spring/renderprops';
import * as S from './styles';

const styles = {
  cell: {
    willChange: 'transform, width, height, opacity',
  },
};

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      open: undefined,
      lastOpen: undefined,
    };
  }

  componentDidUpdate() {
    this.clicked = false;
  }

  scrollOut = e => {
    const { lockScroll } = this.props;
    // const { open } = this.state;
    if (!lockScroll) {
      this.state.open && this.toggle(undefined);
      this.clicked = false;
    }
  }

  toggle = key => this.setState(
    state => ({
      lastOpen: state.open,
      open: state.open === key ? undefined : key,
    }),
    () => (this.clicked = true),
  )

  resize = (width, height, props) => this.setState({
    [width]: props.client.width,
    [height]: props.client.height,
  })

  resizeOuter = props => this.resize('widthOuter', 'heightOuter', props)

  resizeInner = props => this.resize('width', 'height', props)

  update = ({
    key, x, y, width, height,
  }) => {
    const open = this.state.open === key;
    return {
      opacity: this.state.open && !open ? 0 : 1,
      x: open ? this.outerRef.scrollLeft : x,
      y: open ? this.outerRef.scrollTop : y,
      width: open ? window.screen.width : (this.state.open ? 0 : width),
      height: open ? this.state.heightOuter : height,
    };
  }

  render() {
    const {
      children,
      columns,
      margin,
      impl,
      config,
      data,
      keys,
      heights,
      closeDelay,
      lockScroll,
      ...rest
    } = this.props;
    const { lastOpen, open, width } = this.state;
    const columnHeights = new Array(columns).fill(0);

    const displayData = data.map((child) => {
      const index = columnHeights.indexOf(Math.min(...columnHeights));
      const cellWidth = width / columns - margin / (1 - 1 / (columns + 1));
      const left = cellWidth * index;
      const offset = (index + 1) * margin;
      const top = columnHeights[index] + margin;
      const height = typeof heights === 'function' ? heights(child) : heights;
      columnHeights[index] += height + margin;
      return {
        x: margin ? left + offset : left,
        y: top,
        width: cellWidth,
        height,
        key: keys(child),
        object: child,
      };
    });
    let overflow;
    // const overflow = lockScroll ? (open ? 'hidden' : 'auto') : 'auto';
    if (lockScroll) {
      if (open) {
        overflow = 'hidden';
      } else { overflow = 'auto'; }
    } else { overflow = 'auto'; }
    const height = Math.max(...columnHeights) + margin;
    return (
      <Measure
        client
        innerRef={r => (this.outerRef = r)}
        onResize={this.resizeOuter}
        id="AAAMeasure"
      >
        {({ measureRef }) => (
          <S.OuterStyle
            id="AAOuter"
            ref={measureRef}
            overflow={overflow}
            style={{ ...this.props.style }}
            {...rest}
          >
            <Measure
              client
              innerRef={r => this.innerRef = r}
              onResize={this.resizeInner}
              id="AAAMeasure"
            >
              {({ measureRef }) => (
                <S.InnerStyle
                  id="AAAInner"
                  ref={measureRef}
                >
                  <Transition
                    native
                    items={displayData}
                    keys={d => d.key}
                    from={{ opacity: 0 }}
                    leave={{ opacity: 0 }}
                    enter={this.update}
                    update={this.update}
                    impl={impl}
                    config={{
                      ...config,
                      delay: this.clicked && !open ? closeDelay : 0,
                    }}
                  >
                    {(c, i) => ({
                      opacity, x, y, width, height,
                    }) => (
                      <animated.div
                        id="AAAA"
                        style={{
                          ...styles.cell,
                          opacity,
                          width,
                          margin: 'auto',
                          height,
                          zIndex:
                            lastOpen === c.key || open === c.key ? 1000 : i,
                        }}
                        children={children(c.object, open === c.key, () => this.toggle(c.key))}
                      />
                    )}
                  </Transition>
                </S.InnerStyle>
              )}
            </Measure>
          </S.OuterStyle>
        )}
      </Measure>
    );
  }
} export default Grid;

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  keys: PropTypes.func.isRequired,
  columns: PropTypes.number,
  margin: PropTypes.number,
  heights: PropTypes.oneOfType([PropTypes.func, PropTypes.number]),
  lockScroll: PropTypes.bool,
  closeDelay: PropTypes.number,
};

Grid.defaultProps = {
  columns: 3,
  margin: 0,
  heights: 400,
  lockScroll: false,
  closeDelay: 0,
};
