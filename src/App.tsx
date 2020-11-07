import React from 'react';
import './App.css';
import Launch from './components/Launch/index';
import LaunchDetails from './components/LaunchDetails';
import { Layout } from 'antd';
import { GlobalProvider } from './context/GlobalState';
import { Row, Col } from 'antd';

const { Content, Header, Footer } = Layout;

const App = () => {
  return (
    <GlobalProvider>
      <Layout className="site-layout">
        <Header
          style={{ position: 'relative', top: 0, textAlign: 'center', width: '100%', backgroundColor: 'white', fontSize: 20, fontWeight: 'bold' }} >
          <h1>
            SpaceX Launch Programs
          </h1>
        </Header>
        <Layout>
          <Row>
            <Col xs={24} sm={6} md={6} lg={6} xl={6}>
              <Launch />
            </Col>
            <Col xs={24} sm={18} md={18} lg={18} xl={18}>
              <Content>
                <LaunchDetails />
              </Content>
            </Col>
          </Row>
        </Layout>
        <Footer
          style={{
            textAlign: 'center', position: 'fixed', bottom: 0, fontSize: 20, fontWeight: 'bold', width: '100%', height: '75px'
          }}>
          SpaceX ©2020 Created by Zeeshan Raza
          </Footer>
      </Layout>
    </GlobalProvider>
  )
}

export default App;