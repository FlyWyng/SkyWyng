import './leftbar.css'
import Explore from '../explore/explore';

function Leftbar() {
    return (  
        <div className="leftBar">
            <Explore/>
            <div className="puzzle">
                <div className="puzzleHeading">Puzzle</div>
            </div>
        </div>
    );
}

export default Leftbar;