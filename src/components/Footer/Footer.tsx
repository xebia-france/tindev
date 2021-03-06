import {Link} from "gatsby";
import React, { FunctionComponent } from 'react';

import arrowImage from '../../images/footer-arrow.svg';
import darkPsImage from '../../images/ps-black.svg';
import lightPsImage from '../../images/ps-white.svg';
import styles from './Footer.module.scss';

export interface FooterProps {
  withBackground?: boolean;
  withArrow?: boolean;
}

export const Footer: FunctionComponent<FooterProps> = ({ withBackground = false, withArrow= false }) => {
  const className = `${styles.footer} ${withBackground ? styles.footerBackground : ''} ${withArrow ? styles.footerArrow : ''}`;

  const arrow = withArrow && (
    <div className={styles.arrowContainer}>
      <div className={styles.arrowText}>Qui sommes-nous ?</div>
      <img className={styles.arrowImage} src={arrowImage} alt=""/>
    </div>
  );

  return (
    <div className={className}>
      <Link to="/about" className={styles.link}>
        <img src={withBackground ? lightPsImage : darkPsImage} height="28" alt="logo publicis sapient"/>
      </Link>
      {arrow}
    </div>
  );
}
