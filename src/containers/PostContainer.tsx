import React from 'react';
import postApi from '../services/PostService';

function PostContainer() {
  const {data: posts} = postApi.useFetchAllUsersQuery(10);
  return (
    <div>
      {posts &&
        posts.map(({id, title, body}) => (
          <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
    </div>
  );
}

export default PostContainer;
