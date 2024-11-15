import React, { useEffect, useState } from 'react'
import apiURL from '../api'
import { PagesList } from './PagesList';
import { Page, Pageview } from './Page';
export const App = () => {
  const [pages, setPages] = useState([])
  const [selectedPage, setSelectedPage] = useState(null);
  useEffect(() => {
    async function fetchPages () {
      try {
        const response = await fetch(`${apiURL}/wiki`)
        const pagesData = await response.json()
        setPages(pagesData)
      } catch (err) {
        console.log('Oh no an error! ', err)
      }
    }

    fetchPages()
  }, [])

  const handlePageClick = (Page) => {
    setSelectedPage(Page);

  };

  const handleBackToList = () => {
    setSelectedPage(null);
  };

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>
      {selectedPage ? (
        <div>
          <Page page={selectedPage} />
     <button onClick={handleBackToList}>Back to Wiki List</button>
        </div>
      ) : (
        <PagesList pages={pages} onPageClick={handlePageClick} />
      )}
    </main>
  );
};