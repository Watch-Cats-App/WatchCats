import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, deletePost}) => {
    let uqId = 0;
    return (
        <div>
            <h1 style={{textAlign:"center"}}> {title} </h1>
            {posts.map( post =>
                // <PostItem post={post} key={post.id} deletePost={deletePost}/>
                <PostItem post={post} key={uqId++} deletePost={deletePost}/>
            )}
        </div>
    );
};

export default PostList;