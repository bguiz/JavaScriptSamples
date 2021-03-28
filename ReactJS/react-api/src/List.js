
function List(props) {
    const { data } = props;
    const titles = data[1];
    const urls = data[3];
    
    const result = titles.map((entry, index) => {
        return <li><a href={urls[index]}>{titles[index]}</a></li>
    })

    return <ul>{result}</ul>
}

export default List