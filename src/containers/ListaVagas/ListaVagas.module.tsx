import styled from 'styled-components'
import { FormEvent, useState } from 'react'

// Tipos de Props
type Props = {
  aoPesquisar: (termo: string) => void
}

// Componentes estilizados
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

const BtnPesquisar = styled.button`
  background-color: var(--cor-principal);
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
`

const Campo = styled.input`
  padding: 0 16px;
  outline-color: var(--cor-principal);
`

const VagaContainer = styled.div`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
  margin-bottom: 20px;

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

const VagaTitulo = styled.h2`
  font-weight: bold;
  margin-bottom: 16px;
`

const VagaLink = styled.a`
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

const VagasContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

// Componente FormVagas
const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Form onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnPesquisar type="submit">Pesquisar</BtnPesquisar>
    </Form>
  )
}

// Exportando os componentes
export {
  FormVagas,
  VagaContainer as Vaga,
  VagaTitulo,
  VagaLink,
  VagasContainer as Vagas
}
