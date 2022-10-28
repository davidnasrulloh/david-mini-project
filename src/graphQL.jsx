import { gql } from "@apollo/client";

export const SubscriptionTeams = gql`
    subscription MySubscription {
        mini_project_data_team {
            id
            nama
            role
            instagram
            linkedin
            file_path
        }
    }  
`;

export const GetAllDataTeam = gql`
    query MyQuery {
        mini_project_data_team {
            id
            nama
            role
            instagram
            linkedin
            file_path
        }
    }  
`;