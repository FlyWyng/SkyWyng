import './blogsHome.css';
import BlogsHeader from '../components/header/blogsHeader';
import BlogsLeftbar from '../components/leftbar/blogsLeftbar';
import BlogsRightbar from '../components/rightbar/blogsRightbar';

function BlogsHome() {
    return (
        <div className="blogsHomeContainer">
            <div className="blogsHeader">
                <BlogsHeader/>
            </div>
            <div className="blogsContent">
                <BlogsLeftbar/>
                <BlogsRightbar/>
            </div>
        </div>
    );
}

export default BlogsHome;