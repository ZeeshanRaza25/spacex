import React, { useContext } from 'react'
import { LaunchesQuery } from '../../generated/graphql';
import './style.css';
import { Layout, Menu } from 'antd';
import { GlobalContext } from '../../context/GlobalState';

const { Sider } = Layout;

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  const { editTitle } = useContext(GlobalContext);
  // console.log(data)
  return (
    <>
      <Layout hasSider={true} style={{
        backgroundColor: 'white'
      }}>
        <Sider
          width={300}
          style={{
            overflow: 'auto',
            height: '79vh',
            position: 'fixed',
            left: 0,

          }}
        >
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <h3 style={{
              backgroundColor: 'white',
              textAlign: 'center',
              paddingTop: '12px',
            }}>Missions</h3>
            {
              !!data.launches && data.launches.map(
                (launch, i) => !!launch && (
                  <Menu.Item key={launch.flight_number}
                    onClick={() => editTitle(launch.flight_number)}
                  >
                    {launch.mission_name} ({launch.launch_year})
                    {/* {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)}) */}
                  </Menu.Item>
                )
              )
            }
          </Menu>
        </Sider>
      </Layout >
    </>
  )
}

export default Launch;