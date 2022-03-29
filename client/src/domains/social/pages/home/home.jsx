import Header from '../../components/header/header';
import Leftbar from '../../components/leftbar/leftbar';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import './home.css'

function Home() {
    return (
        <div className="homeContainer">
            <div className='header'>
                <Header/>
            </div>
            <div className="content">
                <Leftbar/>
                <Feed/>
                <Rightbar/>
            </div>
        </div>
    );
}

export default Home;