
import RowTeamList from '../../common/RowTeamList/RowTeamList.jsx'

import './SimulatorClassification.css'

export default function SimulatorClassification({ competitionData }) {
    return (
        <section className="classification">
            <p>Tabela</p>
            <table>
                <thead>
                    <tr>
                        <th>CLASSIFICAÇÃO</th>
                        <th>P</th>
                        <th>J</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                        <th>GP</th>
                        <th>GC</th>
                        <th>SG</th>
                        <th>%</th>
                        <th>ÚLT.JOGOS</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {teams.map((team, idx) => (
                        <RowTeamList
                            team={team}
                            idx={idx}
                        />
                    ))} */}
                </tbody>
            </table>
            <ul className="legends">
                <li><div className="square blue"></div>libertadores</li>
                <li><div className="square turquoise"></div>pré-libertadores</li>
                <li><div className="square green"></div>sul-americana</li>
                <li><div className="square red"></div>rebaixados</li>
                <li><div className="arrow up"></div>subiu</li>
                <li><div className="arrow down"></div>caiu</li>
                <li><div className="square gray"></div>manteve</li>
                <li><div className="dot green"></div>vitoria</li>
                <li><div className="dot gray"></div>empate</li>
                <li><div className="dot red"></div>derrota</li>
            </ul>
        </section>
    )
}

