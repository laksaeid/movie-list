import {Container} from "@/layout";
import {Form, List} from "@/components";
import {MovieProvider} from "@/context";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


function App() {

    return (
        <>
            <MovieProvider>

                <Container>

                    <Form/>
                    <List/>

                </Container>

            </MovieProvider>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
            />
        </>
    )
}

export default App
