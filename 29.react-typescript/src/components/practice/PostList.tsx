import axios from 'axios';
import { useEffect, useState } from 'react';
import PostItem from './PostItem';
import { PostItemInterface } from '../../types/interface';

export default function PostList() {
  // https://jsonplaceholder.typicode.com/posts
  const [posts, setPosts] = useState<PostItemInterface[]>([]);
  // [{id, title, body}]

  const getPosts = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      console.log('data:', response.data.slice(0, 5));
      setPosts(response.data.slice(0, 5));
    } catch (err) {
      console.error('🚨데이터 불러오는 중 오류 발생', err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <main>
      {posts.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {posts.map((post) => {
            return <PostItem post={post} />;
          })}
        </ul>
      )}
    </main>
  );
}
