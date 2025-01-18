import './RowTeamList.css'
export default function RowTeamList({ team, idx }) {
    return (
        <tr key={team.id}>
            <td><div>
                <span>{idx + 1}</span>
                <span>{team.name}</span>
                <span>0 <div className="square gray"></div></span>
            </div></td>
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
    )
}