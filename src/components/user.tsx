import { cn } from "../utils";
import CounterComponent from "./counter";

interface UserComponentProps {
    theme: string
    name: string,
    role: string
}

const UserComponent = ({theme, name, role}: UserComponentProps) => {
    return ( <div className={cn("bg-white p-5 transition-all duration-1000",theme=="normal" && "rounded-lg shadow-lg hover:shadow-sky-400/30 hover:transition-all hover:duration-1000", theme=="brut" && "border-black border-t-4 border-l-4 border-r-8 border-b-8 bg-teal-400/80")}>
    <p className={cn("text-2xl transition-all duration-1000", theme=="brut" && "font-extrabold")}>{name}</p>
    <p className={cn("text-lg transition-all duration-1000", theme=="normal" ? "font-light" : "font-bold")}>{role}</p>
    <CounterComponent theme={theme}/>
    </div> );
}
 
export default UserComponent;