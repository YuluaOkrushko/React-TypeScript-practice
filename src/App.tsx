import Counter from "./components/Counter"
import Form from "./components/Form"



function App() {
  return(
    <div>
      <Counter />
      <Form onSubmit={cred => console.log(cred)} />
    </div>
  )
}

export default App;
