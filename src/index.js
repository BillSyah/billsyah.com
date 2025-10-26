import myImage from './assets/profile.png'
import LinkFooter from './components/LinkFooter'
import Heading from './components/Heading'
import './styles/index.css'

document.querySelector('#app').innerHTML = `
    <div class="wrapper">

        ${Heading()}

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
                        Hello! My name is Bill Syahputra, and I graduated from Oakland University with a B.S. in Computer Science. 
                        I’m passionate about backend web development—building scalable, efficient systems that deliver great user 
                        experiences. I enjoy taking ideas from concept to deployment, optimizing systems, and collaborating to 
                        create impactful solutions.
                    </p>

                    <p>
                        My goal is to become a seasoned backend developer and continue deepening my expertise in backend technologies 
                        to create high-performance APIs and microservices.
                    </p>
                    
                    <p>
                        To know more about me professionally, please visit my 
                        <a href="/resume/">Resume Page!</a></p>
                    </p>


                    
                </section>
            </div>


            <!-- End Main -->
        </main>

       ${LinkFooter()}
  </div>
`
