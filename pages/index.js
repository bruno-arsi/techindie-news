import { useState } from "react";

var {isOpen, setIsOpen} = useState<Boolean>(false);

function Home(){
    if(isOpen){
        return <img src="assets/open_box.png" alt="Presente"/>
    }

    return <img onClick={() => setIsOpen(true)} src="assets/closed_box.png" alt="Presente"/>
}

export default Home;