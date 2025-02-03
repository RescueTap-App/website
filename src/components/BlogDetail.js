"use client"
import React from "react";

// const fetchresource = ()=>{
//   fetch('https://plankton-app-nj7zb.ondigitalocean.app/blogs')
//   .then(response =>{ response.json()
//     console.log(response.json())
//     // const reader = response.body.getReader().read
//     // console.log(reader)
//     console.log('read out')
//   })
// }


 // BlogData.array.forEach(element => {
      //   console.log(element)
      // });
async function processStream() {
  const url = "https://plankton-app-nj7zb.ondigitalocean.app/blogs"
  const BlogParent = document.getElementById('BlogContentParent')
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    try {
      const jsonData = await response.json();
      console.log("JSON Data:", jsonData);
      localStorage.setItem = jsonData

      updateContent(jsonData)
      const blogContent = document.createElement('p')
      const BlogData = JSON.parse(jsonData)
     
      console.log(BlogData)
      
      return jsonData;
    } catch (jsonError) {
       console.error("Response is not valid JSON:", jsonError);

      const reader = response.body.getReader();
      let chunks = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        chunks += new TextDecoder().decode(value);
      }
      try {
        const parsedData = JSON.parse(chunks);  // Try parsing
        console.log("Parsed Data (if JSON):", parsedData);
        return parsedData;
      } catch (parseError) {
        console.error("Data is not JSON:", parseError);
        console.log("Raw Data:", chunks); // Process the 'chunks' string as needed if it's not JSON
        return chunks;// or process it as needed
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function updateContent(data){
  const BlogData = document.getElementById('BlogContentParent')
  
  BlogData.innerHTML = ''
  return data.map((s)=>{
    console.log(s)
    const Blogcontent = document.createElement('div')
    Blogcontent.innerHTML = `<div classname="text">
      <p>${s.content}<p>
    </div>`
    BlogData.appendChild(Blogcontent) 
  })
  
}

// Example usage (in a browser context):
// const apiUrl = 'YOUR_API_ENDPOINT';
// processStream(apiUrl)
// .then(data => {
//   console.log("Data received:", data);
//   // Use the data (e.g., update the DOM) here
// })
// .catch(error => {
//   console.error("An error occurred:", error);
// });




















const BlogDetail = () => {
  return (
    <div>
      &lt;&gt;
      <div>
        <section className="breadcrumb-area">
          <div
            className="breadcrumb-area-bg"
            style={{
              backgroundImage: "url(assets/images/breadcrumb/breadcrumb-1.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="inner-content">
                  <div
                    className="title"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration={1500}
                  >
                    <h2>Blog Details</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Blog 03</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-details-page">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-details-content">
                  <div className="single-blog-style1 single-blog-style1--instyle3">
                    <div className="img-holder">
                      <img
                        src="assets/images/blog/blog-details-img-1.jpg"
                        alt
                      />
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
                        <h3 className="blog-title">
                          The Largest Solid Waste Management Company
                        </h3>
                      </div>
                      <div className="text" id="BlogContentParent" onLoad={processStream()}>
                        <p>
                          There are not many of passages of lorem ipsum
                          available alteration in some form. Donec scelerisque
                          dolor id nunc dictum, interdum gravida. There are not
                          many of passages of lorem ipsum available alteration
                          in some form. Donec scelerisque dolor id nunc dictum,
                          interdum gravida. Sed malesuada quis tellus consequat
                          posuere. Integer efficitur ut arcu ac placerat.
                          Suspendisse pharetra justo et ante consectetur, non
                          scelerisque enim imperdiet. Suspendisse aliquet congue
                          facilisis. In varius neque at gravida posuere. Vivamus
                          a enim quis nunc lacinia sagittis. Curabitur hendrerit
                          placerat massa, in vestibulum est sodales eget. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Maecenas at maximus dui. Aenean maximus venenatis orci
                          ut ullamcorper. Fusce consequat lectus nec ligula
                          laoreet pretium ac nec libero. Nullam ut tempor urna.
                        </p>
                        <p id="Blog">
                          Ut gravida felis vitae mauris suscipit, at facilisis
                          mauris varius. Curabitur interdum malesuada
                          vestibulum. Phasellus augue sapien, euismod ut
                          pharetra ut, tincidunt non metus. Aliquam erat
                          volutpat. Integer egestas maximus bibendum. Curabitur
                          facilisis accumsan risus, vel euismod elit accumsan
                          sit amet. Suspendisse porttitor, ipsum vel sagittis
                          pharetra, nisi purus dignissim velit, sed lobortis
                          sapien ante vitae risus.
                        </p>

                        <button onClick={processStream}>Check fetch</button>
                        <button onClick={fetchresource} className="ps-5">Check</button>

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
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="fa fa-pinterest"
                                aria-hidden="true"
                              />
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
                                  <i
                                    className="fa fa-link"
                                    aria-hidden="true"
                                  />
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
                                  <i
                                    className="fa fa-link"
                                    aria-hidden="true"
                                  />
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
                                  <i
                                    className="fa fa-link"
                                    aria-hidden="true"
                                  />
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default BlogDetail;
