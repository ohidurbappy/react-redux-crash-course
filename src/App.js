import { Provider } from 'react-redux'
import { store } from './state/store'
import Dashboard from './Dashboard'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;
