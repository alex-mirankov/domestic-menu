import {IColoredLabel} from "../../models/colored-label.interface";
import './colored-label.css';

function ColoredLabel({ color, label }: IColoredLabel) {
    return (
        <span style={{backgroundColor: color}} className="colored-label">{label}</span>
    )
}

export default ColoredLabel;
