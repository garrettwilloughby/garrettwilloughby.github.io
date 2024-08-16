import React from 'react';
import { IconGitHub, IconLinkedin } from '../../assets/icons/index';
import styles from './sidebar.module.css';

function Sidebar() {
  return (
    <div className={`d-flex flex-column justify-content-end align-items-center position-fixed min-vh-100 ${styles.svg}`}>
        <IconGitHub />
        <IconLinkedin />
    </div>
  );
}

export default Sidebar;