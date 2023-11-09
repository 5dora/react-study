function List(props) {
    //props List를 사용할 때 속성에 데이터 추가
    var fishList = props.fishList;
    var lis = fishList.map(function(fish, i) {
        return <li key={i}>{fish}</li>
    });

    return (
    <>
        <h3>생선 목록</h3>
        <ul>
            {lis}
        </ul>
    </>
    );
}

export default List;