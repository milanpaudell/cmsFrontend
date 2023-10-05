import './App.css'

function App() {
  const name = 'Milan'

  const myCssObject = {
    color: 'red',
  }

  return (
    <>
      <h1 style={{color : 'grey',}}>Milan Paudel</h1>
      <h3 style={myCssObject}>I am a student</h3>
      <h5>Age : {13+14}</h5>
      <h4>{name}</h4>
    </>
  )
}

export default App
