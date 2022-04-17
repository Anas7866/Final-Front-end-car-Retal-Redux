import React from 'react'
import "../Productdetails/Productdetails.css"
import Navbarr from '../Navbar/Navbarr'
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function Aboutus() {
    return (
        <div className="col-sm-12 p-0 background-gradiant-booking">
            <Navbarr />
            <div className='col-sm-12 pt-5 pb-5'>
                <div className="container p-0 pb-1" style={{ backgroundColor: "white", borderRadius: "30px" }}>
                    <div className='col-sm-12 text-center '>
                        <h3 className='pt-4 '>About us</h3>
                    </div>
                    <div className='col-sm-12 text-center'>
                        <img src="images/line.png" className='img-fluid' />
                    </div>
                    <div className="col-sm-12 text-center ">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lacus id est volutpat, ac rhoncus velit elementum. Vestibulum sed tempor elit. Sed feugiat dui ac lectus
                            condimentum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas feugiat, lacus ac luctus efficitur, sem erat gravida tortor,
                            at sagittis velit elit eu ante. Curabitur finibus enim in dapibus commodo. Morbi posuere elementum lacus id cursus. Sed vestibulum turpis dolor. Mauris sed iaculis risus. Aenean
                            fermentum scelerisque tellus at semper. Morbi hendrerit condimentum justo, nec accumsan nunc porttitor tincidunt. Nullam pellentesque finibus sem, at accumsan nibh tincidunt eu.
                            Morbi vestibulum congue risus sit amet facilisis. Morbi sollicitudin sit amet odio quis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lacus id est volutpat, ac rhoncus velit elementum. Vestibulum sed tempor elit. Sed feugiat dui ac lectus
                            condimentum fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas feugiat, lacus ac luctus efficitur, sem erat gravida tortor,
                            at sagittis velit elit eu ante. Curabitur finibus enim in dapibus commodo. Morbi posuere elementum lacus id cursus. Sed vestibulum turpis dolor. Mauris sed iaculis risus. Aenean
                            fermentum scelerisque tellus at semper. Morbi hendrerit condimentum justo, nec accumsan nunc porttitor tincidunt. Nullam pellentesque finibus sem, at accumsan nibh tincidunt eu.
                            Morbi vestibulum congue risus sit amet facilisis. Morbi sollicitudin sit amet odio quis consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    <div className='col-sm-12 p-0 ' style={{ backgroundColor: "#C8D8E4", marginBottom: "5%" }}>
                        <div className='row mt-5'>
                            <div className="col-sm-3  m-auto">
                                <div className='col-sm-12 '>
                                    <img src="images/kindpng_5013421.png" className='img-fluid' />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className='col-sm-12 text-center '>
                                    <h3 className='pt-4 '>About us</h3>
                                </div>
                                <div className='col-sm-12 text-center '>
                                    <img src="images/line.png" className='img-fluid' />
                                </div>
                                <div className='col-sm-12 text-center'>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lacus id est volutpat,
                                        ac rhoncus velit elementum. Vestibulum sed tempor elit. Sed feugiat dui ac lectus condimentum fringilla.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Maecenas feugiat, lacus ac luctus efficitur, sem erat gravida tortor,
                                        at sagittis velit elit eu ante.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lacus id est volutpat,
                                        ac rhoncus velit elementum. Vestibulum sed tempor elit. Sed feugiat dui ac lectus condimentum fringilla.
                                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                        Maecenas feugiat, lacus ac luctus efficitur, sem erat gravida tortor,
                                        at sagittis velit elit eu ante.</p>
                                </div>
                            </div>
                            <div className="col-sm-3" style={{ backgroundColor: "#2B6777" }}></div>
                        </div>
                    </div>
                    <div className='col-sm-12 text-center'>
                        <h2>Subscribe For Newsletter</h2>
                    </div>
                    <div className='col-sm-12 text-center '>
                        <img src="images/line.png" className='img-fluid' />
                    </div>
                    <div className='col-sm-12 text-center'>
                        <p style={{ paddingLeft: "20%", paddingRight: "20%" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse blandit lacus id est volutpat,
                            ac rhoncus velit elementum. Vestibulum sed tempor elit. Sed feugiat dui ac lectus condimentum fringilla.
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

                        </p>
                    </div>
                    <div className='col-sm-12 text-center mb-5 pt-3 ' style={{ paddingLeft: "35%", paddingRight: "35%" }}>
                        <div className="input-group">
                            <input style={{backgroundColor:"lightgrey"}} type="text" className="form-control" placeholder="Submit your email address" aria-label aria-describedby="basic-addon1" />
                            <div className="input-group-append">
                                <button className="btn btn-success" type="button" style={{backgroundColor:"#2B6777"}}>Submit</button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Aboutus
