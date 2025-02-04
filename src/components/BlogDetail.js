"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { BLOGS_API } from "../constants/api";
import Link from "next/link";

export default function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const router = useRouter();
  const { id } = useParams();

  // Fetch the blog by ID
  const fetchBlog = async () => {
    try {
      const res = await fetch(`${BLOGS_API}/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch blog");
      }
      const data = await res.json();
      setBlog(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch recent posts (excluding the current blog post)
  const fetchRecentPosts = async () => {
    try {
      const res = await fetch(BLOGS_API);
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await res.json();
      // Filter out the current blog from the recent posts list
      const filteredPosts = data.filter((post) => post.id !== id);
      setRecentPosts(filteredPosts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchBlog();
      fetchRecentPosts();
    }
  }, [id]);

  if (!blog || recentPosts.length === 0) return <div>Loading...</div>;

  // Format the creation date
  const formattedDate = new Date(blog.createdAt).toLocaleDateString("en-US", {
    month: "short", // e.g., "Feb"
    day: "numeric", // e.g., "4"
  });

  return (
    <>
      <section className="blog-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-content">
                <div className="single-blog-style1 single-blog-style1--instyle3">
                  <div className="img-holder">
                    <img src={blog.featureImage} alt={blog.title} />
                    <div className="date-box">
                      <h6>{formattedDate}</h6>
                    </div>
                  </div>
                  <div className="text-holder">
                    <ul className="meta-info">
                      <li>
                        <i className="fa fa-user" aria-hidden="true" />
                        <a href="#">{blog.author}</a>
                      </li>
                    </ul>
                    <div className="text-inner">
                      <h3 className="blog-title">{blog.title}</h3>
                    </div>
                    <div className="text">
                      <p>{blog.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Section for Recent Posts */}
            <div className="col-xl-4 col-lg-5">
              <div className="thm-sidebar-box">
                <div className="single-sidebar-box">
                  <div className="sidebar-title">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="sidebar-blog-post">
                    <ul className="blog-post">
                      {recentPosts.map((post) => (
                        <li key={post._id}>
                          <div className="inner">
                            <div className="img-box">
                              <img src={post.featureImage} alt={post.title} />
                              <div className="overlay-content">
                                {/* Use the Link component to route to the blog details page */}
                                <Link href={`/Blog/${post._id}`}>
                                  <i
                                    className="fa fa-link"
                                    aria-hidden="true"
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="title-box">
                              <div className="admin">
                                <span className="icon-user" /> by {post.author}
                              </div>
                              <h4>
                                {/* Link to the blog details page */}
                                <Link href={`/Blog/${post._id}`}>
                                  {post.title}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sidebar */}
          </div>
        </div>
      </section>
    </>
  );
}
