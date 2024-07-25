import { useDispatch, useSelector } from 'react-redux';
import './styles/App.css';
import { addCustomerAction, removeCustomerAction } from './store/cusotmerReducer';
import { fetchCustomers } from './asynActions/customer';

function App() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);
	const customers = useSelector((state) => state.customers.customers);

	const addCash = (cash) => {
		dispatch({ type: 'ADD_CASH', payload: cash });
	};

	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash });
	};

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		};
		dispatch(addCustomerAction(customer));
	};

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id));
	};

	return (
		<div className={'app'}>
			<div style={{ fontSize: '5rem' }}>{cash}</div>
			<div style={{ display: 'flex' }}>
				<button className={'btn'} onClick={() => addCash(Number(prompt()))}>
					Пополнить счет
				</button>
				<button className={'btn'} onClick={() => getCash(Number(prompt()))}>
					Снят со счета
				</button>
				<button className={'btn'} onClick={() => addCustomer(prompt())}>
					Добавить клиента
				</button>
				<button className={'btn'} onClick={() => dispatch(fetchCustomers())}>
					Получить клиентов из базы
				</button>
			</div>
			{customers.length > 0 ? (
				<div>
					{customers.map((customer) => (
						<div key={customer.id} onClick={() => removeCustomer(customer)} className={'customer-list'}>
							{customer.name}
						</div>
					))}
				</div>
			) : (
				<div>
					<h2>Клиенты отсутствуют!</h2>
				</div>
			)}
		</div>
	);
}

export default App;
