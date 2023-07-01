import React from 'react'

export default function Cards() {
  return (
    <div>
      <h1 className="mx-2">What makes a complete website?</h1>
    <div className="d-flex p-2">
        <div id="carouselExampleCaptions" className="carousel slide w-50 p-3 h-auto d-inline-block">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner rounded">
                <div className="carousel-item active">
                    <img src="https://picsum.photos/200" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-white">HTML CSS JavaScript React.js</h5>
                        <p>Tools and language used in developing front-end part of a website.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/200" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-white">MongoDB Express.js Node.js</h5>
                        <p className="text-white">Languages used in developing back-end part of a website.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/200" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5 className="text-white">BootStrap</h5>
                        <p className="text-white">Tool used in developing components of a website.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden .text-body-tertiary">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        <div className="d-flex p-2 mx-4">
            <div className="card mx-5">
                <img src={`https://picsum.photos/200`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Front-end</h5>
                    <p className="card-text">In this, we learn to develop the client side of the website.</p>
                    <a href="/" className="btn bg-dark-subtle">Start Learning</a>
                </div>
            </div>
            <div className="card mx-4">
                <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Back-end</h5>
                    <p className="card-text">In this, we learn to develop the server side of the website.</p>
                    <a href="/" className="btn bg-dark-subtle">Start Learning</a>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
