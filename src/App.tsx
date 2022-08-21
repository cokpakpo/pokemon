import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Details } from './components/Details';
import { List } from './components/List';
import { MyList } from './components/MyList';
import { Layout } from './components/Layout';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="details/:name" element={<Details />} />
          <Route path="mylist" element={<MyList />} />
        </Routes>      
      </Layout>
    </>
  );
}

export default App;
