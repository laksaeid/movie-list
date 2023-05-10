import {ReactNode} from "react";
import {Header} from "@/components";

interface Props{
    children:ReactNode
}
const Container = ({children}:Props) => {
    return (
        <div className={'h-full w-full flex flex-col font-vazir'}>
            <Header />
            <div className={'h-full flex flex-col'}>
            {children}
            </div>
        </div>
    );
};

export default Container;