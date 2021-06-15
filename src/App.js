import FraseMotivacional from './componetes/FraseMotivacional'
import './App.css'

const App = () => { //function App() {
   const frases = [
      {
         texto: 'Faça o teu melhor, na melhor condição que você tem, enquanto você não tem condições melhores, para fazer melhor ainda.',
         autor: 'Sergio Cortella',
         criadaEm: new Date(2021, 5, 13)
      },
      {
         texto: 'Não pare até se orgulhar.',
         autor: 'Autor desconhecido',
         criadaEm: new Date(2021, 5, 14)
      },
      {
         texto: 'Olhe para cima que é de lá que vem a tua força.',
         autor: 'Autor desconhecido',
         criadaEm: new Date()
      }
   ]

   return (<div className="container">
      <h1 className="titulo"> Frases Motivacionais </h1>
      <FraseMotivacional frase={frases[0].texto} autor={frases[0].autor} criadaEm={frases[0].criadaEm} />
      <FraseMotivacional frase={frases[1].texto} autor={frases[1].autor} criadaEm={frases[1].criadaEm} />
      <FraseMotivacional frase={frases[2].texto} autor={frases[2].autor} criadaEm={frases[2].criadaEm} />
   </div>
   );
}

export default App;