import BlogsCard from '../card/blogsCard';
import BlogsFilter from '../filter/blogsFilter';
import './blogsRightbar.css';

function BlogsRightbar() {
    return (  
        <div className="blogsRightbarContainer">
            <BlogsFilter/>
            <div className="blogsRightBarContent">
                <BlogsCard/>
                <BlogsCard/>
                <BlogsCard/>
                <BlogsCard/>
                <BlogsCard/>
                <BlogsCard/>
            </div>
        </div>
    );
}

export default BlogsRightbar;