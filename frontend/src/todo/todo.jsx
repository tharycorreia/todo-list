import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            list: [],
            status: '',
            description: '',
            visible : false
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handlePending = this.handlePending.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)

        this.refresh()
    }

    handleAdd() {
        const title = this.state.title
        const description = this.state.description
        axios.post(URL, { title, description })
            .then(resp => this.refresh())
    }

     handleEdit(todo) {
        console.log('todo', todo)
        this.setState({...this.state, visible: true})
        /*axios.put(`${URL}/${todo._id}`, { ...todo, title: 'teste tchetch' })
            .then(resp => this.refresh(this.state.title))*/
    }

    handleChangeTitle(e) {
        this.setState({ ...this.state, title: e.target.value })
    }

    handleChangeDescription(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    refresh(title = '') {
        const search = title ? `&title__regex=/${title}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({ ...this.state, title, list: resp.data, description: '' }))
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.title))
    }

    handleCheck(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, status: true })
            .then(resp => this.refresh(this.state.title))
    }

    handlePending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, status: false })
            .then(resp => this.refresh(this.state.title))
    }

    handleSearch() {
        this.refresh(this.state.title)
    }

    handleClear() {
        this.refresh('')
    }

    render() {
        return (
            <div>
                <PageHeader name='LISTA DE TAREFAS' />
                <TodoForm title={this.state.title}
                    handleAdd={this.handleAdd} handleChangeTitle={this.handleChangeTitle}
                    handleChangeDescription={this.handleChangeDescription}
                    handleSearch={this.handleSearch} handleClear={this.handleClear} />
                <TodoList list={this.state.list} handleCheck={this.handleCheck}
                    handlePending={this.handlePending} handleRemove={this.handleRemove}
                    handleEdit={this.handleEdit} openModal={this.openModal} />
            </div>
        )
    }

}



