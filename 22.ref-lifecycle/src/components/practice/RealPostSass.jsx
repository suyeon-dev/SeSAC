import axios from 'axios';
import { useEffect, useState } from 'react';
import PostItem from './PostItemSass';
import '../../style/practice/RealPost.scss';

export default function RealPostSass() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState([]);

  /* const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts/${id}'
    );

    // /:id
    //'https://jsonplaceholder.typicode.com/posts/${id}'
    // dep_array

    console.log(response.data);
    setPosts(response.data.slice(0, 10));
  }; */

  //   getPosts(); //무한로딩

  // useEffect(비동기 지원x)의 콜백에는 async를 사용할 수 없음
  // > async await 를 사용하는 함수를 따로 만들어야함 (추천: async await 사용해서 useEffect 내 기능 분리하기)
  // > then catch는 가능

  useEffect(() => {
    // 1.
    // getPosts();

    // 2. then catch 사용
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='container'>
      <header>
        <h2>💌 Post List</h2>
      </header>
      <main>
        {posts.length === 0 ? (
          <span>...loading</span>
        ) : (
          posts.map((post) => {
            return (
              <PostItem
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })
        )}
      </main>
    </div>
  );
}
