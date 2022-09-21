import React from 'react';
import logo from './logo.svg'
import './App.css';
import Coin from './components/Coin/Coin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className='App-logo'/>
        <h1 className='App-Title'>
          Coin Exchange
        </h1>
      </header>
      <table className='Coin-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BIT" price={18979.26} />
          <Coin name="Ethereum" ticker="ETH" price={1530.65} />
          <Coin name="Tether" ticker="USDT" price={1.01} />
          <Coin name="Polkadot" ticker="DOT" price={7.03} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
