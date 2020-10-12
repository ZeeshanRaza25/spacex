import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';

interface Props {
  data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  console.log(data)
  if (!data.launch) {
    return <div>Launch Unavailable</div>
  }

  return (
    <div className="LaunchDetails">
      <div className="LaunchDetailsStatus">
        <span>Flight {data.launch.flight_number}</span>
      </div>
      <h1>
        {data.launch.mission_name} - {data.launch.rocket?.rocket_name} in {data.launch.launch_year}
      </h1>
      <p>launch from {data.launch.launch_site?.site_name}</p>
      <p>{data.launch.details}</p>
      {
        !!data.launch.links && !!data.launch.links.flickr_images && (
          <div>
            {
              data.launch.links.flickr_images.map(image =>
                image ? <img key={image} src={image} alt={image} /> : null
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default LaunchDetails;