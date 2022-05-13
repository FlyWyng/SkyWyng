import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions, Send} from "@mui/icons-material";
import {useContext, useRef, useState} from 'react';
import {AuthContext} from '../../../../context/AuthContext';
import axios from "axios";

function Share() {
    const {user} = useContext(AuthContext);
    const description = useRef();
    const [file,setFile] = useState(null);

    const submitHandler = async (e) =>{
        e.preventDefault();
        const newPost = {
            userId: user._id,
            userName: user.name,
            description: description.current.value
        }
        console.log(newPost);
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file",file);
            newPost.img = fileName;
            console.log(data);
            try{
                const res = await axios.post('http://localhost:5000/api/upload', data);
                console.log(res);
            }catch(err){
                console.log(err);
            }
        }
        try{
            await axios.post('http://localhost:5000/api/posts',newPost);
            window.location.reload();
        }catch(err){
            console.log(err)
        }
    }

    return (  
        <div className="share">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/photo.jpg" alt=""/>
                <input type="text" className="shareInput" placeholder={"Hey!!! What's on your mind " + user.name + "?"} ref={description}/>
            </div>
            <hr className="shareHr"/>
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="red" className="shareIcon"/>
                        <div className="shareOptionText">Photo or Video</div>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpg,.jpeg" onChange={(f)=>setFile(f.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <div className="shareOptionText">Tag</div>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <div className="shareOptionText">Location</div>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <div className="shareOptionText">Feelings</div>
                    </div>
                </div>
                <button className="shareButton" type="submit"><Send htmlColor="blue" className="shareIcon"/></button>
            </form>
        </div>
    );
}

export default Share;