import Image from "next/image";
import spinner from '../../public/loader.svg'
import styles from './page.module.css'

export default function Loading() {
    return (
        <div className={styles['loader-wrapper']}>
            <Image
                className={styles.loader}
                src={spinner}
                width={150}
                height={150}
                alt="loader"
            />
        </div>
    )
}