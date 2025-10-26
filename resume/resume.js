import LinkFooter from '../src/components/LinkFooter'
import ResumeDownload from '../src/components/ResumeDownload'
import Heading from '../src/components/Heading'
import '../src/styles/heading.css'
import '../src/styles/resume.css'

document.querySelector('#app').innerHTML = `
    <div class="wrapper">
        ${Heading()}

        <main>
            <!-- Start Main  -->

            <div class="resume-header-wrapper"> 
                <h1 class="title">My Resume</h1>
                ${ResumeDownload()}
            </div>

            <!-- Download Resume -->

            

            <!-- Objective -->
            <section class="objective">
                <h2>Career Objective</h2>
                <p> 
                    A recent graduate from Oakland University with B.S. in Computer Science. During school, 
                    I developed interest and build my skill towards full-stack web development. I’m pursuing
                    the AWS Solutions Architect certification to expand my expertise in designing scalable 
                    and secure applications. I value my creativity to solve problems, collaborate with team,
                    and building solution that benefits both the user and organizations effectively 
                </p>
                </section>

            <!-- Professional Experience -->
            <section class="professional-experience">

                <h2>Professional Experience</h2>

                <div id="experience-1">
                    <h4>Network Engineer — Internship</h4>
                    <h5>September 2023 - Present — Oakland University, Rochester Hills, Michigan</h5>
                    <ul>
                        <li>Installing and configuring new network switches, ethernet cables, fiber optics and SFPs, and
                            Access Points <br> to replace and modernize equipment.</li>
                        <li>Maintaining connectivity of about 500+ IoT devices within university peripherals resulting in reliable, efficient, <br>
                            and seamless data exchange across the network.</li>
                        <li>Collaborating with the school network engineers on advanced tasks, such as network routing,
                            upscale data center topology <br> and diagrams, and transitioning Oakland University’s WiFi from WiFi 5 to WiFi 6E, increasing
                            the data transmission speed <br> average from 250Mbps to 700Mbps.</li>
                    </ul>
                </div>

                <div id="experience-2">
                    <h4>Research Assistant — Dr. Jing Shu Chen</h4>
                    <h5>March 2024 - June 2024 — Oakland University, Rochester Hills, Michigan</h5>
                    <ul>
                        <li>Collaborated on developing a functional full-stack web application for visualizing data
                            analytics in healthcare databases. Technologies used: React, Firebase, Express, React
                            Router, Bootstrap.</li>
                        <li>Designed and iterated the UI/UX in Figma, resulting in an enhanced user experience and
                            increased user satisfaction with the app. </li>
                    </ul>
                </div>

            </section>

            <section class="projects">
                <h2>Projects</h2>
                <div id="project-1">
                    <h4>Hey Kevin — Backend Developer (Capstone Project)</h4>
                    <ul>
                        <li>Developed the backend for a humorous object recognition mobile app that lets users take a picture, identifies the object, and generates witty AI-based descriptions.</li>
                        <li>Built backend microservices with FastAPI and MobileSAM for image segmentation, containerized using Docker and orchestrated via docker-compose.</li>
                        <li>Configured an NGINX reverse proxy on DigitalOcean to securely route API requests and integrated Anthropic Claude for object detection and description generation.</li>
                    </ul>
                </div>
                <div id="project-2">
                    <h4>Firebase Authentication System</h4>
                    <ul>
                        <li>Created a responsive web application that allows users to log in securely using OAuth authentication.</li>
                        <li>Utilized Firebase Authentication for backend login management and implemented a React + Bootstrap frontend for a seamless user experience.</li>
                        <li>Applied best practices for OAuth integration to ensure secure user sessions and smooth navigation.</li>
                    </ul>
                </div>
                <div id="project-3">
                    <h4>Weather App</h4>
                    <ul>
                        <li>Built a responsive web application that enables users to search and view live weather data from any location worldwide.</li>
                        <li>Integrated the Visual Crossing Weather API to fetch real-time conditions and displayed results dynamically using HTML, CSS, JavaScript, and Webpack.</li>
                    </ul>
                </div>
            </section>

            <!-- Education -->
            <section class="education">
                <h2>Education</h2>
                <h4>BS Computer Science, Oakland University, Rochester Hills, MI ● 2023 - 2025</h4>
            </section>


            <!-- End Main -->
        </main>
        
        ${LinkFooter()}
       

        </div>
        `