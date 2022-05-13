import './feed.css';
import Share from '../share/share';
import Post from '../post/post';
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthContext';

function Feed() {
    const [posts, setPosts] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        const fetchPosts = async() =>{
            const res = await axios.get('http://localhost:5000/api/posts/timeline/'+user._id);
            setPosts(res.data.sort((p1,p2)=>{
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        };
        fetchPosts();
    },[user._id]);

    return (  
        <div className="feed">
            <Share/>
            {posts.map((p)=>(
                <Post key={p._id} post={p}/>
            ))}
        </div>
    );
}

export default Feed;