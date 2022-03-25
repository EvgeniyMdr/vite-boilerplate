import React from 'react';
import style from './App.module.css';
import PostContainer from './containers/PostContainer';

function App() {
  return (
    <div className={style.App}>
      <PostContainer />
    </div>
  );
}

export default App;
