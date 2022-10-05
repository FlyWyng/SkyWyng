import './gymCard.css';

function GymCard({club}) {
    return (  
        <div className="gymCardContainer">
            <div className='gymCardImgContainer'>
                <img src="./assets/gym.jpg" alt="" className="gymCardImg"/>
            </div>  
            
            <div className="gymCardInfo">               
                {/* <span>{club.description}</span> */}
                <span className="gymCardTitle">{club.gymName}</span> 
                <div className="gymCardImpInfo">
                    <table className="gymCardInfoTable">
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                Opens
                            </td>
                            <td className="gymCardInfoTableData">
                                {club.timings[0]} (mon-sat)
                            </td>
                        </tr>
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                Address
                            </td>
                            <td className="gymCardInfoTableData">
                                {club.address}
                            </td>
                        </tr>
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                Phone
                            </td>
                            <td className="gymCardInfoTableData">
                                +91-{club.contact}
                            </td>
                        </tr>
                    </table>
                    <div className="gymCardInfoVerticalLine"></div>
                    <table className="gymCardInfoTable">
                        <th className="gymCardInfoTableHeader" colSpan="2">
                            Fees
                        </th>
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                1 Mon
                            </td>
                            <td className="gymCardInfoTableData">
                                {club.fees[0]}
                            </td>
                        </tr>
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                3 Mon
                            </td>
                            <td className="gymCardInfoTableData">
                                {club.fees[1]}
                            </td>
                        </tr>
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                6 Mon
                            </td>
                            <td className="gymCardInfoTableData">
                                {club.fees[2]}
                            </td>
                        </tr>
                        <tr className="gymCardInfoTableRow">
                            <td className="gymCardInfoTableData">
                                12 Mon
                            </td>
                            <td className="gymCardInfoTableData">
                                {club.fees[3]}
                            </td>
                        </tr>
                    </table>
                    {/* <div className="gymCardTimeContactInfo">
                        <div className="gymCardTimings">
                            <span>Opens: {club.timings[0]} (mon - sat)</span><br/>                           
                        </div>
                        <br/>
                        <div className="gymCardContactInfo">
                            <span>Address: &nbsp;{club.address}</span><br/><br/>
                            <span>Phone: &nbsp;+91-{club.contact}</span>
                        </div>
                    </div>
                    <div className="gymCardFee">
                        <span>Fees</span>
                        <span>1 month - {club.fees[0]}</span>
                        <span>3 month - {club.fees[1]}</span>
                        <span>6 month - {club.fees[2]}</span>
                        <span>12 month - {club.fees[3]}</span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default GymCard;