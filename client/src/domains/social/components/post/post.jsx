import './post.css';
import {MoreVert, ThumbUpAlt, Favorite} from '@mui/icons-material';

function Post({post}) {
    return (  
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/photo.jpg" alt="hello" className="postProfileImg" />
                        <span className="postUsername">{post.userId}</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
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