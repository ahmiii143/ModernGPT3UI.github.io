import React from 'react'
import './article.css'

const Article = ({imgURL , date , title }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgURL} alt='blogImage'/>
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Articles</p>
      </div>

    </div>
  )
}

export default Article