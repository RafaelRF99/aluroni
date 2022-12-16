// SCSS
import styles from './Filtros.module.scss'
// CLASSNAMES
import classNames from 'classnames'

// JSON
import filtros from './filtros.json'

type IOpcao = typeof filtros[0];

interface selecionarFiltroProps {
    filtro: number | null
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({filtro, setFiltro}: selecionarFiltroProps) {

    const selecionarFiltro = (opcao: IOpcao) => {
        if (filtro === opcao.id) return setFiltro(null);
        return setFiltro(opcao.id);
    }

    return(
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button className={classNames({
                    [styles.filtros__filtro]: true,
                    [styles['filtros__filtro--ativo']]: filtro === opcao.id
                })} key={opcao.id} 
                onClick={() => selecionarFiltro(opcao)}>
                    {opcao.label}
                </button>
            ))}
        </div>
    )
}