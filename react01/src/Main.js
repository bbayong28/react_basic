//const Main01 = (props) => { 
//    const { shin } = props;
//    return (
//        <main>
//            {/* {console.log(props)} */}
//            {/* {console.log(props.shin)} */}
//            {shin}
//        </main>
//    )
//} 


const Main = ({ shin, work }) => { 
    return (

        <main>

            {shin}은 {work}를 즐겨합니다.
        </main>
    )
}
// 전달받은 값이 없을 때 기본적으로 전해주는 값...
Main.defaultProps = {
    work : '놀기'
}
export default Main;