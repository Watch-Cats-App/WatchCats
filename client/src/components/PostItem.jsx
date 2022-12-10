import React, {useState} from 'react';
import MyImage from "./UI/img/MyImage";
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BlockIcon from '@mui/icons-material/Block';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import './component-styles/PostItem.css';


const PostItem = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className='post'>
            <MyImage url={props.post.url} />

            <div className="post__btns">
                <Button
                    variant={isLiked ? "contained" : "outlined"}
                    color="success"
                    endIcon={<FavoriteIcon />}
                    onClick={() => setIsLiked(!isLiked)}
                >
                    Like
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => props.deletePost(props.post.id)}
                    endIcon={<BlockIcon color="default" />}
                >
                    Dislike
                </Button>
                <div style={{ width: '150px' }}></div>
                <Button variant="outlined" endIcon={<ShareOutlinedIcon />}>Share</Button>
            </div>

        </div>
    );
};

export default PostItem;