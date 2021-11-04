import React from 'react';
import author1 from '../../../images/people-1.png';
import author2 from '../../../images/people-2.png';
import author3 from '../../../images/people-3.png';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <div className="blogs_title">
                <h3>OUR BLOG</h3>
                <h1>From Our Blog News</h1>
            </div>
            <div className="container blogs_inner">
                <div className="blog">
                    <div className="blog_author">
                        <div className="blog_author_img">
                            <img src={author1} alt="" />
                        </div>
                        <div className="blog_author_name">
                            <h4>Dr. Smith</h4>
                            <p>23 April 2021</p>
                        </div>
                    </div>
                    <div className="blog_description">
                        <h3>2 times of brush in a day can Keep you healthy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus id a, tempore doloribus deleniti.</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog_author">
                        <div className="blog_author_img">
                            <img src={author2} alt="" />
                        </div>
                        <div className="blog_author_name">
                            <h4>Dr. Candy</h4>
                            <p>23 April 2021</p>
                        </div>
                    </div>
                    <div className="blog_description">
                        <h3>2 times of brush in a day can Keep you healthy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus id a, tempore doloribus deleniti.</p>
                    </div>
                </div>
                <div className="blog">
                    <div className="blog_author">
                        <div className="blog_author_img">
                            <img src={author3} alt="" />
                        </div>
                        <div className="blog_author_name">
                            <h4>Dr. Maryam</h4>
                            <p>23 April 2021</p>
                        </div>
                    </div>
                    <div className="blog_description">
                        <h3>2 times of brush in a day can Keep you healthy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum repellendus id a, tempore doloribus deleniti.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;