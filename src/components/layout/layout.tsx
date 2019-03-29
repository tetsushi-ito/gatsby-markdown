import * as React from 'react';

// リセットCSS
import './bootstrap-reboot.css';

// @ts-ignore
import styles from './layout.module.css';

import Header from '../header/header';
import Footer from '../footer/footer';

export default class extends React.Component {

  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header />

        <div className={styles.content}>
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}
