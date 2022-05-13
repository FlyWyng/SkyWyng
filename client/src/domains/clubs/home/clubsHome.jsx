import './clubsHome.css';
import LeftSide from '../components/left/leftSide';
import RightSide from '../components/right/rightSide';
function ClubsHome() {
    return (
        <div className="clubsHomeContainer">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export default ClubsHome;