import React from 'react';
import MyImage from "./UI/img/MyImage";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {Fab, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BlockIcon from '@mui/icons-material/Block';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import './component-styles/PostItem.css';


const PostItem = (props) => {
    return (
        <div className='post'>
            <MyImage url={props.post.url}/>

            <div className="post__btns">
                <Button variant="contained" color="success" endIcon={<FavoriteIcon/>}>Like</Button>
                <Button variant="outlined" color="error" onClick={() => props.deletePost(props.post.id)} endIcon={<BlockIcon color="default" />}>Dislike</Button>
                <div style={{width:'150px'}}></div>
                <Button variant="outlined" endIcon={<ShareOutlinedIcon />}>Share</Button>
            </div>

        </div>
    );
};

export default PostItem;