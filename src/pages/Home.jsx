import { Sidebar } from "phosphor-react";
import { Tasks } from "../components/Task";

import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <Sidebar />
            <Tasks />
        </div>
    );
};

export { Home };
