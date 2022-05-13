import './leftSide.css';
import Explore from '../../../social/components/explore/explore';

function LeftSide() {
    return (  
        <div className="clubsLeftSide">
            <div className="clubsHeader">
                <h1>SkyWyng</h1>
            </div>
            <div className="clubsType">

            </div>
            <Explore/>
        </div>
    );
}

export default LeftSide;