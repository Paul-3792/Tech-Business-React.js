import React from 'react'
import './Blog.css';
import Blog1 from '../images/Blog (1).jpg';
import Blog2 from '../images/James greg.jpg';
import Blog3 from '../images/Jessica James.jpg';


const Blog = () => {
  return (
    <div>
      <section className="py-5" id="blog">
        <div className="container">
          <h1 className="text-center" id="blog">
            Blog
          </h1>
          <div className="row">
            <div className="col-md-4">
              <div className="card blog1 mt-3">
                <img
                  src={Blog1}
                  className="rounded-circle mt-3 mx-3"
                  width={100}
                  height={100}
                  alt="blogger-1"
                />
                <div className="card-body">
                  <h1 className="blog-1">David Jerry</h1>
                  <p className="text-dark blog-data">
                    I love Paul's tech. I would rate it a five star because i
                    mean these guys are good, you will learn so much that you
                    haven't learnt before.
                  </p>
                  <div className="Star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card blog1 mt-3">
                <img
                  src={Blog2}
                  className="rounded-circle mt-3 mx-3"
                  width={100}
                  height={100}
                  alt="blogger-1"
                />
                <div className="card-body">
                  <h1 className="blog-1">James greg</h1>
                  <p className="text-dark blog-data">
                    I love Paul's tech. I would rate it a five star because i
                    mean these guys are good, you will learn so much that you
                    haven't learnt before.
                  </p>
                  <div className="Star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card blog1 mt-3">
                <img
                  src={Blog3}
                  className="rounded-circle mt-3 mx-3"
                  width={100}
                  height={100}
                  alt="blogger-1"
                />
                <div className="card-body">
                  <h1 className="blog-1">Jessica James</h1>
                  <p className="text-dark blog-data">
                    I love Paul's tech. I would rate it a five star because i
                    mean these guys are good, you will learn so much that you
                    haven't learnt before.
                  </p>
                  <div className="Star">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog
