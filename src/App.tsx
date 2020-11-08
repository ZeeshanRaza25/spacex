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
        <Row>
          <Col span={24}>
            <Header
              style={{ position: 'relative', top: 0, textAlign: 'center', width: '100%', backgroundColor: 'white', fontSize: 18, fontWeight: 'bold' }} >
              <h4>
                SpaceX Launch Programs
              </h4>
            </Header>
          </Col>
        </Row>
        <Layout>
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>
              <Launch />
            </Col>
            <Content>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <LaunchDetails />
              </Col>
            </Content>
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