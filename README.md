# Kramp Assessment

I created the project using Vite, React as was mandatory, as it was a small and simple project I chose to use regular CSS and, as it was not specified in the test, I did not use graphql, because time was short and also because the endpoint itself was not it was grapqhql I didn't want to take longer than expected (5 hours).
But if I had to adapt the endpoint to use graphql I would create a server using Apollo and return a graphql endpoint however I still believe that was out of the scope of this assessment.

Talking about API calls I chose to use React Query to help dealing with caching and make the project more performatic, achieving perfect score on Lighthouse performance check tool.

In the assessment it was expected that I would consume the agefy.io API to guess the age of each character but as it is a paid API and with a very small daily limit I chose not to add it however the code is done and is commented within the useCharacters hook.

I have deployed the project under this url:

[Assessment](https://kramp-assessment.vercel.app/)

## Instalation

This app is powered by Vite JS and run it is pretty straightforward:

```bash
   npm run dev
```

By default it will running on port 5173
