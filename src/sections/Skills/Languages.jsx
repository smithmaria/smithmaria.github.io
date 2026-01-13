import { LanguageCard } from "./LanguageCard"
import pythonIcon from "../../assets/icons/pythonIcon.svg"
import javaIcon from '../../assets/icons/javaIcon.svg'
import cSharpIcon from '../../assets/icons/cSharpIcon.svg'
import sqlIcon from '../../assets/icons/sqlIcon.svg'
import htmlIcon from '../../assets/icons/htmlIcon.svg'
import './skills.css'

export const Languages = () => {
  return (
    <section id="skills">
      <h2>Languages</h2>
      <div className="languages-container">
        <LanguageCard 
          icon={pythonIcon}
          iconAlt='python icon'
          name='Python'
        />
        <LanguageCard
          icon={javaIcon}
          iconAlt='java icon' 
          name='Java'
        />
        <LanguageCard 
          icon={cSharpIcon}
          iconAlt='c# icon'
          name='C#'
        />
        <LanguageCard 
          icon={sqlIcon}
          iconAlt='database icon'
          name='SQL'
        />
        <LanguageCard 
          icon={htmlIcon}
          iconAlt='code tag icon'
          name='HTML/CSS'
        />
      </div>
    </section>
  )
}
