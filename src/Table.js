import React, * as react from 'react'
class Table extends react.Component {
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}
export default Table

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Title</th>
                <th>Description</th>
                <th>Link/ URL/ Web Address</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{row.title}</td>
                <td>{row.description}</td>
                <td>
                    <a href={row.url} target='_blank'>
                        {row.title}
                    </a>
                </td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}