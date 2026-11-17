import TeamCard from './TeamCard'

function TeamList({members}) {
    return (
        <section className="team-list">
            {/* loop members array and showcase within the team card*/}
            {/* .map method - iterate the list implementing jsx function to each member in the list */}
            {/* {} enable us to write js operations inside html */}
            {/* when dealing with lists in react we need to provide a unique key for each item in the list */}
            {members.map((member) => (
                <TeamCard member={member} key={member.id}/> 
            ))}
        </section>
    );
}

export default TeamList;