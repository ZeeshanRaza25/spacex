import gql from "graphql-tag";

export const QUERY_LAUNCH = gql` 
query launches {
  launches {
    launch_year
    launch_success
    mission_name
    upcoming
    flight_number
  }
}`