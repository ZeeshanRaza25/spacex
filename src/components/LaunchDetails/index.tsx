import React from 'react';
import { useLaunchInfoQuery } from '../../generated/graphql';
import LaunchDetails from './LaunchDetails';

const LaunchDetailsContainer = () => {
  const { data, error, loading } = useLaunchInfoQuery({ variables: { id: "13" } });
  if (loading) {
    return <div>Data i loading</div>
  }

  if (error) {
  return <div>there was an error </div>
  }

  if (!data) {
    return <div>Please select  mission for it's detail</div>
  }

  return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer;