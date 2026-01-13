export const ProjectCard = ({ name, description, liveLink, hasSourceLink = true, sourceLink, img }) => {
  return (
    <div className="project-card">
      <div className='project-content'>
        <img src={img} alt='project thumbnail' className='card-thumbnail'/>
        <h3>{name}</h3>
        <div className='project-description'>{description}</div>
      </div>
      <div className='project-links'>        
        <a href={liveLink} target='_blank'>LIVE DEMO</a>
        {hasSourceLink && (
          <a href={sourceLink} target='_blank'>VIEW SOURCE</a>
        )}
      </div>
    </div>
  )
}
