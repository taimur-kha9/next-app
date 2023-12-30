"use client"
import {useEffect, useState} from "react";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import styles from "/app/ui/dashboard/users/users.module.css"
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";

const columns = [
    {
        key: "username",
        label: "Username",
    },
    {
        key: "email",
        label: "Email",
    },
    {
        key: "create_at",
        label: "Created at",
    },
    {
        key: "isadmin",
        label: "Role",
    },
    {
        key: "isactive",
        label: "Status",
    },
    {
        key: "action",
        label: "Action",
    },
];

const Userpage = ({searchParams}) => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
                try {
                    const esc = encodeURIComponent;
                    const query = Object.keys(searchParams).map(k => `${esc(k)}=${esc(searchParams[k])}`).join('&');
                    const response = await fetch("/api/users?"+query);
                    const result = await response.json();
                    setCount(result.rowCount[0].count);
                    setData(result.data.rows);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
        };
        fetchData();
    }, [searchParams]);

    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a user..." />
                <Link href="/dashboard/users/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                <tr>
                {columns.map((column) =>
                    <td key={column.key}>{column.label}</td>
                )}
                </tr>
                </thead>
                <tbody>
                {data.map((row) =>{
                    return(
                        <tr key={row.id}>
                            <td>
                                <div className={styles.user}>
                                    <Image
                                        src={row.img || "/noavatar.png"}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className={styles.userImage}
                                    />
                                    {row.username}
                                </div>
                            </td>
                            <td>{row.email}</td>
                            <td>{row.create_at.slice(0,10)}</td>
                            <td>{row.isadmin ? "Admin" : "Client"}</td>
                            <td>{row.isactive ? "Active" : "Disable"}</td>
                            <td>
                            <div className={styles.buttons}>
                                <Link href={`/dashboard/users/${row.id}`}>
                                    <button className={`${styles.button} ${styles.view}`}>
                                        View
                                    </button>
                                </Link>
                                <form>
                                    <input type="hidden" name="id" value={(row.id)} />
                                    <button className={`${styles.button} ${styles.delete}`}>
                                        Delete
                                    </button>
                                </form>
                            </div>
                            </td>
                        </tr>
                        )
                })}
                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    )
}
export default Userpage