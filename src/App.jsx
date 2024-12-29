import { useState } from 'react'
import './App.css'

function App() {
  const [teams, setTeams] = useState([
    {
      id: '2',
      description: 'Botafogo'
    },
    {
      id: '3',
      description: 'Palmeiras'
    },
    {
      id: '1',
      description: 'Flamengo'
    },
    {
      id: '4',
      description: 'Fortaleza'
    },
    {
      id: '5',
      description: 'Internacional'
    },
    {
      id: '6',
      description: 'São Paulo'
    },
    {
      id: '7',
      description: 'Corinthians'
    },
    {
      id: '8',
      description: 'Bahia'
    },
    {
      id: '9',
      description: 'Cruzeiro'
    },
    {
      id: '10',
      description: 'Vasco'
    },
    {
      id: '12',
      description: 'Vitória'
    },
    {
      id: '13',
      description: 'Atlético-MG'
    },
    {
      id: '14',
      description: 'Fluminense'
    },
    {
      id: '15',
      description: 'Grêmio'
    },
    {
      id: '11',
      description: 'Juventude'
    },

    {
      id: '16',
      description: 'Bragantino'
    },
    {
      id: '17',
      description: 'Athletico-PR'
    },
    {
      id: '18',
      description: 'Cricúma'
    },
    {
      id: '19',
      description: 'Atlético-GO'
    },
    {
      id: '20',
      description: 'Cuiabá'
    }
  ])

  return (
    <div className='container'>
      <header>
        <h1>Campeonato Brasileiro Séria A</h1>
        <select>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </header>
      <main>
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
              {teams.map((team, idx) => (
                <tr key={team.id}>
                  <td><div>
                    <span>{idx + 1}</span>
                    <span>{team.description}</span>
                    <span>0 <div className="square gray"></div></span>
                  </div></td>
                  {/* <td><span>{idx+1}</span><span>{team.description}</span><span>1 &uarr;</span></td> */}
                  {/* <td><span>{idx+1}</span><span>{team.description}</span><span>1 &darr;</span></td> */}
                  <td>79</td>
                  <td>38</td>
                  <td>23</td>
                  <td>10</td>
                  <td>5</td>
                  <td>59</td>
                  <td>29</td>
                  <td>30</td>
                  <td>69</td>
                  <td><div className="dots">
                    <div className="dot gray"></div>
                    <div className="dot red"></div>
                    <div className="dot green"></div>
                    <div className="dot green"></div>
                    <div className="dot gray"></div>
                  </div></td>
                </tr>
              ))}
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
        <section className="rounds">
          <p>Jogos</p>
          <div className="round-selector">
            <img src="../src/assets/horizontal-arrow.svg" alt="previous round" />
            <p>25ª RODADA</p>
            <img src="../src/assets/horizontal-arrow.svg" alt="next round" />
          </div>
          <div className="round-matches">
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/gremio.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/corinthians.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/flamengo.svg" alt="escudo do Flamengo" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/sao-paulo.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/vitoria.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/internacional.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/juventude.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/criciuma.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/atletico-go.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/atletico-mg.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/athletico-pr.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/bragantino.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/cruzeiro.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/vasco.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/bahia.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/botafogo.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/cuiaba.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/fluminense.svg" alt="escudo do Fluminence" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
            <div className="matche">
              <div className="matche_infor">
                <div className="infor_local">Arena do Grêmio</div>
                <div className="infor_time">08/12 • Domingo • 16:00</div>
              </div>
              <div className="matche_teams">
                <div className="team">
                  <div className="abbreviation">GRE</div>
                  <div className="shield"><img src="../src/assets/fortaleza.svg" alt="escudo do Gremio" /></div>
                  <div className="score">3</div>
                </div>
                <div className="separetor">x</div>
                <div className="team">
                  <div className="score">2</div>
                  <div className="shield"><img src="../src/assets/palmeiras.svg" alt="escudo do Corinthians" /></div>
                  <div className="abbreviation">COR</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
