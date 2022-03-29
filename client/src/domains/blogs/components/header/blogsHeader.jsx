import './blogsHeader.css';
import {Search} from '@mui/icons-material'

function BlogsHeader() {
    return ( 
        <div className="blogsHeader">
            <div className="blogsHeaderContainer">
                <div className="blogsHeaderLeft">
                    <span className="blogsLogo">SkyWyng</span>
                </div>
                <div className="blogsHeaderCenter">
                    <div className="blogsSearchBar">
                        <Search className='searchIcon'/>
                        <input placeholder='Seach for anything' className="searchInput"/>
                    </div>
                </div>
                <div className="blogsHeaderRight">

                </div>
            </div>
        </div>
     );
}

export default BlogsHeader;