import React, { Fragment, useState } from 'react'
import EditableArticle from './EditableArticle'
import ReadOnlyArticle from './ReadOnlyArticle'
import './style.css'

export default function ArticleList({ articles, setArticles }) {
    const [editArticleId, setEditArticleId] = useState(null)
    const [editFormData, setEditFormData] = useState({
        name: "",
        surname: "",
        date: ""
    })

    const handleEditChange = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = { ...editFormData }
        newFormData[fieldName] = fieldValue
        setEditFormData(newFormData)
    }

    const handleEditClick = (event, article) => {
        event.preventDefault()
        setEditArticleId(article.id)
        const formValues = {
            name: article.name,
            surname: article.surname,
            date: article.date

        }
        setEditFormData(formValues)
    }

    const handleEditSubmit = (event) => {
        event.preventDefault()
        const editedArticle = {
            id: editArticleId,
            name: editFormData.name,
            surname: editFormData.surname,
            date: editFormData.date
        }
        const newArticles = [...articles]
        const index = articles.findIndex((article) => article.id === editArticleId)
        newArticles[index] = editedArticle
        fetch('http://178.128.196.163:3000/api/records/' + editArticleId, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data: {
                name: editFormData.name,
                surname: editFormData.surname,
                date: editFormData.date
            }})
           })
           .then (setArticles(newArticles))
           .then (setEditArticleId(null))
    }

    const handleDeleteClick =(articleId) => {
        const newArticles = [...articles]
        const index = articles.findIndex((article) => article.id === articleId)
        newArticles.splice(index, 1)
        fetch('http://178.128.196.163:3000/api/records/' + articleId, {
            method: 'DELETE'
           }).then(setArticles(newArticles))
    }
    
    const articleElements = articles.map(
        (article) => (
            <Fragment>
                {editArticleId === article.id ? (
                    <EditableArticle article={article} key={article.id} editFormData={editFormData} handleEditChange={handleEditChange} />
                ) : (
                    <ReadOnlyArticle article={article} key={article.id} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                )}
            </Fragment>
        )
    )

    return (
        <form onSubmit={handleEditSubmit}>

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {articleElements}
            </table>
        </form>
    )
}