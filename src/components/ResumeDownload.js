import '../styles/resumeDownload.css'

// resume.pdf lives in public/, so Vite serves it as-is at the site root
export default function ResumeDownload() {
    return `
        <a href="/resume.pdf"
           download="Bill-Syahputra-Resume.pdf"
           class="resume-a">
           Download My Resume
        </a>   
    `
}
