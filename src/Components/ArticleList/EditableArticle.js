import React from 'react'

function EditableArticle({article, editFormData, handleEditChange}) {

    return (
        <tbody>
            <tr >
                <td className="table__item" >
                    <input type="text"
                        className="table__item-input"
                        required="required"
                        value= {editFormData.name}
                        name="name"
                        onChange={handleEditChange}
                        >
                    </input>
                </td>

                <td className="table__item" >

                    <input type="text"
                        className="table__item-input"
                        required="required"
                        value= {editFormData.surname}
                        name="surname"
                        onChange={handleEditChange}
                        >
                    </input>

                </td>
                <td className="table__item" >
                    <div className="table__item-inner">
                        <div>
                            <input 
                                className="table__item-input"
                                type="text"
                                required="required"
                                value= {editFormData.date}
                                name="date"
                                onChange={handleEditChange}
                                >
                            </input>
                        </div>
                    </div>

                </td>
                <td>
                    <button type="submit" className="btn btn-primary">Save</button>
                </td>
            </tr>
        </tbody>
    )
}

export default EditableArticle
