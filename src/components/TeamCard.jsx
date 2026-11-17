// showcase of a single team member
function TeamCard({member}) {
    return (
        <div className="team-card">
            <h3 className="teamcard-member-name">
                {member.name}
            </h3>
            <p className="teamcard-member-role">
                {member.role}
            </p>
        </div>
    );
}

export default TeamCard;