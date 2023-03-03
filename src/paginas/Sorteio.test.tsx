import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import Sorteio from "./Sorteio";

jest.mock('../state/hooks/useListaDeParticipantes.ts', () => {
  return {
    useListaDeParticipantes: jest.fn()
  }
})

describe('a pagina de sorteio', () => {
  const participantes = [
    'NomeTeste1',
    'NomeTeste2',
    'NomeTeste3'
  ]
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
  })
  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.queryAllByRole('option');
    expect(opcoes).toHaveLength(participantes.length);
  })
})