import React, {useState} from 'react';
import Button from "./Button";
import "../style/Panel.css";
import Display from "./Display";

const ButtonPanel = () => {
    const [expression, setExpression] = useState('');

    const calc = (result) =>{
        if(result == "Infinity"){
            setExpression("Error: division by zero");
            return;
        }
        setExpression(result);
    }

    const click = (btnName) =>{
        if(btnName == "AC" || btnName == "C"){
            setExpression('');
            return
        }
        setExpression(expression + btnName);
    }


        return (
        <div className={"panel"}>

                <div className="class"><Display value={expression}/></div>

            <Button isClear={true}  click={click} isRed={true} value="AC"></Button>
            <Button click={click} isRed={true} value="C"></Button>
            <Button click={click} isRed={true} value="/"></Button>
            <Button click={click} isRed={true} value="*"></Button>

            <Button click={click} value="7"></Button>
            <Button click={click} value="8"></Button>
            <Button click={click} value="9"></Button>
            <Button click={click} isRed={true} value="-"></Button>

            <Button click={click} value="4"></Button>
            <Button click={click} value="5"></Button>
            <Button click={click} value="6"></Button>
            <Button click={click} isRed={true} value="+"></Button>

            <Button click={click} value="1"></Button>
            <Button click={click} value="2"></Button>
            <Button click={click} value="3"></Button>
            <Button click={click} isRed={true} value="."></Button>

            <Button click={click} value="("></Button>
            <Button click={click} value="0"></Button>
            <Button click={click} value=")"></Button>
            <Button isEqual={true} click={click} result={calc} expression={expression} isRed={true} value="="></Button>
        </div>
    );
};

export default ButtonPanel;