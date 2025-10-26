import '../styles/heading.css'

export default function Heading() {
    return `
        <header>
            <!-- Start Header  -->
            <div class="logo">
                <!-- container for logo -->
                <h1 class="heading-first-name">Bill</h1>
                <h1 class="heading-last-name">Syahputra</h1>
                <!-- end logo container -->
            </div>

            <nav class="heading-nav">
                <nav class="nav-wrapper home"><a class="navigation" href="/">Home</a></nav>
                <nav class="nav-wrapper resume"><a class="navigation" href="/resume/">Resume</a></nav>
            </nav>
            <!-- End Header -->
        </header>
    `
}
