import createGlobalStyle from "./styles/global";
import styled from "styled-components";
<<<<<<< HEAD
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import { userState } from "react";
=======
import Form from "../components/Form.js";
import Grid from "../components/Grid.js";
>>>>>>> bda9fd10cbb0dcf286aad59398a76acc3ec6cfbf
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
 width: 100%;
 max-width: 800px;
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 10px;
`;

const Title = styled.h2 ``;

function App() {
    const [users, setUsers] =userState([]);
    const [onEdit, setOnEdit] = userState(null);

    const getUsers = async () => {
        try {
            const res = await axios.get("http://localhost:8800");
            setUsers(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1 )));
        } catch (error) {
            toast.error(error);
        }
    };

    return (
        <>
            <Container>
                <title>USUÁRIOS</title>
                <Form />
                <Grid  />
            </Container>
            <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
            <GlobalStyle />
        </>
    );
}


