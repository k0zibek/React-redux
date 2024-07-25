import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import { asyncIncrementCreator, asyncDecrementCreator } from './store/countReducer';
import { fetchUsers } from './store/userReducer';

function App() {
	const count = useSelector((state) => state.countReducer.count);
	const users = useSelector((state) => state.userReducer.users);
	const dispatch = useDispatch();

	return (
		<div className='app'>
			<div style={{ fontSize: '5rem' }}>{count}</div>
			<div className={'btns'} style={{ display: 'flex' }}>
				<button className={'btn'} onClick={() => dispatch(asyncIncrementCreator())}>
					ИНКРЕМЕНТ++
				</button>
				<button className={'btn'} onClick={() => dispatch(asyncDecrementCreator())}>
					ДЕКРЕМЕНТ--
				</button>
				<button className={'btn'} onClick={() => dispatch(fetchUsers())}>
					Получить юзеров
				</button>
			</div>
			<div className='users'>
				{users.map((user) => (
					<div key={user.id} className={'user-list'}>
						{user.name}
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
