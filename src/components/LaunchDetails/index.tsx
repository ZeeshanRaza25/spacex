import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';
import { Typography } from 'antd';
const { Title } = Typography;

const LaunchDetailsContainer = () => {
  const { data, error, loading } = useLaunchInfoQuery({ variables: { id: "13" } });
  if (loading) {
    return <Title level={2}>Data i loading</Title>
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