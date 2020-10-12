import React from 'react'
import { LaunchesQuery } from '../../generated/graphql';
import './style.css';
import { Layout, Menu } from 'antd';
const { Sider, Header } = Layout;

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <Header className="site-layout-background"
        style={{ textAlign: 'center', width: '100%', backgroundColor: 'white' }} >
        All Space X Launches
      </Header>
      <Sider
        width={300}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        {/* <div className="logo" /> */}
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          {
            !!data.launches && data.launches.map(
              (launch, i) => !!launch && (
                <Menu.Item key={i}>
                  {launch.mission_name} ({launch.launch_year})
                  {/* {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)}) */}
                </Menu.Item>
              )
            )
          }
        </Menu>
      </Sider>
    </Layout >
  )
}

export default Launch;