import React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import { Layout } from 'antd';

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="site-layout" style={{ marginLeft: 300 }}>
      {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
      <Launch />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <LaunchDetails />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center', bottom: 0, marginBottom: 0, fontSize: 20, fontWeight: 'bolder'
        }}>
        SpaceX ©2020 Created by Zeeshan Raza</Footer>
    </Layout>
  )
}

export default App;