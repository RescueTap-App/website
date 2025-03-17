import React from "react"
import { useState } from "react";
import { PaystackButton } from "react-paystack";


const Subscription = ()=>{
    
    const userID = URLSearchParams.get(userId)
    const compressedDate = {}

    
    return(
        <>
            <div>
                <section className="breadcrumb-area">
            <div
                className="breadcrumb-area-bg"
                style={{
                backgroundImage: "url(assets/images/breadcrumb/breadcrumb-6.jpg)",
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
                        <h2>Subscription</h2>
                    </div>
                    <div className="breadcrumb-menu">
                        <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li className="active">Subscription</li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
                </section>
                <section className="faq-page-one">
                    <div className="container">
                        <div className="row justify-center">
                        <div className="col-xl-6">
                            <div className="bg-gray-100 p-2">
                                <div>
                                    <h2>Subscription</h2>
                                    <p>Choose your payment plan to access all Rescuetap Features.</p>
                                    <small>We have curated special offers for you. Find what you need here</small>
                                    <form>
                                        <div className="mt-4 mb-2">
                                            <button className="p-3 border rounded-sm bg-red-600 text-white w-full">
                                                <div className="flex justify-between gap-4 items-start text-white">
                                                    <h2 className="text-white">One time Annual <br /> Payment (Save 20%)</h2>
                                                    <input type="radio" className="mt-3"/>
                                                </div>
                                                <div className="flex justify-between">
                                                    <small>Save up to 20% per year</small>
                                                    <div>
                                                        <h4 className="text-white">N5000</h4>
                                                        <small>Per Year</small>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                        <div className="">
                                        <button className="p-3 border rounded-sm w-full bg-white">
                                            <div className="flex justify-between gap-4 items-start text-white">
                                                <h2 className="">Monthly Payment</h2>
                                                <input type="radio" className="mt-3"/>
                                            </div>
                                            <div className="flex justify-between">
                                                <small>N7200 per year if you choose to pay monthly</small>
                                                <div>
                                                    <h4 className="">N600</h4>
                                                    <small>Per Month</small>
                                                </div>
                                            </div>
                                        </button>
                                        </div>

                                        <div className="mt-10">
                                            {/* <button className="bg-red-600 text-white w-full p-1 border rounded-md">Confirm Plan</button> */}
                                            <PaystackButton className="bg-red-600 text-white w-full p-1 border rounded-md"/>
                                        </div>
                                    </form>
                                </div>
                             </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <div className="h-full w-full flex justify-center items-center">
                <div className="bg-grey-900">
                    <div>
                        <h2>Subscription</h2>
                        <p>Choose your payment plan to access all Rescuetap Features.</p>
                        <small>We have curated special offers for you. Find what you need here</small>

                        <div className="mt-4 mb-2 p-3 border rounded-sm bg-red-600">
                            <button>
                                <div className="flex justify-between">
                                    <h2>One time Annual <br /> Payment (Save 20%)</h2>
                                    <input type="checkbox" />
                                </div>
                                <div className="flex justify-between">
                                    <small>Save up to 20% per year</small>
                                    <div>
                                        <h4>N5000</h4>
                                        <small>Per Year</small>
                                    </div>
                                </div>
                            </button>
                        </div>
                        <div className="p-3 border rounded-sm">

                        </div>

                        <div>
                            <button className="">Confirm Plan</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Subscription ;