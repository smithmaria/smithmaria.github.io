export const SkillCategory = ({ title, skills }) => {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <ul className={skills.length > 3 ? 'skill-list two-col' : 'skill-list'}>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
