import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";


export default function ({user}){
    return(
        <MainContainer keywords={user.name} title={"User"}>
            <h1>Пользователь с id = {user.id}</h1>
            <h2>Имя пользователя - {user.name}</h2>
        </MainContainer>
    )
};

export async function getServerSideProps({params}){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()

    return{
        props: {user}
    }
}