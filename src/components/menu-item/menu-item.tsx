import './menu-item.css';
import {
    Category,
    Difficulty,
    DIFFICULTY_MAP,
    IMenuItem,
    PRICE_MAP,
    Season,
} from '../../models/menu-item.interface';
import ColoredLabel from '../../shared/colored-label/colored-label';
import { IColoredLabel } from '../../models/colored-label.interface';
import { convertMinutes } from '../../utils/convert-minutes';

function MenuItem({
    id,
    img,
    difficulty,
    name,
    preparationTime,
    price,
    season,
    ingredients,
}: IMenuItem) {
    const mapDifficulty = (
        item: string | Difficulty | Category | Season,
        hash: Map<string, IColoredLabel>,
    ): IColoredLabel => {
        return hash.get(item) || { color: 'black', label: `${item}` };
    };

    const mapPreparationTime = (time: number): IColoredLabel => {
        if (time <= 30) {
            return { color: 'green', label: `${time} мин` };
        }
        if (time <= 90) {
            return { color: 'orange', label: `${convertMinutes(time)}` };
        }

        return { color: 'red', label: `${convertMinutes(time)}` };
    };

    return (
        <div id={id} className="menu-item">
            <div className="menu-item__img">
                <img src={img} alt={name} />
            </div>
            <div className="menu-item__info">
                <h3 className="menu-item__info-name">{name}</h3>
                <p>
                    Сложность:{' '}
                    <ColoredLabel
                        {...mapDifficulty(difficulty, DIFFICULTY_MAP)}
                    />
                </p>
                <p>
                    Время готовки:{' '}
                    <ColoredLabel {...mapPreparationTime(preparationTime)} />
                </p>
                <p>
                    Цена: <ColoredLabel {...mapDifficulty(price, PRICE_MAP)} />
                </p>
                {/* <p>Ингредиенты: {ingredients.map((ingredient) =>
                    <div>{ingredient.name}: {ingredient.quantity}{ingredient.unit}</div>)}</p> */}
            </div>
        </div>
    );
}

export default MenuItem;
