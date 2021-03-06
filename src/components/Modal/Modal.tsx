import { Link, navigate } from 'gatsby';
import React, { FunctionComponent } from 'react';

import closeImg from '../../images/close.svg';
import styles from './Modal.module.scss';

export interface ModalProps {
  navigateTo?: string;
}

export const Modal: FunctionComponent<ModalProps> = ({ navigateTo = '/', children }) =>
  <div className={styles.background}
       onClick={(e) => (e.target === e.currentTarget) && navigate(navigateTo, { replace: true })}>
    <div className={styles.modal}>
      <Link className={styles.close} to={navigateTo} replace><img src={closeImg} alt="Fermer"/></Link>
      <div className={styles.content}>{children}</div>
    </div>
  </div>;
