// SCSS
import styles from './Ordenador.module.scss';

// JSON
import opcoes from './opcoes.json';

// HOOKS
import { useState } from 'react';
import classNames from 'classnames';

// REACT ICONS
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface OrdenadorProps {
    ordenador: string
    setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({ ordenador, setOrdenador }: OrdenadorProps) {
    const [aberto, setAberto] = useState(false);
    const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome

    return (
        <button className={classNames({
            [styles.ordenador]: true,
            [styles["ordenador--ativo"]]: ordenador !== "",
        })}
            onBlur={() => setAberto(false)}
            onClick={() => setAberto(!aberto)}>
            <span>{nomeOrdenador || "Ordenar por"}</span>
            {aberto ? < MdKeyboardArrowUp size={20} /> : < MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordenador__options]: true,
                [styles["ordenador__options--ativo"]]: aberto
            })}>
                {opcoes.map(opcao => (
                    <div className={styles.ordenador__option} key={opcao.value} 
                    onClick={() => setOrdenador(opcao.value)} >
                        {opcao.nome}
                    </div>))}
            </div>
        </button>
    )
}