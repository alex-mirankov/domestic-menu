import {IColoredLabel} from "./colored-label.interface";

export interface IMenuItem {
    id: string;
    name: string;
    img: string;
    difficulty: Difficulty;
    preparationTime: number;
    price: string;
    category: Category;
    ingredients: IIngredient[];
    season: Season;
}

export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard',
}

export enum Category {
    SALAD = 'salad',
    SOUP = 'soup',
    MAIN_COURSE = 'main course',
    DESSERT = 'dessert',
    DRINK = 'drink',
    SIDE_DISH = 'side dish',
}

export enum Season {
    WINTER = 'winter',
    SPRING = 'spring',
    SUMMER = 'summer',
    AUTUMN = 'autumn',
    ALL_SEASONS = 'all seasons',
}

export enum Unit {
    PCS = 'шт',
    G = 'гр',
    ML = 'мл',
}

export interface IIngredient {
    name: string;
    quantity: number;
    unit: string;
}

export const DIFFICULTY_MAP: Map<Difficulty, IColoredLabel> = new Map([
    [Difficulty.EASY, { color: 'green', label: 'Легко' }],
    [Difficulty.MEDIUM, { color: 'orange', label: 'Средне' }],
    [Difficulty.HARD, { color: 'red', label: 'Сложно' }],
]);

export const PRICE_MAP: Map<string, IColoredLabel> = new Map([
    ['1', { color: 'green', label: '$' }],
    ['2', { color: 'orange', label: '$$' }],
    ['3', { color: 'red', label: '$$$' }],
]);

export const CategoryFilter = [
    { key: Category.SALAD, label: 'Салаты' },
    { key: Category.SOUP, label:  'Супы' },
    { key: Category.MAIN_COURSE, label:  'Основные блюда' },
    { key: Category.DESSERT, label:  'Десерты' },
    { key: Category.DRINK, label:  'Напитки' },
    { key: Category.SIDE_DISH, label:  'Гарниры' },
];

export const SeasonFilter = [
    { key: Season.WINTER, label: 'Зима' },
    { key: Season.SPRING, label: 'Весна' },
    { key: Season.SUMMER, label: 'Лето' },
    { key: Season.AUTUMN, label: 'Осень' },
    { key: Season.ALL_SEASONS, label: 'Все сезоны' },
];

export const PriceFilter = [
    { key: '1', label: '$' },
    { key: '2', label: '$$' },
    { key: '3', label: '$$$' },
];

export const DifficultyFilter = [
    { key: Difficulty.EASY, label: 'Легко' },
    { key: Difficulty.MEDIUM, label: 'Средне' },
    { key: Difficulty.HARD, label: 'Сложно' },
];
