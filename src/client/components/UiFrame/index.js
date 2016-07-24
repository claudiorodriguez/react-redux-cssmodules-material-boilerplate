import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles/index.scss';
import NavigationBar from '../NavigationBar';

function UiFrame({ children }) {
  return (
    <div>
      <NavigationBar />
      {children}
    </div>
  );
}

UiFrame.propTypes = {
  children: PropTypes.node
};

export default CSSModules(UiFrame, styles);
