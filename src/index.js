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
                <img src="${myImage}" alt="Bill Syahputra">
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
                        Hello! My name is Bill Syahputra, and I’m a software engineer at American Airlines, where I build
                        the web portal pilots use to manage their schedules. I work across the stack with Angular, Java and
                        Spring Boot on Azure, and I build AI-powered workflows that automate code quality and security fixes.
                    </p>

                    <p>
                        I graduated from Oakland University with a B.S. in Computer Science. I enjoy taking ideas from concept
                        to deployment, modernizing systems, and collaborating with my team to build impactful solutions.
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
