import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import Button from './components/button';
import Table from './components/Table';
import api from './api/index.service';
import {ResultGitHub} from './components/search/types';

function App() {
  const [data, setData] = useState<ResultGitHub[]>([]);

  const fetchData = async (username: string) => {
    if (username.length > 0) {
      try {
        const response = await api.get(username);

        setData([...data, response.data ]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // const calculate = () => {
  // }

  return (
    <div className='App'>
      <header className='Header' onClick={() => fetchData('soto92')} />
      <h3 className='Title'>Comparator GitHub users</h3>
      <div className='Profiles-content'>
        <Search onBlur={(value: string) => fetchData(value)} data={data[0]} />
        <Search onBlur={(value: string) => fetchData(value)} data={data[1]} />
        <Search onBlur={(value: string) => fetchData(value)} data={data[2]} />
        <Button onClick={() => console.log('press')} />
      </div>
      {/* <Table data={data}/> */}
    </div>
  );
}

export default App;
