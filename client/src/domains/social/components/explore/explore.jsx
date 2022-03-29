import './explore.css';
import {FitnessCenter, Book, SportsEsports} from "@mui/icons-material";
import {Link} from 'react-router-dom';

function Explore() {
    return (  
        <div className='explore'>
                <div className="exploreHeading">Explore</div>
                <div className="exploreOptions">
                    <Link to="/" className='exploreLink'>
                        <div className="exploreOption">
                            <FitnessCenter htmlColor="goldenrod" className='exploreOptionIcon'/>
                            <span className="exploreOptionText">Clubs</span>
                        </div>
                    </Link>
                    <Link to="/blogs" className='exploreLink'>
                        <div className="exploreOption">
                            <Book htmlColor="red" className='exploreOptionIcon'/>
                            <span className="exploreOptionText">Blogs</span>
                        </div>
                    </Link>
                    <Link to="/" className='exploreLink'>
                        <div className="exploreOption">
                            <SportsEsports htmlColor="green" className='exploreOptionIcon'/>
                            <span className="exploreOptionText">Games</span>
                        </div>
                    </Link>                 
                </div>
            </div>
    );
}

export default Explore;