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
                <h2>Summary</h2>
                <p>
                    Full-stack software engineer at American Airlines with a B.S. in Computer Science from
                    Oakland University. I build and maintain pilot-facing web applications and backend services
                    with Angular, Java and Spring Boot on Azure, and I build AI-powered CI/CD workflows that
                    automate code quality and security fixes.
                </p>
                </section>

            <!-- Professional Experience -->
            <section class="professional-experience">

                <h2>Professional Experience</h2>

                <div id="experience-aa">
                    <h4>Senior Associate Software Engineer</h4>
                    <h5>November 2025 - Present — American Airlines, Dallas–Fort Worth, TX</h5>
                    <ul>
                        <li>Lead frontend development for the pilot portal used by American Airlines pilots to manage their
                            schedule (Angular, Java, Spring Boot, Azure).</li>
                        <li>Drove the portal’s upgrade across 8 major Angular versions (14 to 22) in under a year, shipping
                            incrementally through production releases while delivering feature work.</li>
                        <li>Designed AI-powered GitHub workflows that automatically fix code quality issues and vulnerable
                            dependencies on pull requests; piloted on my team and centralized into a shared repository for
                            adoption across teams.</li>
                        <li>Own production releases and hotfixes for the portal, and reviewed 170+ pull requests across 7
                            repositories in my first year.</li>
                    </ul>
                </div>

                <div id="experience-1">
                    <h4>Network Engineer Intern</h4>
                    <h5>September 2023 - May 2025 — Oakland University, Rochester Hills, MI</h5>
                    <ul>
                        <li> Installed and configured network switches, access points, fiber and SFPs to modernize campus network equipment.</li>
                        <li>Troubleshot and installed cabling and wiring to keep 500+ IoT devices across campus connected to the network.</li>
                        <li>Provisioned Cisco phones and virtual phone access for campus staff, including setting up, editing and resetting accounts and PINs.</li>
                    </ul>
                </div>

                <div id="experience-2">
                    <h4>Research Assistant — Dr. Jing Shu Chen</h4>
                    <h5>March 2024 - June 2024 — Oakland University, Rochester Hills, MI</h5>
                    <ul>
                        <li>Co-developed a full-stack web app for visualizing healthcare data analytics (React, Express,
                            Firebase, Bootstrap).</li>
                        <li>Designed and iterated the app’s UI/UX in Figma.</li>
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
                    <h4>BillSyah.com — Portfolio Website</h4>
                    <ul>
                        <li>Built a personal portfolio website with Vite to showcase my projects and experience.</li>
                        <li>Deployed the site on a DigitalOcean Droplet with NGINX and a GitHub Actions CI/CD pipeline.</li>
                    </ul>
                </div>
            </section>

            <!-- Technical Skills -->
            <section class="skills">
                <h2>Technical Skills</h2>
                <ul>
                    <li><b>Languages:</b> Java, TypeScript, JavaScript, Python, SQL, HTML, CSS</li>
                    <li><b>Frameworks & Libraries:</b> Spring Boot, Angular, FastAPI, Node.js, Express.js, React, Bootstrap</li>
                    <li><b>Databases:</b> MySQL, MongoDB, Firebase</li>
                    <li><b>Cloud & DevOps:</b> Azure, AWS, DigitalOcean, Docker, Kubernetes, Terraform, GitHub Actions, NGINX</li>
                    <li><b>APIs & Tools:</b> REST APIs, OAuth, JWT, Git, GitHub, GitHub Copilot, SonarQube, Postman</li>
                </ul>
            </section>

            <!-- Certifications -->
            <section class="certifications">
                <h2>Certifications</h2>
                <h4>AWS Certified Cloud Practitioner ● September 2025</h4>
            </section>

            <!-- Education -->
            <section class="education">
                <h2>Education</h2>
                <h4>B.S. Computer Science, Oakland University, Rochester Hills, MI ● May 2025</h4>
            </section>


            <!-- End Main -->
        </main>
        
        ${LinkFooter()}
       

        </div>
        `