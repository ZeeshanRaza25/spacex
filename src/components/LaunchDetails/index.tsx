import React, { useContext } from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';
import { Typography } from 'antd';
import { GlobalContext } from '../../context/GlobalState';
import { Skeleton } from 'antd';

const { Title } = Typography;

const LaunchDetailsContainer = () => {
  const { flightNumber } = useContext(GlobalContext);
  console.log("LaunchDetail index.tsx", flightNumber);

  const { data, error, loading } = useLaunchInfoQuery({ variables: { id: flightNumber.toString() } });
  if (loading) {
    return <>
      <Skeleton active />
      <Skeleton active />
    </>
  }

  if (error) {
    return <Title level={2}>there was an error </Title>
  }

  if (!data) {
    return <Title level={2}>Please select  mission for it's detail</Title>
  }

  return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer;