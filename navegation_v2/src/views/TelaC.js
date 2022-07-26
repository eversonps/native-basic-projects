import React from "react";

import TextoCentral from "../components/TextoCentral";

import PassoStack  from "../components/PassoStack";
export default function TelaC(){
    return (
        <PassoStack avancar='TelaA' voltar>
             <TextoCentral corFundo='#9932cd'>
                Tela C
            </TextoCentral>
        </PassoStack>
    )
}