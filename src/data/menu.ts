import {
    Category,
    Difficulty,
    IMenuItem,
    Season,
} from '../models/menu-item.interface';
import images from '../assets/images';

export const MENU: IMenuItem[] = [
    {
        id: '1',
        name: 'Greek Salad',
        img: images.greekSalad,
        difficulty: Difficulty.EASY,
        preparationTime: 55,
        price: '1',
        category: Category.SALAD,
        ingredients: [
            { name: 'Tomato', quantity: 2, unit: 'pcs' },
            { name: 'Cucumber', quantity: 1, unit: 'pcs' },
            { name: 'Feta Cheese', quantity: 100, unit: 'g' },
            { name: 'Olives', quantity: 50, unit: 'g' },
            { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
            { name: 'Salt', quantity: 1, unit: 'pinch' },
        ],
        season: Season.SUMMER,
    },
    {
        id: '2',
        name: 'Tomato Soup',
        img: images.tomatoSoup,
        difficulty: Difficulty.MEDIUM,
        preparationTime: 130,
        price: '3',
        category: Category.SOUP,
        ingredients: [
            { name: 'Tomato', quantity: 3, unit: 'pcs' },
            { name: 'Onion', quantity: 1, unit: 'pcs' },
            { name: 'Garlic', quantity: 2, unit: 'cloves' },
            { name: 'Vegetable Broth', quantity: 500, unit: 'ml' },
            { name: 'Olive Oil', quantity: 2, unit: 'tbsp' },
            { name: 'Salt', quantity: 1, unit: 'pinch' },
        ],
        season: Season.ALL_SEASONS,
    },
];
