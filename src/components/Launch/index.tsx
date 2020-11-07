import React from 'react'
import { useLaunchesQuery } from '../../generated/graphql'
import Launch from './Launch';
import { Skeleton } from 'antd';

const LaunchContainer = () => {
  const { data, error, loading } = useLaunchesQuery();

  if (loading) {
    return <>
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
      <Skeleton active />
    </>
  }

  if (error || !data) {
    return <div>there was an error</div>
  }

  return <Launch data={data} />
}

export default LaunchContainer;