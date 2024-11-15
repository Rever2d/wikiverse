import React from 'react';
import { Page, Pageview } from './Page';

export const PagesList = ({ pages, onPageClick }) => {
  return (
    <div className="pages-list">
      {pages.map((page, idx) => (
        <div className="page" key={idx} onClick={() => onPageClick(page)}>
          <Page page={page} />
        </div>
      ))}
    </div>
  );
};