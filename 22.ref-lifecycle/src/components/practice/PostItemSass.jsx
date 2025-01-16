import React from 'react';

export default function PostItemSass({ id, title, body }) {
  return (
    <div className='post'>
      <div className='postHeader'>
        <span className='span postId'>No. {id}</span>
        <span className='span postTitle'>- {title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
}
