const Rodape = (props) => {

  const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const data = props.criadaEm.toLocaleDateString('pt-BR', opcoes);
  //Fragment
  return <>
    <p>
      {props.autor}
    </p>
    <p>
      Postada em: <strong>{data}</strong>
    </p>
  </>
}

export default Rodape;