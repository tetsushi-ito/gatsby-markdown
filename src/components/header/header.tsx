import * as React from 'react';
import { Link } from 'gatsby';

// @ts-ignore
import styles from './header.module.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.content}>
          <Link to="/">My Blog</Link>
        </div>
      </div>
    );
  }
}
