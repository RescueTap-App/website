import React from "react"


const Account = ()=>{
    return(
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
                    <h2>RescueTap - Account Deletion! </h2>
                  </div>
                  <div className="breadcrumb-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="active">Account Deletion</li>
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
                <h2>ACCOUNT DELETION FOR THE RESCUETAP APP</h2>
                <div>
                Delete Your Account
                    We're sorry to see you go! Deleting your account will permanently erase all your personal information, medical data, and app activity from RescueTap. Before proceeding, please note the following:
                    
                    What Happens When You Delete Your Account:
                    <ul>
                        <li>Permanent Deletion: All your profile details, emergency contacts, and medical history will be permanently removed from our database.</li>
                        <li>Lost Access: You will no longer be able to access RescueTap services, including emergency response features and first aid resources.</li>
                        <li>No Recovery: Once deleted, this action cannot be undone, and your data cannot be restored.</li>
                    </ul>
                    <br />
                    <ol className="">
                        <strong>Steps to Delete Your Account:</strong>
                        <li>Open the RescueTap app.</li>
                        <li> Navigate to Profile.</li>
                        <li>Select Settings.</li>
                        <li>Select Delete Account.</li>
                        <li>A confirmation screen will appear to ensure you want to proceed.</li>
                        <li>Select Yes, Delete.</li>
                        Still Need Help?
                        If you have any concerns or questions before deleting your account, feel free to contact our support team at support@rescuetap.com. We’re happy to assist you.

                    </ol>
                    
                    
                    
                    
                   
                    
                    
                    
                    
                </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Account;