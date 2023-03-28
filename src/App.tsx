import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { State } from './state';
import { useState } from 'react';


function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt, addUser } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)
  const users = useSelector((state: State) => state.users)
  const [user, setUser] = useState({name: "", email: ""})

  function pushUser() {
    if (user.name)
    return addUser(user);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser({...user, [event.target.name]: event.target.value})
  }

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      <button onClick={bankrupt}>Bankrupt</button>
      <h2>Users:</h2>
      <h4>Add user:</h4>
      <label htmlFor="name">Name</label>
      <input type="text" name='name' onChange={handleChange} value={user.name || ""}/>
      <label htmlFor="email">Email</label>
      <input type="text" name='email' onChange={handleChange} value={user.email || ""} />
      <button onClick={pushUser}>Add</button>
      <ul>
        {users.map(user => {
          return <li>{user.name} - {user.email}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
