import { PostItemInterface } from '../../types/interface';

interface Props {
  post: PostItemInterface;
}

export default function PostItem({ post }: Props) {
  return (
    <div style={{ border: '2px solid lightgray', marginBottom: '10px' }}>
      <div>
        <span>No. {post.id}</span>
        <span>{post.title}</span>
      </div>
      <p>{post.body}</p>
    </div>
  );
}
