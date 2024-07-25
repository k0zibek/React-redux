import React, { useEffect } from 'react';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {
	const { page, error, loading, todos, limit } = useTypeSelector((state) => state.todo);
	const { fetchTodos, setTodoPage } = useActions();
	const pages = [1, 2, 3, 4, 5];

	useEffect(() => {
		fetchTodos(page, limit);
	}, [page]);

	if (loading) {
		return <h1>Идет загрузка...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}

	return (
		<div className='todos-list-container'>
			{todos.map((todo) => (
				<div key={todo.id} className='todo-list'>
					{todo.id} - {todo.title}
				</div>
			))}
			<div className='pages-container'>
				{pages.map((p) => (
					<div
						onClick={() => setTodoPage(p)}
						className='page-number'
						style={{
							backgroundColor: p === page ? 'white' : 'black',
							color: p === page ? 'black' : 'white',
						}}
					>
						{p}
					</div>
				))}
			</div>
		</div>
	);
};

export default TodoList;
