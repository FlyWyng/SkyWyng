import './header.css';
import {Search, Person, Chat, Notifications} from '@mui/icons-material';

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerLeft">
                <span className="logo">SkyWyng</span>
            </div>
            <div className="headerCenter">
                <div className="searchBar">
                    <Search className='searchIcon'/>
                    <input placeholder='Seach for anything' className="searchInput"/>
                </div>
            </div>
            <div className="headerRight">
                <div className="headerLinks">
                    <span className='headerLink'>Home</span>
                    <span className="headerLink">Profile</span>
                </div>
                <div className="headerIcons">
                    <div className="headerIconItem">
                        <Person/>
                        <span>1</span>
                    </div>
                    <div className="headerIconItem">
                        <Chat/>
                        <span>1</span>
                    </div>
                    <div className="headerIconItem">
                        <Notifications/>
                        <span>1</span>
                    </div>
                </div>
                <img src="" alt="X" className='headerImg'/>
            </div>
        </div>
    );
}

export default Header;