import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import custom from '../template/custom.css'
import React from 'react'
import Todo from '../todo/todo'

export default props => (
    <div className='container'>
        <Todo />
    </div>
)