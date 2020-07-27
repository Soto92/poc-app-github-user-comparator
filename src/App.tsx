import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './components/search';
import Button from './components/button';
import Table from './components/Table';
import { Loader } from './components/loader';
import { api, getContributions } from './api/index.service';
import { ResultGitHub } from './components/search/types';

function App() {
  const [data, setData] = useState<ResultGitHub[]>([]);
  const [isShowTable, setShowTable] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [isLoaderVisible, setloaderVisible] = useState(false);

  useEffect(() => {
    if (data.length > 1) {
      setDisabledButton(false);
    }
  }, [data]);

  const fetchData = async (username: string) => {
    if (username.length > 0) {
      setloaderVisible(true);
      try {
        const response = await api.get(`users/${username}`);
        const events = await getContributions.get(`${username}`);

        setData([
          ...data,
          { ...response.data, contributions: events.data.years },
        ]);
      } catch (error) {
        console.log(error);
      } finally {
        setloaderVisible(false);
      }
    }
  };

  return (
    <div className='App'>
      <header className='Header'>Github user comparator</header>
      <Loader isVisible={isLoaderVisible} />
      <div className='Profiles-content'>
        <Search onBlur={(value: string) => fetchData(value)} data={data[0]} />
        <Search onBlur={(value: string) => fetchData(value)} data={data[1]} />
        <Search onBlur={(value: string) => fetchData(value)} data={data[2]} />
        <Button disabled={disabledButton} onClick={() => setShowTable(true)} />
      </div>
      {isShowTable && <Table data={data} />}
    </div>
  );
}

export default App;
