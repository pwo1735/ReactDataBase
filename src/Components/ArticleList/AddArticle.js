import React, {useState} from 'react'
import {nanoid} from 'nanoid'
function AddArticle({articles, setArticles}) {
    const [addFormData, setAddFormData] = useState ({
        name: "",
        date: "",
        surname: ""
    })
    const submitHandler = (event) => {
        event.preventDefault()
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value
        const newFormData = {...addFormData}
        newFormData[fieldName] = fieldValue
        setAddFormData(newFormData)
       
    }
    const addArticle = (event) => {
        event.preventDefault()
        const newArticle = {
            id: nanoid(),
            name: addFormData.name,
            surname: addFormData.surname,
            date: addFormData.date
        }
        const newArticles = [...articles, newArticle]
        
            fetch('http://178.128.196.163:3000/api/records', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({data: {
                    id: nanoid(),
                    name: addFormData.name,
                    surname: addFormData.surname,
                    date: addFormData.date}})
               }).then (setArticles(newArticles))
    }
    return (
        <form className="add-article" style = {{marginBottom: '50px'}} onSubmit={addArticle}>
            <input type="text" name="name" className="add-article__input" placeholder="Enter a name" onChange={submitHandler}/>
            <input type="text" name="surname" className="add-article__input" placeholder="Enter a surname" onChange={submitHandler}/>    
            <input type="text" name="date" className="add-article__input" placeholder="Enter a date" onChange={submitHandler}/>
            <button className="btn btn-primary" type = 'submit'>Add</button>
        </form>
    )
}
export default AddArticle