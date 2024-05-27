
import './App.css'
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/><br/><br/>
    <Todo id={2} /><br/><br/>
    <Todo id={3} /><br/><br/>
    <Todo id={4} /><br/><br/>
    <Todo id={5} /><br/><br/>
    <Todo id={6} /><br/><br/>
    <Todo id={7} /><br/><br/>
    <Todo id={8} /><br/><br/>
    <Todo id={9} /><br/><br/>
    <Todo id={10} /><br/><br/>
    <Todo id={11} /><br/><br/>
    <Todo id={12} /><br/><br/>
    <Todo id={13} /><br/><br/>
    <Todo id={14} /><br/><br/>
    <Todo id={15} /><br/><br/>
  </RecoilRoot>
}

function Todo({id}) {
   const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      {todo.description}
      <br />
    </>
  )
}

export default App
