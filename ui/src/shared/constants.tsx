// api url
const isProd = window.location.protocol === 'https:';
const apiPort = isProd ? '' : ':9000';
export const API_URL = window.location.protocol + '//' + window.location.hostname + apiPort + '/api';
export const GAME_URL = API_URL + '/games';

// localStorage keys
export const SETTING_ID = 'playerId';
export const SETTING_NAME = 'playerName';
export const SETTING_COLOR = 'playerColor';
export const SETTING_THEME = 'darkTheme';

// app content and theming
export const DEFAULT_NUM_WORDS: number = 2; // Two words per player
export enum ThemeMode {
    AUTO = 'automatisch',
    BRIGHT = 'hell',
    DARK = 'dunkel'
}
