import { useState, useEffect } from 'react'

import SimulatorMatche from '../../common/SimulatorMatche/SimulatorMatche'

import './SimulatorRounds.css'

export default function SimulatorRounds({
    selectedRound,
    setSelectedRound,
    competitionData,
}) {

    const [roundData, setRoundData] = useState(competitionData.competition.rounds.find(({round}) => round === selectedRound))

    useEffect(() => {
        setRoundData(competitionData.competition.rounds.find(({round}) => round === selectedRound))
        console.log(roundData);
    }, [])

    return (
        <section className="rounds">
            <p>Jogos</p>
            <div className="round-selector">
                <img
                    src="../src/assets/horizontal-arrow.svg"
                    alt="previous round"
                />
                <p>{roundData.round}ª RODADA</p>
                <img
                    src="../src/assets/horizontal-arrow.svg"
                    alt="next round"
                />
            </div>
            <div className="round-matches">
                {roundData.matches.map(matche => 
                    <SimulatorMatche
                        matche={matche} 
                        key={matche.id}
                        teams={competitionData.teams}
                    />
                )}
            </div>
        </section>
    )
}
