import { gql } from "@apollo/client";

export const GET_ANIMELIST = gql`
query ($page: Int, $perPage: Int, $isAdult: Boolean) {
  result: Page (page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    list: media (isAdult: $isAdult) {
      id
      coverImage {
        medium
      }
      title{
        romaji
      }
      description
      startDate {
        year
        month
        day
      }
      status
    }
  }
}
`;

export const GET_ANIMEDETAIL = gql`
query ($id: Int, $isAdult: Boolean) {
   Media (id: $id, isAdult: $isAdult) {
    id
    coverImage {
      medium
    }
    title{
      romaji
    }
    studios {
      edges {
        id,
        isMain,
        node {
          name
        } 
      }
    }
    duration
    updatedAt
    genres
    averageScore
    description
    episodes
    startDate {
      year
      month
      day
    }
    status
    reviews {
      edges {
        node {
          id
          rating
        }
      }
    }
  }
}
`;