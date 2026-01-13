export const LanguageCard = ({ icon, iconAlt, name }) => {
  return (
    <div className="language-card">
      <img src={icon} alt={iconAlt} />
      {name}
    </div>
  )
}
