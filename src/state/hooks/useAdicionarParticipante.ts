import { listaParticipantesState, erroState } from './../atom';
import { useRecoilState, useSetRecoilState } from 'recoil';

export const useAdicionarParticipante = () => {
  const [lista, setLista] = useRecoilState(listaParticipantesState);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setErro('');
      }, 3000)
      return;
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
  }
}