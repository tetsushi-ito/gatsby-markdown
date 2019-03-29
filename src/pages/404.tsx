import * as React from 'react'
import SEO from '@src/components/seo';
import Layout from '@src/components/layout/layout'

export default class extends React.Component {

  render() {
    return (
      <Layout>
        <SEO title="404: Not found" />
        <h1>ページが見つかりません。</h1>
        <p>ご不便をおかけして申し訳ありません。</p>
      </Layout>
    );
  }
}
