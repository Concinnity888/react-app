import React from 'react';
import Article from '../Article';
import './ArticleList.css';

export default function ArticleList ({ articles }) {
    const articleElements = articles.map(article => 
        <li key={article.id} className="article-list__item">
            <Article article={article} />
        </li>
    )

    return (
        <ul>
            {articleElements}
        </ul>
    );
}
