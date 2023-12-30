
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";

const Dashboard = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.cards}>
                    <Card item={{title:"products",number:20.225,change:15}} key="20.523" />
                    <Card item={{title:"Values",number:25.225,change:25}} key="20.523" />
                    {/*{cards.map((item) => (*/}
                    {/*    <Card item={item} key={item.id} />*/}
                    {/*))}*/}
                </div>
                <Transactions />
                <Chart />
            </div>
            <div className={styles.side}>
                <Rightbar />
            </div>
        </div>
    )

}
export default Dashboard