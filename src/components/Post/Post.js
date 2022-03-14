import React from "react";

const Post = ({ item }) => {
  return (
    <div className="item_wrap">
      <div className="item_name">{item.name}</div>
      <div className="item_foto">
          {item.price}
      </div>
    </div>
  );
};

export default Post;
