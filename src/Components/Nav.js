import React from 'react'

export default function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark-subtle">
                <div className="container-fluid">
                    <a className="navbar-brand bg-dark text-white rounded p-2" href="/">Be a Mern-stack Developer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">HTML/CSS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">JavaScript</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/">React.js</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Back-end
                                </a>
                                <ul className="dropdown-menu active">
                                    <li><a className="dropdown-item" href="/">MongoDB</a></li>
                                    <li><a className="dropdown-item" href="/">Express.js</a></li>
                                    <li><a className="dropdown-item" href="/">Node.js</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
