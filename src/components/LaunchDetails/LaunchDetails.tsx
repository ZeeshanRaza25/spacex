import React from 'react';
import { LaunchInfoQuery } from '../../generated/graphql';
import { Typography, Image } from 'antd';
import moment from "moment";

const { Title, Paragraph, Text } = Typography;

interface Props {
  data: LaunchInfoQuery
}

const LaunchDetails: React.FC<Props> = ({ data }) => {
  console.log(data.launch)
  if (!data.launch) {
    return <Title level={2}>Launch Unavailable</Title>
  }
  // site name
  // mission name
  // date
  // detail
  // status
  // wikipedia video 
  return (
    <div className="LaunchDetails" style={{
      // backgroundColor: 'red',
      margin: '10px',
      paddingLeft: '30px',
      marginBottom: '50px'
      
    }}>

      <Title level={5} style={{
        fontWeight: "bold"
      }}>{data.launch.launch_site?.site_name}</Title>
      <Title level={5} style={{
        fontWeight: "bold"
      }}>
        {data.launch.mission_name}
      </Title>
      <Title level={3}>
        {/* {data.launch.launch_date_local} */}
        {moment(data.launch?.launch_date_local).format(
          "MMMM Do, YYYY"
        )}
      </Title>
      {/* <Title level={4}>launch from {data.launch.launch_site?.site_name}</Title> */}
      <Paragraph>{data.launch.details}</Paragraph>
      <p style={{
        fontWeight: 'bold'
      }}>
        <span>Status: </span>{" "}
        <span>
          {data.launch.launch_success ? <Text type="success">"Successful"</Text> : <Text type="danger">"Failed"</Text>}
        </span>
      </p>
      <Title level={5}>
        <a
          href={`${data.launch.links?.wikipedia}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia{' '}
        </a>
        <a
          href={`${data.launch.links?.video_link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '} Video {' '}
        </a>
        <a
          href={`${data.launch.links?.article_link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '} Article
        </a>
      </Title>
      {
        !!data.launch.links && !!data.launch.links.flickr_images && (
          <div style={{
            marginTop: '30px',
            marginBottom: '75px'
          }}>
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