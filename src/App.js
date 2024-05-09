import React, { useState, useRef } from 'react';
import { Counter } from './components/Counter';
import ClassCounter from './components/ClassCounter';

import "./styles/App.css"

import { PostList } from './components/PostList';
import { MyButton } from './components/UI/button/MyButton';
import { MyInput } from './components/UI/input/MyInput';
import { PostForm } from './components/PostForm';
import { MySelect } from './components/UI/select/MySelect';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JS', body: 'JavaScript - язык программирования' },
    { id: 2, title: 'HTML', body: 'HTML - не язык программирования' },
    { id: 3, title: 'CSS', body: 'CSS -  не язык программирования' },
  ])

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');


const sortedPosts =


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)

    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))

  }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>

        <MyInput
          placeholder='Поиск...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>
      {posts.length
        ? <PostList posts={posts} title='Список постов 1' remove={removePost} />
        : <h1 style={{ textAlign: 'center' }}> Посты не были найдены</h1>
      }


    </div >
  );
}

export default App;
