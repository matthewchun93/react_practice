import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './state/index'

function App() {
  
  const account = useSelector(state => state.account);
  const dispatch = useDispatch();

  const  {depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)
  return (
    <div className="container">
      <div className="App">
        <h1>{account}</h1>
        <button onClick={()=> depositMoney(5)}> Deposit </button>
        <button onClick={()=> withdrawMoney(5)}> Withdraw </button>
      </div>
    </div>
  );
}

export default App;
