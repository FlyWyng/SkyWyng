import './gymCard.css';
import {StarRate} from '@mui/icons-material';

function GymCard({club}) {
    return (  
        <div className="gymCardContainer">
            <img src="./assets/gym.jpg" alt="" className="gymCardImg"/>
            <div className="gymCardInfo">
                <div className="gymCardTitle">
                    <span>{club.gymName}</span>
                    <span className='gymCardRating'>5<StarRate htmlColor='yellow'/></span>
                </div>
                <div className="gymCardDetails">
                    <div className="gymCardAbout">
                        <span>{club.description}</span>
                        <div className="gymCardTimings">
                            Opens: Mon-Sat: {club.timings[0]}
                        </div>
                        <div className="gymCardContactInfo">
                            <span>{club.address}</span><br/>
                            <span>Phone: +91-7691806074</span>
                        </div>
                    </div>
                    <div className="gymCardFee">
                        <span>Fees</span>
                        <span>1 month - {club.fees[0]}</span>
                        <span>3 month - {club.fees[1]}</span>
                        <span>6 month - {club.fees[2]}</span>
                        <span>12 month - {club.fees[3]}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GymCard;