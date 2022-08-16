import React from "react";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";

import { client } from "../../graphql/client";
import { Accordion } from "../../components/Accordion";

const REST_URI = "https://swapi.dev/api";

export const StarWars: React.FC = () => {
  // const { isError, data, error } = useFilms();

  const [movies, setMovies] = React.useState<any[]>([]);

  const fetchFilms = async () => {
    try {
      const data = await fetch(`${REST_URI}/films/`, {
        headers: {
          Accept: "application/json",
        },
        method: "GET",
      });

      const movies = await data.json();
      setMovies(movies.results);

      return movies;
    } catch (error) {
      console.log(error);
    }
  };


  return <Accordion onClick={() => fetchFilms()}/>;
};

// function useFilms() {
//   return useQuery(["getFilms"], async () => {
//     const data = await client.request(
//       gql`
//         query {
//           allFilms {
//             films {
//               id
//               title
//               planetConnection {
//                 planets {
//                   id
//                   name
//                 }
//               }
//             }
//           }
//         }
//       `
//     );
//     return data.allFilms;
//   });
// }