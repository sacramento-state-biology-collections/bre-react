import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <span>Biology Research Engine</span>
                <div className={styles['Bottom-Header']}>
                    <button className={styles['Home-Button']}>
                        <img
                            id="home-button-img"
                            src="/styles/Home_Button.svg"
                            alt="Home"
                            className={styles.HomeButtonImage}
                        />
                    </button>
                    <input className={styles['Search-Bar']} placeholder={'Search All'} />
                    <select className={styles['Database-Selection']}>
                        <option>All</option>
                        <option>Mammals</option>
                        <option>Birds</option>
                        <option>Reptiles</option>
                        <option>Amphibians</option>
                        <option>Fish</option>
                    </select>
                    <button className={styles['Search-Button']}>
                        <img
                            id="search-button-img"
                            src="/styles/Search_Button.svg"
                            alt="Search"
                            className={styles.SearchButtomImage}
                        />
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
