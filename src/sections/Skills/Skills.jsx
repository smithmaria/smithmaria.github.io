import { SkillCategory } from "./SkillCategory"
import './skills.css'

export const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <SkillCategory
          title='Languages'
          skills={['Python', 'Java', 'C#', 'JavaScript', 'SQL', 'HTML/CSS']}
        />
        <SkillCategory
          title='Frameworks & Libraries'
          skills={['.NET', 'React', 'React Native', 'Pandas', 'NumPy', 'Matplotlib']}
        />
        <SkillCategory
          title='Tools & Platforms'
          skills={['Git', 'Postman', 'Swagger', 'Firebase']}
        />
        <SkillCategory
          title='AI Tools'
          skills={['Claude Code']}
        />
      </div>
    </section>
  )
}
