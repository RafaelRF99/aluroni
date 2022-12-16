// SCSS
import styles from './Buscador.module.scss'

// REACT ICONS
import { CgSearch } from 'react-icons/cg';

interface BuscadorProps {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({ busca, setBusca }: BuscadorProps) {
    return (
        <div className={styles.buscador}>
            <input type="text" value={busca} onChange={e => setBusca(e.target.value)} 
            placeholder="Buscar" />
            <CgSearch className='botao' />
        </div>
    );
};