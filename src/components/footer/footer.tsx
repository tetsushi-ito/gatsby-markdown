import * as React from 'react';

// @ts-ignore
import styles from './footer.module.css';

export default class extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div className={styles.content}>
          My Blog
        </div>
      </div>
    );
  }
}
