import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import { Typography, Image } from 'antd';
const { Title, Paragraph } = Typography;

interface Props {
  data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  console.log(data)
  if (!data.launch) {
    return <Title level={2}>Launch Unavailable</Title>
  }

  return (
    <div className="LaunchDetails">
      <Title level={4}>Flight {data.launch.flight_number}</Title>
      <Title level={3}>
        {data.launch.mission_name} - {data.launch.rocket?.rocket_name} in {data.launch.launch_year}
      </Title>
      <Title level={4}>launch from {data.launch.launch_site?.site_name}</Title>
      <Paragraph>{data.launch.details}</Paragraph>
      {
        !!data.launch.links && !!data.launch.links.flickr_images && (
          <div>
            {
              data.launch.links.flickr_images.map(image =>
                image ? <Image style={{
                  margin: '10px',
                }} key={image} src={image} width={`40%`} alt={image} /> : null
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default LaunchDetails;