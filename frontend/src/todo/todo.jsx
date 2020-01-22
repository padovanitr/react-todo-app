import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

export default props => (
    <div>
        <PageHeader name='Tasks' small='Register'></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)