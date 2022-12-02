import React, {useEffect, useRef, useState} from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostService from "./API/PostService";
import {Button, Fab, IconButton, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function App() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({id:'', url:''});
    const [isPostsLoading, setPostLoading] = useState(false);
    const lastElement = useRef();
    const observer = useRef();

    console.log(lastElement)

    const addNewPost = () => {
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({id:'', url:''})
    }

    const deletePost = (id) => {
        setPosts(posts.filter(p => p.id !== id))
    }

    async function fetchPosts() {
        setPostLoading(true);
        const newPosts = await PostService.getAll();
        setPosts([...posts, ...newPosts]);
        setPostLoading(false);
    }

    useEffect(() => {
        if (isPostsLoading) return;
        if (observer.current) observer.current.disconnect();
        var callback = function(entries, observer) {
            if(entries[0].isIntersecting) {
                fetchPosts();
            }
        }
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(lastElement.current)
    }, [isPostsLoading])


    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <div className="App">

            <div className="add-btn" >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>

            <div className="post-list">
                <Typography variant="h3" gutterBottom color="primary">Watch Cats!</Typography>

                {posts.length
                    ? <PostList posts={posts} deletePost={deletePost}/>
                    : <Typography variant="h4" gutterBottom color="primary">Posts Not Loaded!</Typography>
                }

                <div ref={lastElement} style={{height:'25px', width:'100%'}}/>
            </div>
        </div>
    );
}

export default App;
