import './SimulatorHeader.css'
export default function SimulatorHeader() {
    return (
        <header>
            <h1>Campeonato Brasileiro Séria B</h1>
            <select>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </header>
    )
}