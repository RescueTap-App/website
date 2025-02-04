"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { BLOGS_API } from "../constants/api";

export default function Blog() {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!router.isReady) return; // Wait until the router is ready

    const { id } = router.query; // Retrieve the id from query params

    if (id) {
      fetchBlogDetails(id);
    }

    async function fetchBlogDetails(id) {
      try {
        setLoading(true);
        const response = await axios.get(`${BLOGS_API}/${id}`);
        setBlog(response.data);
      } catch (err) {
        setError("Failed to load the blog post. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  }, [router.isReady, router.query]); // Depend on router.isReady and router.query

  if (loading) return <p>Loading blog details...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>No blog found.</p>;
  return (
    <>
      <section className="blog-details-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="blog-details-content">
                <div className="single-blog-style1 single-blog-style1--instyle3">
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-details-img-1.jpg" alt />
                    <div className="date-box">
                      <h6>
                        16
                        <br /> <span>Nov</span>
                      </h6>
                    </div>
                  </div>
                  <div className="text-holder">
                    <ul className="meta-info">
                      <li>
                        <i className="fa fa-user" aria-hidden="true" />
                        <a href="#">by Admin</a>
                      </li>
                      <li>
                        <i className="fa fa-comment-o" aria-hidden="true" />
                        <a href="#">02 Comments</a>
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
                <div className="tag-social-share-box">
                  <div className="tag-box">
                    <div className="title">
                      <h3>Tags:</h3>
                    </div>
                    <ul className="tag-list">
                      <li>
                        <a href="#">Ambulance</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                    </ul>
                  </div>
                  <div className="post-social-share">
                    <div className="post-social-share-links clearfix">
                      <ul className="clearfix">
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-pinterest" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="blog-details-author">
                  <div className="inner-box">
                    <div className="img-box">
                      <img src="assets/images/blog/author.jpg" alt />
                    </div>
                    <div className="text">
                      <h3>Christine Eve</h3>
                      <p>
                        Lorem ipsum is simply free text used copytyping
                        inventore veritatis refreshing. Neque porro est qui
                        dolorem quaed inventore.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="comment-box">
                  <div className="inner-title">
                    <h2>2 Comments</h2>
                  </div>
                  <div className="outer-box">
                    <div className="row">
                      <div className="col-md-12">
                        {/*Start single comment*/}
                        <div className="single-comment">
                          <div className="single-comment-box">
                            <div className="img-holder">
                              <img
                                src="assets/images/blog/comment-1.jpg"
                                alt="Awesome Image"
                              />
                            </div>
                            <div className="text-holder">
                              <div className="top">
                                <div className="name">
                                  <h3>Kevin Martin</h3>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                              <div className="text">
                                <p>
                                  Lorem ipsum is simply free text used by
                                  copytyping refreshing. Neque porro est qui
                                  dolorem ipsum quia quaed inventore veritatis
                                  et quasi architecto beatae vitae dicta sunt
                                  explicabo porro est qui dolorem.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End single comment*/}
                        {/*Start single comment*/}
                        <div className="single-comment">
                          <div className="single-comment-box">
                            <div className="img-holder">
                              <img
                                src="assets/images/blog/comment-2.jpg"
                                alt="Awesome Image"
                              />
                            </div>
                            <div className="text-holder">
                              <div className="top">
                                <div className="name">
                                  <h3>Sarah Albert</h3>
                                </div>
                                <div className="reply">
                                  <a href="#">Reply</a>
                                </div>
                              </div>
                              <div className="text">
                                <p>
                                  Lorem ipsum is simply free text used by
                                  copytyping refreshing. Neque porro est qui
                                  dolorem ipsum quia quaed inventore veritatis
                                  et quasi architecto beatae vitae dicta sunt
                                  explicabo porro est qui dolorem.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*End single comment*/}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="add-comment-box">
                  <div className="inner-title">
                    <h2>Leave a Comment</h2>
                  </div>
                  <form id="add-comment-form" action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-box">
                              <input
                                type="text"
                                name="fname"
                                defaultValue
                                placeholder="Your name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-box">
                              <input
                                type="email"
                                name="femail"
                                defaultValue
                                placeholder="Email address"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-box">
                              <textarea
                                name="fcomments"
                                placeholder="Write message"
                                required
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="button-box">
                              <button className="btn-one" type="submit">
                                <span className="txt">Submit Comment</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/*Start Thm Sidebar Box*/}
            <div className="col-xl-4 col-lg-5">
              <div className="thm-sidebar-box">
                <div className="sidebar-search-box">
                  <form className="search-form" action="#">
                    <input placeholder="Search" type="text" />
                    <button type="submit">
                      <i className="fa fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
                <div className="single-sidebar-box">
                  <div className="sidebar-title">
                    <h3>Recent Posts</h3>
                  </div>
                  <div className="sidebar-blog-post">
                    <ul className="blog-post">
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/news-1.jpg"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="admin">
                              <span className="icon-user" /> by Admin
                            </div>
                            <h4>
                              <a href="#">
                                Integer tristique odio
                                <br /> vitae lorem gra
                              </a>
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/news-2.jpg"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="admin">
                              <span className="icon-user" /> by Admin
                            </div>
                            <h4>
                              <a href="#">
                                Integer tristique odio
                                <br /> vitae lorem gra
                              </a>
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <div className="img-box">
                            <img
                              src="assets/images/sidebar/news-3.jpg"
                              alt="Awesome Image"
                            />
                            <div className="overlay-content">
                              <a href="#">
                                <i className="fa fa-link" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                          <div className="title-box">
                            <div className="admin">
                              <span className="icon-user" /> by Admin
                            </div>
                            <h4>
                              <a href="#">
                                Integer tristique odio
                                <br /> vitae lorem gra
                              </a>
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-sidebar-box">
                  <div className="sidebar-title">
                    <h3>Categories</h3>
                  </div>
                  <ul className="sidebar-categories-box">
                    <li>
                      <a href="#">Air Ambulance</a>
                    </li>
                    <li>
                      <a href="#">Medical Flight Services</a>
                    </li>
                    <li>
                      <a href="#">Car Ambulance</a>
                    </li>
                    <li>
                      <a href="#">Commercial Stretcher</a>
                    </li>
                    <li>
                      <a href="#">Medical Escort</a>
                    </li>
                    <li>
                      <a href="#">Clothing</a>
                    </li>
                  </ul>
                </div>
                <div className="single-sidebar-box">
                  <div className="sidebar-title">
                    <h3>Tags</h3>
                  </div>
                  <div className="popular-tag-box">
                    <ul className="popular-tag">
                      <li>
                        <a href="#">Ambulance</a>
                      </li>
                      <li>
                        <a href="#">Health</a>
                      </li>
                      <li>
                        <a href="#">Medical</a>
                      </li>
                      <li>
                        <a href="#">International</a>
                      </li>
                      <li>
                        <a href="#">Equipments</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/*End Thm Sidebar Box*/}
          </div>
        </div>
      </section>
      {/* <Card>
        <CardHeader title={blog.title} subheader={`Published on ${new Date(blog.createdAt).toLocaleDateString()}`} />
        <CardContent>
          <div className="prose prose-lg">
            <p className="text-white">{blog.content}</p>
          </div>
        </CardContent>
      </Card>
      <Button variant="outlined" className="mt-4" onClick={() => router.back()}>
        Go Back
      </Button> */}
    </>
  );
}
