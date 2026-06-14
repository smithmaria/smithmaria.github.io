import { ProjectCard } from './ProjectCard'
import lollaPicksImg from '../../assets/ProjectThumbnails/lolla-picks-tbnl.png'
import pixelPatchImg from '../../assets/ProjectThumbnails/pixel-patch-tbnl.png'
import carmellowCrochetImg from '../../assets/ProjectThumbnails/carmellow-crochet-tbnl.png'
import hot100Img from '../../assets/ProjectThumbnails/hot-100-tbnl.png'
import './Projects.css'

export const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="card-container">
        <ProjectCard
          name='Lolla Picks'
          description='Real-time collaborative festival-voting app built with React, TypeScript, and Vite, styled with Tailwind CSS, backed by Supabase, and tested with Vitest, React Testing and Playwright.'
          liveLink='https://lolla-picks.vercel.app/'
          sourceLink='https://github.com/smithmaria/lolla-picks'
          img={lollaPicksImg}
        />
        <ProjectCard
          name='The Pixel Patch'
          description='An interactive gaming collection built with React featuring multiplayer implementations and external API integrations.'
          liveLink='https://the-pixel-patch.vercel.app/'
          sourceLink='https://github.com/smithmaria/the-pixel-patch'
          img={pixelPatchImg}
        />
        <ProjectCard
          name='Billboard Hot 100 Analysis'
          description='Python data analysis with NumPy and Pandas, and Matplotlib, Seaborn, and Plotly for visualizations.'
          sourceLink='https://github.com/smithmaria/BillboardHot100_DataAnalysis'
          img={hot100Img}
        />
        <ProjectCard 
          name='Carmellow Crochet'
          description='Traditional mutli-page, static site developed with pure HTML and CSS.'
          liveLink='https://homepages.uc.edu/~smit9mt/CarmellowCrochet/index.html'
          img={carmellowCrochetImg}
        />
      </div>
    </section>
  )
}
