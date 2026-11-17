import './App.css'
import Header from './components/Header'
import TeamList from './components/TeamList'
import TeamCard from './components/TeamCard'
import Footer from './components/Footer'

function App(){
  // being App is the parent/root component then I will load my date
  // i.e. data should be fetched on the parent component

  // data lives at the top of the tree ("single source of the truth i.e. reduces data accessibility by restricting multiple data fetches in different components")
  // data once fetched can now be shared to other components
  const title = "Team Members"
  const slogan = "We are a team of highly skilled professionals"
  const teamMembers = [
    {id: 1, name: "Diana Muriuki", role: "Student"},
   {id: 2, name: "John Doe", role: "Accountant"},
    {id: 3, name: "Jane Doe", role: "Lawyer"},
   ]

  return(
    //nest other components inside this jsx return
    // rule nest return inside a container (react fragments) <></> or div/sematics
    //className is an attribute for element selection for css styling
    <div className="app">
      {/* place components in the order of appearance */}
      {/* to call a component use the component name inside the container */}
      {/* share of info from p[arent to child is called prop drilling */}
      {/* a prop is more of an attribute passed to a component */}
      <Header title={title} subtitle={slogan}/>
      <TeamList members={teamMembers}/>
      <Footer year={2026}/>
      


    </div>
  )
  
}


export default App