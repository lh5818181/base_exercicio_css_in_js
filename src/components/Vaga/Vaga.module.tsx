import styled from 'styled-components'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  margin-bottom: 20px;
  list-style: none;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }

  &:hover a {
    border-color: var(--cor-principal);
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`

const Titulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
  color: var(--cor-principal);
`

const Detalhes = styled.ul`
  margin-top: 10px;
  padding-left: 20px;
  color: var(--cor-texto);
`

const Detalhe = styled.li`
  margin-bottom: 5px;
`

const Link = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

const Vaga = (props: Props) => (
  <VagaContainer>
    <Titulo>{props.titulo}</Titulo>
    <Detalhes>
      <Detalhe>Localizacao: {props.localizacao}</Detalhe>
      <Detalhe>Senioridade: {props.nivel}</Detalhe>
      <Detalhe>Tipo de contratacao: {props.modalidade}</Detalhe>
      <Detalhe>
        Salário: {props.salarioMin} - {props.salarioMax}
      </Detalhe>
      <Detalhe>Requisitos: {props.requisitos.join(', ')}</Detalhe>
    </Detalhes>
    <Link href="#">Ver detalhes e candidatar-se</Link>
  </VagaContainer>
)

export default Vaga
