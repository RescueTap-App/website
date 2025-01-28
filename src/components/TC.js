import React from "react";

const TC = () =>{

    return (
        <>
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
                    <h2>RescueTap - Terms and Condition Page ! </h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Terms and Condition</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End breadcrumb area*/}
        {/*Start Team Style1 Area*/}
        <section className="team-style1-area">
          <div className="container">
            <div className="row">
                <h2>Terms and Condition</h2>
            </div>
          </div>
        </section>
        </>
    )
}

export default TC;