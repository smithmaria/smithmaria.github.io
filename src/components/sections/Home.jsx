import '../../styles/components/home.css'

export const Home = () => {
  return (
    <section id='home'>
      <div className='home-container'>
        <h1>Maria Smith</h1>
        <hr />
        <div className='home-description'>
          <div><i>Student, University of Cincinnati</i></div>
          <div>
            <p>Software Application Development</p>
            <p>IT - Data Technologies</p>
          </div>
        </div>
        <button className='resume-button'>Resume</button>
      </div>
    </section>
  )
}