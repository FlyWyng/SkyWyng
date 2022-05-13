import './blogsHome.css';
import BlogsLeftbar from '../components/leftbar/blogsLeftbar';
import BlogsRightbar from '../components/rightbar/blogsRightbar';

function BlogsHome() {
    return (
        <div className="blogsHomeContainer">
            <BlogsLeftbar/>
            <BlogsRightbar/>
        </div>
    );
}

export default BlogsHome;