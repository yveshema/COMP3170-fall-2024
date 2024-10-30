import { wrapper, btn, primary, outline } from './example.module.css';

export default function Buttons() {
    return (
        <div className={wrapper}>
            <button className={btn}>normal</button>
            <button className={`${btn} ${primary}`}>primary</button>
            <button className={`${btn} ${outline}`}>outline</button>
            <button className={`${btn} ${outline} ${primary}`}>Outline primary</button>
        </div>
    );
}