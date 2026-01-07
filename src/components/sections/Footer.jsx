import githubIcon from '../../assets/icons/github-icon.svg'
import linkedInIcon from '../../assets/icons/linkedin-icon.svg'
import '../../styles/components/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <a href='https://github.com/smithmaria' target='_blank'>
        <img href="" src={githubIcon} alt='GitHub icon' />
      </a>
      <a href='https://www.linkedin.com/in/smith-maria/' target='_blank'>
        <img src={linkedInIcon} alt='LinkedIn icon'/>
      </a>
    </footer>
  )
}