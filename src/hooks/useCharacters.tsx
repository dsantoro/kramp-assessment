import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { config } from "../config";
import { Character } from "../types";

const fetchCharacters = async (page: number) => {
  const res = await fetch(`${config.baseUrl}?page=${page}&pageSize=10`);
  const data = await res.json();
  return data;
};

// const fetchAge = async (name: string) => {
//   const res = await fetch(`${config.ageApiUrl}?name=${name}`);
//   const data = await res.json();
//   return data;
// };

export const useCharacters = (page: number, term: string) => {
  const { isPending, data, error } = useQuery<Character[]>({
    queryKey: ["characters", page],
    queryFn: async () => {
      return fetchCharacters(page);
    },
    placeholderData: keepPreviousData,
  });

  // implementation of fetching age for each character however since is a
  //paid API with a limit of few requests per day I will leave it commented
  // const dataWithAge = data?.map((character) => ({
  //   ...character,
  //   age: Promise.all([fetchAge(character.name)]),
  // }));

  const filteredData = data?.filter((character) =>
    character.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
  );

  return { isPending, data: filteredData, error };
};
