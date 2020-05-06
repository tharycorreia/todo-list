import React from 'react'

export default props => (
    <div role='form' className='todoForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='title' className='form-control input' placeholder='Título'
                onChange={props.handleChangeTitle} value={props.title} required/>
            <textarea id='description' className='form-control input'
                onChange={props.handleChangeDescription} rows='3' placeholder='Descrição' />
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary btn-form' onClick={props.handleAdd}>
                <i className='fa fa-plus icon'></i>Adicionar
            </button>
            <button className='btn btn-info btn-form' onClick={props.handleSearch}>
                <i className='fa fa-search icon'></i>Pesquisar
            </button>
            <button className='btn btn-default btn-form' onClick={props.handleClear}>
                <i className='fa fa-close icon'></i>Limpar
            </button>
        </div>
    </div>
)