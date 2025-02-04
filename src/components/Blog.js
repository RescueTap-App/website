"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { BLOGS_API } from "../constants/api";
import Link from "next/link";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(BLOGS_API);
        setBlogs(response.data);
        console.log(response.data)
      } catch (err) {
        setError("Failed to fetch blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const sanitizeContent = (content) => content.replace(/<\/?p>/g, ""); // Remove <p> tags

  return (
    <div>
      <section className="breadcrumb-area">
        <div
          className="breadcrumb-area-bg"
          style={{
            backgroundImage: "url(assets/images/breadcrumb/breadcrumb-5.jpg)",
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="inner-content">
                <div className="title">
                  <h2>Blog</h2>
                </div>
                <div className="breadcrumb-menu">
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li className="active">Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-page-one">
        <div className="container">
          {loading && <p>Loading blogs...</p>}
          {error && <p>{error}</p>}
          <div className="row">
            {!loading &&
              !error &&
              blogs.map((blog) => (
                <div key={blog._id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="single-blog-style1">
                    <div className="img-holder">
                      <img
                        src={
                          blog.featureImage ||
                          "assets/images/blog/blog-v1-1.jpg"
                        }
                        alt={blog.title}
                        style={{
                          width: "100%",
                          maxWidth: "350px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div className="text-holder">
                      <div className="meta-info">
                        <p>
                          <span className="icon-calendar" />{" "}
                          {new Date(blog.createdAt).toDateString()}
                        </p>
                      </div>
                      <h3>
                        <Link href={`/Blog/${blog._id}`}>{blog.title}</Link>
                      </h3>
                      <p>{sanitizeContent(blog.content).substring(0, 30)}...</p>
                      <div className="btn-box">
                        <Link href={`/Blog/${blog._id}`}>Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
