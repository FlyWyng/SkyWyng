import Header from '../../components/header/header';
import Leftbar from '../../components/leftbar/leftbar';
import Center from '../../components/center/center';
import Rightbar from '../../components/rightbar/rightbar';
import './home.css'

function Home() {
    return (
        <>
            <Header/>
            <div className="homeContainer">
                <Leftbar/>
                <Center/>
                <Rightbar/>
            </div>
        </>
    );
}

export default Home;