import React from "react";

const Post = ({ item,none}) => {
  return (
    <div className="item_wrap">
      <div className="item_name">{item.name}</div>
      <div className="item_foto">
          {item.price}
      </div>
      <div className="del_btn" onClick={()=>none(item.id)}>X</div>
    </div>
  );
};

export default Post;
