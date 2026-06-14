export const ProjectCard = ({ name, description, liveLink, sourceLink, img }) => {
  return (
    <div className="project-card">
      <img src={img} alt='project thumbnail' className='card-thumbnail'/>
      <div className='project-body'>
        <div className='project-content'>
          <h3>{name}</h3>
          <div className='project-description'>{description}</div>
        </div>
        <div className='project-links'>
          {liveLink &&
            <a href={liveLink} target='_blank'>LIVE DEMO</a>
          }
          {sourceLink && (
            <a href={sourceLink} target='_blank'>VIEW SOURCE</a>
          )}
        </div>
      </div>
    </div>
  )
}
