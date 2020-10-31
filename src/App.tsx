import React from 'react';
import './App.css';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import { Layout } from 'antd';
import { GlobalProvider } from './context/GlobalState';

// import { BrowserRouter as Router } from 'react-router-dom'

const { Content, Header, Footer } = Layout;

const App = () => {
  return (
    <GlobalProvider>
      <Layout className="site-layout">
        <Header className="site-layout-background"
          style={{ textAlign: 'center', width: '100%', backgroundColor: 'white' }} >
          All Space X Launches
          </Header>
        <Layout>
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <Launch />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
              <LaunchDetails />
            </div>
          </Content>
        </Layout>
        <Layout>
          <Footer
            style={{
              textAlign: 'center', bottom: 0, marginBottom: 0, fontSize: 20, fontWeight: 'bolder'
            }}>
            SpaceX ©2020 Created by Zeeshan Raza
          </Footer>
        </Layout>
      </Layout>
    </GlobalProvider>
  )
}

export default App;