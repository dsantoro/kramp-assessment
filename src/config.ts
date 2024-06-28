interface Config {
  baseUrl: string;
  ageApiUrl: string;
  lastPage: number;
}

export const config: Config = {
  baseUrl : "https://www.anapioficeandfire.com/api/characters",
  ageApiUrl: "https://api.agify.io",
  lastPage: 214
}