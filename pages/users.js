import {useState} from "react";
import Link from "next/link";
import styles from '../styles/Link.module.scss'
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {
    return (
        <MainContainer keywords={"users page"}>
            <h1 className={styles.list}>Список пользователей</h1>
            <ul>
                {users.map(item =>
                    <li key={item.id}>
                        <Link href={`/users/${item.id}`}>
                            <span>{item.name}</span>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}
export default Users


export async function getStaticProps(context){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return{
        props: {users}
    }
}