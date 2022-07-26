import React from "react";
import PassoStack from "../components/PassoStack";

import TextoCentral from "../components/TextoCentral";

export default function TelaA(){
    return (
        <PassoStack avancar='TelaB'>
            <TextoCentral corFundo='#E53935'>
                Tela A
            </TextoCentral>
        </PassoStack>
    )
}