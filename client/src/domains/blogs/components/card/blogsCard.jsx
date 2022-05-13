import './blogsCard.css';
import {Visibility, FavoriteBorder, Comment} from '@mui/icons-material';

function BlogsCard() {
    return (  
        <div className='blogsCardContainer'>
            <div className="blogsCardHeader">
                How to save the environment. How I did it in the world of supernova kaido brings dooms day.
            </div>
            <div className="blogsCardContent">
                <img src="./assets/environment.jpg" alt="" className="blogsCardImg" />
                <div className="blogsCardDescription">
                    This is my first blog. dfdkfdflkd dfkdlfskfj dfkdfk d dfkldjfs dkf sjl dsf jdkf sl
                     j fdf kslfd fdksljf sdf klsdfj sdkf sdkljf sldj sd f was is the for not to be there
                     to the world is my infinity
                </div>
            </div>
            <div className="blogsCardFooter">
                <Visibility htmlColor='purple'/>
                <span className="blogsCardSpans">32</span>
                <FavoriteBorder htmlColor='red'/>
                <span className="blogsCardSpans">42</span>
                <Comment htmlColor="blue"/>
                <span className='blogsCardSpans'>100</span>
            </div>
        </div>
    );
}

export default BlogsCard;