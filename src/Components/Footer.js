import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="py-5 mx-auto p-2 border bg-dark">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3 ml-4">
                        <h5 className='text-white'>Quick Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5  className='text-white'>Contact Us</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Instagram</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Whatsapp</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">LinkedIn</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Email</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5  className='text-white'>Subscribe to our newsletter</h5>
                            <p className="text-white">Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary bg-light text-black" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top text-white">
                    <p>© 2023 Company, Inc. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}
