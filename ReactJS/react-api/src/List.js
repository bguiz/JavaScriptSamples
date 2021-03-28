
function List(props) {
    const { data } = props;
    
    const result = data.map((entry, index) => {
        return <li>{index}: {entry}</li>
    })

    return <ul>{result}</ul>
}

export default List