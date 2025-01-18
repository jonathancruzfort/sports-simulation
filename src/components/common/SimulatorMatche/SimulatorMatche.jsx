import './SimulatorMatche.css'
export default function SimulatorMatche({ matche, teams }) {
    const homeTeamId = teams.find(({id}) => id === matche.homeTeamId)
    const visitingTeamId = teams.find(({id}) => id === matche.visitingTeamId)

    return (
        <div className="matche">
            <div className="matche_infor">
                <div className="infor_local">{matche.location}</div>
                <div className="infor_time">{matche.date} • {matche.day} • {matche.hour}</div>
            </div>
            <div className="matche_teams">
                <div className="team">
                    <div className="abbreviation">{homeTeamId.abbreviation}</div>
                    <div className="shield"><img src={`../src/assets/${homeTeamId.shield}`} alt="escudo do Gremio" /></div>
                    <div className="score">{matche.score[0]}</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                    <div className="score">{matche.score[1]}</div>
                    <div className="shield"><img src={`../src/assets/${visitingTeamId.shield}`} alt="escudo do Corinthians" /></div>
                    <div className="abbreviation">{visitingTeamId.abbreviation}</div>
                </div>
            </div>
        </div>
    )
}
