import myImage from './assets/profile.png'
import PersonalLink from './components/PersonalLink'
import './styles/index.css'

document.querySelector('#app').innerHTML = `
    <div class="wrapper">
        <header>
            <!-- Start Header  -->
            <div class="logo">
                <!-- container for logo -->
                <h1 class="heading-first-name">Bill</h1>
                <h1 class="heading-last-name">Syahputra</h1>
                <!-- end logo container -->
            </div>

            <nav class="heading-nav">
                <nav class="nav-wrapper home"><a class="navigation" href="/main/">Home</a></nav>
                <nav class="nav-wrapper resume"><a class="navigation" href="/resume/">Resume</a></nav>
            </nav>
            <!-- End Header -->
        </header>

        <main>
            <!-- Start Main  -->
            <div class="container-profile">
                <img src="${myImage}" alt="my-picture">
                <div id="my-quote-wrapper">
                    <h4 class="my-quote">
                        <i>"The journey of a thousand miles begin with a single step."</i>
                        <br>
                        <i class="quotation-credit">-Lao Tzu</i>
                    </h4>
                </div>

            </div>

            <div class="container-introduction">
                
                <section class="container-paragraph">
                    <p> 
                        Hello! My name is Bill Syahputra, and I recently graduated from Oakland University with a B.S. in Computer Science. 
                        I’m passionate about backend web development and have been honing the skills needed to build reliable, scalable, 
                        and efficient server-side systems that deliver great user experiences and support enterprise-grade applications. 
                        I enjoy taking ideas from concept to deployment, optimizing systems along the way, and collaborating to deliver 
                        impactful solutions.
                    </p>

                    <p>
                        I gained a deep understanding of network infrastructure, servers, and system configuration during my time as a 
                        Student Network Engineer with OU's University Technology Services team. This hands-on experience allowed me to 
                        design and deploy robust backend architectures, including my senior capstone project, <em>Hey Kevin</em> — a 
                        humorous object recognition app integrating image segmentation, API integrations, and cloud deployment.
                    </p>

                    <p>
                        My goal is to become a seasoned backend developer and continue deepening my expertise in backend technologies 
                        to create high-performance APIs and microservices.
                    </p>
                    
                    <p>
                        To know more about me professionally, please visit my 
                        <a href="./src/pages/resume/index.html">Resume Page!</a></p>
                    </p>


                    
                </section>
            </div>


            <!-- End Main -->
        </main>

       ${PersonalLink()}
  </div>
`
