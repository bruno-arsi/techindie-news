import { useState } from "react";

function Home() {
    const closedBox = "/assets/closed_box.png";
    const openBox = "/assets/open_box.png";
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {isOpen ? (
                <div>
                    <h1>Você foi programaticado!</h1> <br />
                    <h2>Pra se tornar um desenvolvedor melhor, dá uma risadinha</h2>
                    <img width={640} height={640} src={openBox} alt="Presente aberto" />
                </div>
            ) : (
                <div>
                    <h1>Tenho um presente pra você!</h1> <br />
                    <img width={640} height={640} onClick={() => setIsOpen(true)} src={closedBox} alt="Presente fechado" />
                </div>
            )}
        </div>
    );
}

export default Home;