import { useState } from "react";
import closedBox from "../assets/closed_box.png";
import openBox from "../assets/open_box.png";

var { isOpen, setIsOpen } = useState < Boolean > (false);

function Home() {
    if (isOpen) {
        return <img src={openBox} alt="Presente" />
    }

    return <img onClick={() => setIsOpen(true)} src={closedBox} alt="Presente" />
}

export default Home;