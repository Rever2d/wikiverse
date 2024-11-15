import React from 'react'

export const Page = (props) => {
  return <div className='content'>
    <h3>{props.page.title}</h3>
    <p>{props.page.content}</p>

  </div>
}
export const Pageview = (props) => {
  return <>
      <h3>{props.page.title}</h3>
    <p>{props.page.content}</p>
  </>
}