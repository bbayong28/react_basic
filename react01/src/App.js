/* function App() {} */
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Wrapper from './Wrapper';

const App = () => { 
    return (
        <Wrapper>
            <Header />
            <Main shin="신화영" work="술마시기"/> 
            <Main shin="신화일" work="노래하기" /> 
            <Main shin="신화이" work="춤추기" /> 
            <Main shin="신화삼" /> 
            <Footer />
        </Wrapper>
    )
}

export default App;