import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Button} from "reactstrap";

const complete = {
    color: "#fff",
    background:"#737373",
    padding: " 0 6px",
    fontSize: "12px",
    position: "relative",
    bottom: "1px"
};

const Buttons = (props) => {
    return (
        <span className="tools">
            <span className="icon complete">
                <Button style={complete}>Complete</Button>
            </span>

            {props.isEditing ?
                <span className="icon tick" onClick={props.toggleIsEditingAt}>
                    <FontAwesomeIcon icon={faCheckCircle} color="#4BB543"/>
                </span>:
                <span className="icon edit" onClick={props.toggleIsEditingAt}>
                    <FontAwesomeIcon icon={faPencilAlt}/>
                </span>
            }

            <span className="icon delete" onClick={props.handleRemove}>
                <FontAwesomeIcon icon={faTrashAlt} color="#d11a2a"/>
            </span>
        </span>
    )
};

export default Buttons;