import './clubsHome.css';
import LeftSide from '../components/left/leftSide';
import RightSide from '../components/right/rightSide';
import {Search, Menu} from '@mui/icons-material';
import { useEffect } from 'react';

function ClubsHome() {

    function debounce(fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer)
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        };
      }

    useEffect(() => {
        const debouncedHandleResize = debounce(()=>{
            if(window.innerWidth <= 786){
                document.getElementsByClassName('clubsHomeContent')[0].style.display = 'block';
                document.getElementsByClassName('clubsHomeLeftBar')[0].style.display = 'none';
                return;
            }
            document.getElementsByClassName('clubsHomeContent')[0].style.display = 'grid';
            document.getElementsByClassName('clubsHomeLeftBar')[0].style.display = 'block';
        })
        window.addEventListener('resize',debouncedHandleResize);
        return _ => window.removeEventListener('resize', debouncedHandleResize);
    })

    const toggleLeftBar = () =>{
        var isClosed = false;
        if(document.getElementsByClassName('clubsHomeLeftBar')[0].style.display === 'none' ||
            document.getElementsByClassName('clubsHomeLeftBar')[0].style.display === null){
                isClosed = true;
            }
        console.log(document.getElementsByClassName('clubsHomeLeftBar')[0].style.display);
        if(isClosed){
            document.getElementsByClassName('clubsHomeLeftBar')[0].style.display = 'block';
            document.getElementsByClassName('clubsHomeContent')[0].style.display = 'grid';
        }
        else{
            document.getElementsByClassName('clubsHomeLeftBar')[0].style.display = 'none';
            document.getElementsByClassName('clubsHomeContent')[0].style.display = 'block';
        }
    }

    return (
        <div className="clubsHomeContainer">
            <div className="clubsHomeHeader">
                <div><Menu  className="clubsHomeToggleButton" onClick={toggleLeftBar}/></div>
                <div className="clubsHomeLogo">SkyWyng</div>
                <div className="clubsNavBarOption">Latest</div>
                <div className="clubsNavBarOption">Top Rated</div>
                <div className="clubsNavBarOption">Most Viewed</div>
                <div className="clubsNavBarOption">Author</div>          
                <div className="clubsNavBarSearch">
                    <Search className='searchIcon'/>
                    <input placeholder='Seach for anything' className="searchInput"/>
                </div>
            </div>
            <div className="clubsHomeContent">
                <div className="clubsHomeLeftBar">
                    <LeftSide/>
                </div>
                <RightSide/>
            </div>         
        </div>
    );
}

export default ClubsHome;