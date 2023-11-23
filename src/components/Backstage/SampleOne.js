import React from 'react'
import ChartjsOne from '../Tutorial/ChartjsOne'
import './SampleOne.css'

function SampleOne() {
    return (
        
        <div className="w-100 p-3 background">
            <div className="card background2">
                <h1 className='text-start mx-3 title'>Sprint/Stories</h1>
                <div className="row p-3">
                    <div className="col-sm-4 mb-3 mb-sm-0">

                        <div className="row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <p className="card-text text-wrap">
                                            <span className="stories1"># of Stories{' '}</span><span className='stories2'>42</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text text-wrap"># of Bugs 02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text text-wrap">Assigned stories 12</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-body">
                                        <p className="card-text text-wrap">Completed Stories 08.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <ChartjsOne/>
                        </div>
                    </div>
                    <div className="col-sm-5    ">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SampleOne
