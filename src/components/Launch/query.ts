import gql from "graphql-tag";

export const QUERY_LAUNCH = gql` 
query launches {
  launches {
    launch_year
    launch_success
    mission_name
    upcoming
    flight_number
      mission_id
      details
      launch_site {
        site_name
      }

      launch_date_local

      links {
        video_link
        article_link
        wikipedia
        flickr_images
      }
  }
}`