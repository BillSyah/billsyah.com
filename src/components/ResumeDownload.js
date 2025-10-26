import resume from '../assets/resume.pdf'
import '../styles/resumeDownload.css'


export default function ResumeDownload() {
    return `
        <a href="${resume}"
           download="Bill-Syahputra-Resume.pdf"
           class="resume-a">
           Download My Resume
        </a>   
    `
}