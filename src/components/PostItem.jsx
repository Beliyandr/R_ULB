import React from "react";

export const PostItem = ({ post, number, remove }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btn">
        <button onClick={() => remove(post)}> Удалить</button>
      </div>
    </div>
  );
};
