import './blogsLeftbar.css';
import Explore from '../../../social/components/explore/explore';

function BlogsLeftbar() {
    return ( 
        <div className="blogsLeftbar">
            <div className="blogsCategories">
                <div className="blogsCategoriesHeading">Categories</div>
            </div>
            <Explore/>
        </div>
    );
}

export default BlogsLeftbar;