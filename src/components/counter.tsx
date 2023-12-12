import { useState } from "react";
import { cn } from "../utils";
import { Minus, Plus } from "lucide-react";

interface CounterComponentProps {
    theme: string
}

const CounterComponent = ({theme}: CounterComponentProps) => {
    const [count, setCount] = useState(0)

    const counterAdd = () => {
        setCount((count) => count + 1)
    }

    const counterSub = () => {
        if(count>0){
            setCount((count) => count - 1)
        }
        
    }



    return (
        <div>
            
            <div className="flex gap-10 items-center justify-center">
            <button className={cn("w-12 h-12 flex items-center justify-center font-extralight border-stone-800 text-4xl transition-all duration-1000", theme=="normal" ? "rounded-md border-[1px]" : "border-t-2 border-l-2 border-r-4 border-b-4")} onClick={counterSub}>
                <Minus className="w-4 h-4"/>
            </button>
            <p className={cn("text-[5.5rem] font-extrabold w-[40%] justify-center items-center flex",theme=="normal" ? "text-transparent bg-clip-text bg-gradient-to-l from-sky-500 to-blue-500" : "text-black")}>{count}</p>
            <button 
            className={cn("text-4xl font-light w-12 h-12 transition-all duration-1000 flex items-center justify-center", 
            theme=="normal" ? "text-white rounded-md bg-gradient-to-r from-sky-500 to-blue-500 border-sky-500/60 border-2 shadow-xl shadow-neutral-400 hover:shadow-sky-400 hover:transition-all hover:duration-1000" : "border-black border-4 bg-fuchsia-700" 
            )} onClick={counterAdd}>
                <Plus className="h-6 w-6"/>
            </button>
            </div>
        </div>
     );
}
 
export default CounterComponent;