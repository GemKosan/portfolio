import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <a href="https://docs.google.com/document/d/1a7oTr0hWdiaCh016am2sVeRw1Io6AYHhywYCdJ_6Mbk/export?format=pdf">
                    <iframe title="Gem's résumé" src="https://docs.google.com/document/d/e/2PACX-1vRgmZ6OkX9Yt4DWyZQueCfKTSeBvEJeNkn-I1Pb41nWiQxm6HE81CNpzisk1y90c_HNBvgrtulcaMTs/pub?embedded=true"
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    ></iframe>
                </a>
            </section>
            <section className="split">
            <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="mailto:gem.kosan77@gmail.com">gem.kosan77@gmail.com</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>(512)745-5338</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-file"></span>
                        <a href="https://www.linkedin.com/in/gemkosan/">
                            Find me on LinkedIn
                        </a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-linkedin"></span>
                        <a href="https://docs.google.com/document/d/1a7oTr0hWdiaCh016am2sVeRw1Io6AYHhywYCdJ_6Mbk/export?format=pdf">
                            Download my resume
                        </a>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact
