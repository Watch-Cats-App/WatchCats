import React from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";

const AddNewPost = (props) => {
    return (
        <div className="create-post">
            <IconButton color="primary" aria-label="upload picture" component="label">
                <input hidden accept="image/*" type="file" />
                <PhotoCamera fontSize="large"/>
            </IconButton>
            {/*Управляемы компонент те зависят друг от друга, поменяешь один - изменится второй*/}
            <TextField
                id="outlined-basic"
                label="Post name"
                variant="outlined"
                sx={{
                    width: 200
                }}
                InputProps={{ sx: { height: 50 } }}
                value={props.post.title}
                onChange={ e => props.setPost({...props.post, title: e.target.value})}
            />

            <Button variant="contained" onClick={props.addNewPost} style={{marginLeft:'5px'}}>Crate post</Button>
        </div>
    );
};

export default AddNewPost;