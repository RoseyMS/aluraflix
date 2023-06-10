import { v4 as uuidv4 } from 'uuid';
import "./Table.css"
import React, { useContext, useState } from "react";
import { CategoryContext } from "../../App";


const Table = ({ onEdit, onDelete }) => {
    const { categories } = useContext(CategoryContext)

    return (
        <div className="table-container">
            <table className="category-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Color</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={uuidv4()}>
                            <td >{category.title}</td>
                            <td>{category.description}</td>
                            <td style={{ backgroundColor: category.color }}></td>
                            <td>
                                <button onClick={() => onEdit(category)}>Editar</button>
                            </td>
                            <td>
                                <button onClick={() => onDelete(category.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Table;
