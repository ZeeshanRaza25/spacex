import React, { useContext } from 'react'
import { LaunchesQuery } from '../../generated/graphql';
import './style.css';
import { Layout, Menu } from 'antd';
import { GlobalContext } from '../../context/GlobalState';

// import { Link } from 'react-router-dom';
// import LaunchDetails from '../LaunchDetails/index';
const { Sider } = Layout;

interface Props {
  data: LaunchesQuery;
}

const Launch: React.FC<Props> = ({ data }) => {
  const { editTitle } = useContext(GlobalContext);

  // const [flightNumber, setflightNumber] = useState(1);
  // console.log(data)
  return (
    <Layout>
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
                  // <Link to={`/launch/${launch.flight_number}`}>
                  <Menu.Item key={launch.flight_number}
                    onClick={() => editTitle(launch.flight_number)}
                  >
                    {launch.mission_name} ({launch.launch_year})
                    {/* {launch.mission_name} - {launch.launch_year} ({JSON.stringify(launch.launch_success)}) */}
                  </Menu.Item>
                  // </Link>
                )
              )
            }
          </Menu>
        </Sider>
    </Layout >
  )
}

export default Launch;