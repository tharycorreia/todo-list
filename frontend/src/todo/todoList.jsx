import React from 'react'

export default props => {

    function maskData(data) {
        const ano = data.substring(0, 4)
        const mes = data.substring(5, 7)
        const dia = data.substring(8, 10)

        return `${dia}/${mes}/${ano}`
    }


    const renderRows = () => {
        const list = props.list || []
        return list.map((todo, index) =>
            <tr key={index}>
                <td className={todo.status ? 'done' : ''}>
                    {todo.title}</td>
                <td className={todo.status ? 'done' : ''}
                    >{todo.description}
                </td>
                <td>{maskData(todo.createdAt)}</td>
                <td>
                    {!todo.status &&
                        <button className='btn btn-success btn-table' onClick={() => props.handleCheck(todo)}>
                            <i className='fa fa-check' />
                        </button>
                    }
                    {todo.status &&
                        <button className='btn btn-warning btn-table'
                            onClick={() => props.handlePending(todo)}>
                            <i className='fa fa-undo' />
                        </button>
                    }
                    {/*<button className='btn btn-primary btn-table'
                        onClick={() => props.handleEdit(todo)}>
                        <i className='fa fa-edit' />
                </button>*/}
                    <button className='btn btn-danger btn-table'
                        onClick={() => props.handleRemove(todo)}>
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <table className='table' id="table-task">
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th className='tableActions'>Criado em</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}