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

export const InsertTeam = gql`
    mutation MyMutation($objects: [mini_project_data_team_insert_input!] = {}) {
        insert_mini_project_data_team(objects: $objects) {
            returning {
                nama
                role
                instagram
                linkedin
                file_path
            }
        }
    }
`;

export const DeleteTeam = gql`
    mutation MyMutation($id: Int!){
        delete_mini_project_data_team_by_pk(id: $id){
            id
        }
    }
`

export const UpdateTeam = gql`
    mutation MyMutation($id: Int = 10, $file_path: String = "", $instagram: String = "", $linkedin: String = "", $nama: String = "", $role: String = "") {
        update_mini_project_data_team(where: {id: {_eq: $id}}, _set: {file_path: $file_path, instagram: $instagram, linkedin: $linkedin, nama: $nama, role: $role}) {
        returning {
            file_path
            id
            instagram
            linkedin
            nama
            role
        }
        }
    }
`;