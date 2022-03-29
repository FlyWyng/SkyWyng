import './feed.css';
import Share from '../share/share';
import Post from '../post/post';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async() =>{
            const res = await axios.get('http://localhost:5000/api/posts/timeline/6229b40bcea93efbf1fd688c');
            setPosts(res.data.sort((p1,p2)=>{
                return new Date(p2.createdAt) - new Date(p1.createdAt);
            }));
        };
        fetchPosts();
    },[]);

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