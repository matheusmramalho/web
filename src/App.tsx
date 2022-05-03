function Button(props:{text: string}) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
      <Button text="enviar"/>
      <Button text="ok"/>
      <Button text="bonito"/>
    </div>
  )
}

export default App
