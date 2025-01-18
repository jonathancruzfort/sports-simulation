import { useState } from 'react'

import SimulatorHeader from '../../layout/SimulatorHeader/SimulatorHeader'
import SimulatorClassification from '../../layout/SimulatorClassification/SimulatorClassification'
import SimulatorRounds from '../../layout/SimulatorRounds/SimulatorRounds'

import './Simulator.css'

export default function Simulator() {
  const [selectedRound, setSelectedRound] = useState('2')

  return (
    <div className='container'>
      <SimulatorHeader />
      <main>
        <SimulatorClassification
          competitionData={initialCompetitionData}
        />
        <SimulatorRounds
          competitionData={initialCompetitionData}
          selectedRound={selectedRound}
          setSelectedRound={setSelectedRound}
        />
      </main>
    </div>
  )
}

const initialCompetitionData = {
  teams: [
    {
      id: '2',
      description: 'Palmeiras',
      name: 'Palmeiras',
      abbreviation: 'PAL',
      shield: 'palmeiras.svg',
      played: 7,
      won: 2,
      draw: 4,
      defeats: 1,
    },
    {
      id: '3',
      description: 'Flamengo',
      name: 'Flamengo',
      abbreviation: 'FLA',
      shield: 'flamengo.svg',
      played: 7,
      won: 2,
      draw: 5,
      defeats: 0,
    },
    {
      id: '4',
      description: 'Fortaleza',
      name: 'Fortaleza',
      abbreviation: 'FOR',
      shield: 'fortaleza.svg',
      played: 7,
      won: 1,
      draw: 4,
      defeats: 2,
    },
    {
      id: '9',
      description: 'Cruzeiro',
      name: 'Cruzeiro',
      abbreviation: 'CRU',
      shield: 'cruzeiro.svg',
      played: 7,
      won: 0,
      draw: 4,
      defeats: 1,
    },
    {
      id: '5',
      description: 'Internacional',
      name: 'Internacional',
      abbreviation: 'INT',
      shield: 'internacional.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '1',
      description: 'Botafogo de Futebol e Regatas',
      name: 'Botafogo',
      abbreviation: 'BOT',
      shield: 'botafogo.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '6',
      description: 'São Paulo',
      name: 'São Paulo',
      abbreviation: 'SAO',
      shield: 'sao-paulo.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '7',
      description: 'Corinthians',
      name: 'Corinthians',
      abbreviation: 'COR',
      shield: 'corinthians.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '8',
      description: 'Bahia',
      name: 'Bahia',
      abbreviation: 'BOT',
      shield: 'bahia.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '10',
      description: 'Vasco',
      name: 'Vasco',
      abbreviation: 'VAS',
      shield: 'vasco.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '11',
      description: 'Vitória',
      name: 'Vitória',
      abbreviation: 'VIT',
      shield: 'vitoria.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '12',
      description: 'Atlético-MG',
      name: 'Atlético-MG',
      abbreviation: 'CAM',
      shield: 'atletico-mg.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '13',
      description: 'Fluminense',
      name: 'Fluminense',
      abbreviation: 'FLU',
      shield: 'fluminense.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '14',
      description: 'Grêmio',
      name: 'Grêmio',
      abbreviation: 'GRE',
      shield: 'gremio.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '20',
      description: 'Cuiabá',
      name: 'Cuiabá',
      abbreviation: 'CUI',
      shield: 'cuiaba.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '16',
      description: 'Bragantino',
      name: 'Bragantino',
      abbreviation: 'RBB',
      shield: 'bragantino.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '17',
      description: 'Athletico-PR',
      name: 'Athletico-PR',
      abbreviation: 'CAP',
      shield: 'atletico-pr.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '18',
      description: 'Criciúma',
      name: 'Criciúma',
      abbreviation: 'CRI',
      shield: 'criciuma.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '19',
      description: 'Atlético-GO',
      name: 'Atlético-GO',
      abbreviation: 'ACG',
      shield: 'atletico-go.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
    {
      id: '15',
      description: 'Juventude',
      name: 'Juventude',
      abbreviation: 'JUV',
      shield: 'juventude.svg',
      played: 7,
      won: 3,
      draw: 3,
      defeats: 1,
    },
  ],
  competition: {
    id: '1',
    type: 'league',
    numberRounds: 38,
    rounds: [
      {
        round: '1',
        matches: [
          {
            id: '1',
            homeTeamId: '1',
            visitingTeamId: '2',
            score: [3, 5],
            location: 'Nilton Santos',
            date: '07/12',
            hour: '19:00',
            day: 'Sabado',
          },
          {
            id: '2',
            homeTeamId: '3',
            visitingTeamId: '4',
            score: [1, 0],
            location: 'Beira-Rio',
            date: '08/12',
            hour: '16:00',
            day: 'Domingo',
          },
          {
            id: '3',
            homeTeamId: '5',
            visitingTeamId: '6',
            score: [4, 1],
            location: 'Castelão',
            date: '09/12',
            hour: '21:00',
            day: 'Segunda',
          },
        ]
      },
      {
        round: '2',
        matches: [
          {
            id: '1',
            homeTeamId: '1',
            visitingTeamId: '3',
            score: [1, 3],
            location: 'Nilton Santos',
            date: '07/12',
            hour: '19:00',
            day: 'Sabado',
          },
          {
            id: '2',
            homeTeamId: '5',
            visitingTeamId: '2',
            score: [2, 4],
            location: 'Beira-Rio',
            date: '08/12',
            hour: '16:00',
            day: 'Domingo',
          },
          {
            id: '3',
            homeTeamId: '4',
            visitingTeamId: '6',
            score: [2, 0],
            location: 'Castelão',
            date: '09/12',
            hour: '21:00',
            day: 'Segunda',
          },
        ]
      }
    ],
  },
}