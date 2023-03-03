import { useNavigate } from "react-router-dom"
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes"
import styles from './Rodape.module.scss';

const Rodape = () => {

    const participantes = useListaDeParticipantes()

    const navegarPara = useNavigate()

    const iniciar = () => {
        navegarPara('/sorteio')
    }

    return (<footer className={styles["rodape-configuracoes"]}>
        <button className={styles["botao"]} disabled={participantes.length < 3} onClick={iniciar}>Iniciar brincadeira</button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>)
}

export default Rodape