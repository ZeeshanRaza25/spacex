import gql from 'graphql-tag';

export const QUERY_LAUNCH_DETAILS = gql`
  query LaunchInfo($id: String){
    launch(id: $id) {
      flight_number
      details
      mission_name
      launch_success
      launch_year
      upcoming
      launch_date_local
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        rocket_type
      }
      links {
        video_link
        flickr_images
        article_link
        wikipedia
      }
    }
}`

