import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';
import TodoListProvider from '../context/TodoListProvider';

describe('Tests of whatTodo', () => {
	it('should display all the form buttons', () => {
		render(<TodoListProvider><App /></TodoListProvider>)
		expect(screen.getByRole('textbox')).toBeDefined()
		expect(screen.getByTitle(/Date input/i)).toBeDefined()
		expect(screen.getByRole('img', {  name: /save task button\./i})).toBeDefined()
		expect(screen.getByRole('img', {  name: /clear all tasks button\./i})).toBeDefined()
		expect(screen.getByRole('img', {  name: /about button\./i})).toBeDefined()
		expect(screen.getByRole('img', {  name: /toggle light\/dark mode\./i})).toBeDefined()
	})

	it('should start with the save task button disabled', () => {
		render(<TodoListProvider><App /></TodoListProvider>)
		expect(screen.getByRole('button', {  name: /save task button\./i})).toBeDisabled();
		const taskInput = screen.getByRole('textbox')
		userEvent.type(taskInput, 'Pay the bills')
		expect(screen.getByRole('button', {  name: /save task button\./i})).not.toBeDisabled()
	})

	it('should display the delete confimation buttons', () => {
		render(<TodoListProvider><App /></TodoListProvider>)
		const deleteTasksBtn = screen.getByRole('img', {  name: /clear all tasks button\./i})
		userEvent.click(deleteTasksBtn)
		expect(screen.getByRole('img', {  name: /confirm clear all tasks button\./i})).toBeDefined()
		expect(screen.getByRole('img', {  name: /cancel clear all tasks button\./i})).toBeDefined()
	})

	it('should be possible to add new tasks', () => {
		render(<TodoListProvider><App /></TodoListProvider>)
		const taskInput = screen.getByRole('textbox')
		const saveTaskBtn = screen.getByRole('img', {  name: /save task button\./i})
		userEvent.type(taskInput, 'Pay the bills')
		userEvent.click(saveTaskBtn)
		userEvent.type(taskInput, 'Buy some milk')
		userEvent.click(saveTaskBtn)
		userEvent.type(taskInput, 'Clean the house')
		userEvent.click(saveTaskBtn)
		expect(screen.getByText(/pay the bills/i)).toBeDefined();
		expect(screen.getByText(/buy some milk/i)).toBeDefined();
		expect(screen.getByText(/clean the house/i)).toBeDefined();
	})

	it('should exist edit task buttons for every task', () => {
		render(<TodoListProvider><App /></TodoListProvider>)
		expect(screen.getAllByAltText('Move task up button.')).toHaveLength(3)
		expect(screen.getAllByAltText('Move task down button.')).toHaveLength(3)
		expect(screen.getAllByAltText('Edit task button.')).toHaveLength(3)
		expect(screen.getAllByAltText('Mark as compleat task button.')).toHaveLength(3)
		expect(screen.getAllByAltText('delete task button.')).toHaveLength(3)
	})
})