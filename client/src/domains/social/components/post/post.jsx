import './post.css';
import axios from 'axios';
import {useState} from 'react';
import {MoreVert, ThumbUpAlt, Favorite} from '@mui/icons-material';

function Post({post}) {
    const [optionsDiv, setOptionDiv] = useState(null);

    const handleOptionsDiv = () =>{
        setOptionDiv(optionsDiv === null ? 1 : null);
    }

    const handleEditPost = async () =>{
    }

    const handleDeletePost = async (post) =>{
        try{
            await axios.delete('/api/posts/'+post._id, {data: { userId: post.userId}} );
            window.location.reload();
        }catch(err){
            console.log(err);
        }
    }

    return (  
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/photo.jpg" alt="hello" className="postProfileImg" />
                        <span className="postUsername">{post.userName}</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <button className='postOptionButton' onClick={handleOptionsDiv}><MoreVert/></button>
                        {optionsDiv &&
                            <div className="postOptions">
                                <span onClick={() => handleEditPost(post)}>Edit</span>
                                <span onClick={() => handleDeletePost(post)}>Delete</span>
                            </div>
                        }
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postCenterText">{post.description}</span>
                    <img src={`http://localhost:5000/images/${post.img}`} alt="" className="postCenterImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUpAlt className='likeIcon'/>
                        <Favorite style={{backgroundColor: "red"}} className='likeIcon'/>
                        <span className="postLikeCounter">32 people like this</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;