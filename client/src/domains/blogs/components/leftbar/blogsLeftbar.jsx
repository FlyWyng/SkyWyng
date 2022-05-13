import './blogsLeftbar.css';
import Explore from '../../../social/components/explore/explore';
import BlogsHeader from '../header/blogsHeader';

function BlogsLeftbar() {
    return ( 
        <div className="blogsLeftbar">
            <BlogsHeader/>
            <div className="blogsCategories">
                <div className="blogsCategoriesHeading">Categories</div>
            </div>
            <Explore/>
        </div>
    );
}

export default BlogsLeftbar;