import Header from "./Header";

function App() { 
  // jsx 밖의 주석
  return (
    <header>
      {/* jsx 안의 주석 */}
      <Header style={{ color: 'red' }} name="prechel" age={3} />
      {/* component 자체에는 Style을 줄 수가 없네??? */}
      <nav>
        <ul>
          <li><a href="" style={{ color: 'red', fontSize:'40px'}} >menu01</a></li>
          <li><a href="">menu02</a></li>
          <li><a href="">menu03</a></li>
          <li><a href="">menu04</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default App;