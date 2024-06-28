import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { useCharacters } from "./hooks/useCharacters";
import { Character } from "./types";
import { config } from "./config";

import { Layout } from "./components/Layout";
import { Search } from "./components/Search";
import { Skeleton } from "./components/Skeleton";
import { Button } from "./components/Button";

function App() {
  const [page, setPage] = useState(2);
  const [term, setTerm] = useState("");
  const [sort, setSort] = useState({ keyToSort: "name", order: "asc" });
  const { data, isPending } = useCharacters(page, term);

  console.log(data);

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSearch = (term: string) => {
    setTerm(term);
  };

  const handleHeaderClick = (key: string, direction: string) => {
    setSort({ keyToSort: key, order: direction === "asc" ? "desc" : "asc" });
  };

  const getSortedData = () => {
    if (data) {
      return data.sort((a, b) => {
        if (sort.order === "asc") {
          // eslint-disable-next-line
          // @ts-ignore
          return a[sort.keyToSort].localeCompare(b[sort.keyToSort]);
        } else {
          // eslint-disable-next-line
          // @ts-ignore
          return b[sort.keyToSort].localeCompare(a[sort.keyToSort]);
        }
      });
    }
    return data;
  };

  return (
    <Layout>
      <h1>Welcome to Kramp Assessment Game of Thrones Characters</h1>
      <div className="upper">
        Search by name:
        <Search
          className="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="grid">
        <div
          className="header sortable"
          aria-roledescription="button"
          onClick={() => handleHeaderClick("name", sort.order)}
        >
          <span>Name</span>
          <FaSort />
        </div>
        <div
          className="header sortable"
          aria-roledescription="button"
          onClick={() => handleHeaderClick("gender", sort.order)}
        >
          <span>Gender</span>
          <FaSort />
        </div>
        <div className="header">Culture</div>
        <div
          className="header sortable"
          aria-roledescription="button"
          onClick={() => handleHeaderClick("born", sort.order)}
        >
          <span>Born</span>
          <FaSort />
        </div>
        <div className="header">Titles</div>

        {isPending
          ? Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} style={{ height: "40px" }} />
            ))
          : getSortedData()?.map((character: Character) => (
              <React.Fragment key={character.url}>
                <div>{character.name}</div>
                <div>{character.gender}</div>
                <div>{character.culture}</div>
                <div>{character.born}</div>
                <div>{character.titles.join(", ")}</div>
              </React.Fragment>
            ))}
      </div>

      <div className="lower">
        {page > 2 ? (
          <Button
            className="button"
            onClick={() => setPage((page) => (page === 1 ? 1 : page - 1))}
          >
            Previous
          </Button>
        ) : (
          <div />
        )}
        {page < config.lastPage ? (
          <Button
            className="button"
            onClick={() => {
              setPage((page) =>
                page === config.lastPage ? config.lastPage : page + 1
              );
              scrolltoTop();
            }}
          >
            Next
          </Button>
        ) : (
          <div />
        )}
      </div>
    </Layout>
  );
}

export default App;
