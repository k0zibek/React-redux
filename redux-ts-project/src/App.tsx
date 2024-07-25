import React from 'react';
import UserList from './components/UserList.tsx';
import './styles/App.css';
import TodoList from './components/TodoList.tsx';

const App: React.FC = () => {
	return (
		<div className='app'>
			<UserList />
			<hr className='line' />
			<TodoList />
		</div>
	);
};

export default App;
