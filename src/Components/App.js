import React, { useState, useEffect } from 'react'
import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'
import AddArticle from './ArticleList/AddArticle'
function App() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://178.128.196.163:3000/api/records')
            .then(response => response.json())
            .then(articles => setArticles(articles.map((article) => ({
                name: article.data.name,
                surname: article.data.surname,
                date: article.data.date,
                id: article._id
            })
            )))
    }, [])



    return (
        <div className='container'>
            <h1 className='display-3'>
                DataBase
            </h1>
            <AddArticle articles={articles} setArticles={setArticles} />
            <ArticleList articles={articles} setArticles={setArticles} />
        </div>
    )
}

export default App