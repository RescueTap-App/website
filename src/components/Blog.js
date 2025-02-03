"use client"
import React from "react";

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
      localStorage.setItem(key, jsonData)

      updateBlog(jsonData)
      const blogContent = document.createElement('p')
      const BlogData = JSON.parse(jsonData)
     
      console.log(BlogData)
      
      return jsonData;
    } catch (jsonError) {
       console.error("Response is not valid JSON:", jsonError);

      // const reader = response.body.getReader();
      // let chunks = '';

      // while (true) {
      //   const { done, value } = await reader.read();
      //   if (done) {
      //     break;
      //   }
      //   chunks += new TextDecoder().decode(value);
      // }
      // try {
      //   const parsedData = JSON.parse(chunks);  // Try parsing
      //   console.log("Parsed Data (if JSON):", parsedData);
      //   return parsedData;
      // } catch (parseError) {
      //   console.error("Data is not JSON:", parseError);
      //   console.log("Raw Data:", chunks); // Process the 'chunks' string as needed if it's not JSON
      //   return chunks;// or process it as needed
      // }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function updateBlog(data){
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

const Blog = () => {
  return (
    <>
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
                    <h2>Blog 01</h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Blog 01</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Blog Page One*/}
        <section className="blog-page-one">
          <div className="container">
            <div className="row">
              {/*Start Single Blog Style1*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="single-blog-style1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={1000}
                >
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-v1-1.jpg" alt />
                  </div>
                  <div className="text-holder">
                    <div className="meta-info">
                      <p>
                        <span className="icon-calendar" /> 20 Sep, 2021
                      </p>
                    </div>
                    <h3>
                      <a href="/BlogDetails">
                        Trusted, International Air Ambulance Company
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <div className="btn-box">
                      <a href="/BlogDetails">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Blog Style1*/}
              {/*Start Single Blog Style1*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="single-blog-style1"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-v1-2.jpg" alt />
                  </div>
                  <div className="text-holder">
                    <div className="meta-info">
                      <p>
                        <span className="icon-calendar" /> 20 Sep, 2021
                      </p>
                    </div>
                    <h3>
                      <a href="/BlogDetails">
                        Working for the ambulance service is much more than...
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <div className="btn-box">
                      <a href="/BlogDetails">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Blog Style1*/}
              {/*Start Single Blog Style1*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="single-blog-style1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={1000}
                >
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-v1-3.jpg" alt />
                  </div>
                  <div className="text-holder">
                    <div className="meta-info">
                      <p>
                        <span className="icon-calendar" /> 20 Sep, 2021
                      </p>
                    </div>
                    <h3>
                      <a href="/BlogDetails">
                        A Non-Emergency Trusted Ambulance services
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <div className="btn-box">
                      <a href="/BlogDetails">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Blog Style1*/}
              {/*Start Single Blog Style1*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="single-blog-style1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={1000}
                >
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-v1-4.jpg" alt />
                  </div>
                  <div className="text-holder">
                    <div className="meta-info">
                      <p>
                        <span className="icon-calendar" /> 20 Sep, 2021
                      </p>
                    </div>
                    <h3>
                      <a href="/BlogDetails">
                        Trusted, International Air Ambulance Company
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <div className="btn-box">
                      <a href="/BlogDetails">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Blog Style1*/}
              {/*Start Single Blog Style1*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="single-blog-style1"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration={1500}
                >
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-v1-5.jpg" alt />
                  </div>
                  <div className="text-holder">
                    <div className="meta-info">
                      <p>
                        <span className="icon-calendar" /> 20 Sep, 2021
                      </p>
                    </div>
                    <h3>
                      <a href="/BlogDetails">
                        Working for the ambulance service is much more than...
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <div className="btn-box">
                      <a href="/BlogDetails">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Blog Style1*/}
              {/*Start Single Blog Style1*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="single-blog-style1"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration={1000}
                >
                  <div className="img-holder">
                    <img src="assets/images/blog/blog-v1-6.jpg" alt />
                  </div>
                  <div className="text-holder">
                    <div className="meta-info">
                      <p>
                        <span className="icon-calendar" /> 20 Sep, 2021
                      </p>
                    </div>
                    <h3>
                      <a href="/BlogDetails">
                        A Non-Emergency Trusted Ambulance services
                      </a>
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet, coned sectetur notte elit sed
                      do.
                    </p>
                    <div className="btn-box">
                      <a href="/BlogDetails">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
              {/*End Single Blog Style1*/}
            </div>
            <div className="row">
              <div className="col-xl-12">
                <ul className="styled-pagination text-center clearfix">
                  <li className="arrow prev">
                    <a href="#">
                      <span className="icon-right-arrow left" />
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li className="arrow next">
                    <a href="#">
                      <span className="icon-right-arrow" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
            <button onClick={processStream} className="ps-5">Read Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
