import { ProjectCard } from './ProjectCard'
import pixelPatchImg from '../../assets/ProjectThumbnails/pixel-patch-tbnl.png'
import carmellowCrochetImg from '../../assets/ProjectThumbnails/carmellow-crochet-tbnl.png'
import './Projects.css'

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="card-container">
        <ProjectCard 
          name='The Pixel Patch'
          description='An interactive gaming collection built with React featuring multiplayer implementations and external API integrations.'
          liveLink='https://the-pixel-patch.vercel.app/'
          sourceLink='https://github.com/smithmaria/the-pixel-patch'
          img={pixelPatchImg}
        />
        <ProjectCard 
          name='Carmellow Crochet'
          description='Traditional mutli-page, static site developed with pure HTML and CSS.'
          liveLink='https://homepages.uc.edu/~smit9mt/CarmellowCrochet/index.html'
          img={carmellowCrochetImg}
          hasSourceLink={false}
        />
      </div>
    </section>
  )
}
