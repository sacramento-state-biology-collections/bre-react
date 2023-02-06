import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <span>Biology Research Engine</span>
                <div className={styles['Bottom-Header']}>
                    <button className={styles['Home-Button']}>
                        <img src="./styles/Home_Button.svg" />
                    </button>
                    <input className={styles['Search-Bar']} />
                    <select className={styles['Database-Selection']}>
                        Fish
                        <option>All</option>
                        <option>Mammals</option>
                        <option></option>
                        <option>Reptiles</option>
                        <option>Amphibians</option>
                        <option>Birds</option>
                    </select>
                    <button className={styles['Search-Button']}></button>
                </div>
            </header>
        </div>
    );
}

export default App;
