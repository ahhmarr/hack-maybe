import React from 'react';
const style = {
  position: 'absolute',
  backgroundColor: 'rgba(234,121,74,0.1)',
  width: '49vw',
  height: '90vh'
};
export const Prev = ({ handler }) => {
  return <div style={style} onClick={handler}></div>;
};
export const Next = ({ handler, extra = {} }) => {
  return (
    <div style={{ ...style, right: '0px', ...extra }} onClick={handler}></div>
  );
};
