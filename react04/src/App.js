import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {


  const monga = '뭔가........';
  const DATA = [
    {id:1, name:'신화영', content:"나는 봉이야", date:2022,},
    {id:2, name:'신화일'},
    {id:3, name:'신화이'},
    {id:4, name:'신화삼'},
    {id:5, name:'신화사'},
    {id:6, name:'신화오'},
    {id:7, name:'신화육'},
  ]
  return (
    <>
      <Header monga={monga} member={DATA} />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
