import React from 'react'

function ReadOnlyArticle({ article, handleEditClick, handleDeleteClick }) {

    return (
        <tbody>
            <tr >
                <td className="table__item" >
                    {article.name}
                </td>

                <td className="table__item" >

                    {article.surname}

                </td>
                <td className="table__item" >
                    {article.date}
                </td>
                <td>
                    <button className="btn btn-danger" onClick={() => handleDeleteClick(article.id)}  >
                        Delete
                    </button>
                    <button className="btn btn-primary" onClick={(event) => handleEditClick(event, article)}>
                        Edit
                    </button>
                </td>
            </tr>
        </tbody>
    )
}

export default ReadOnlyArticle
