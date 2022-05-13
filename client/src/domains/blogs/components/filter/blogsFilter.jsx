import './blogsFilter.css';
import {Search} from '@mui/icons-material';

function BlogsFilter() {
    return (  
        <div className="blogsFilterContainer"> 
            <div className="blogsFilterOption">Latest</div>
            <div className="blogsFilterOption">Top Rated</div>
            <div className="blogsFilterOption">Most Viewed</div>
            <div className="blogsFilterOption">Author</div>          
            <div className="blogsFilterSearch">
                <Search className='searchIcon'/>
                <input placeholder='Seach for anything' className="searchInput"/>
            </div>
        </div>
    );
}

export default BlogsFilter;