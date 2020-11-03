import appLocale from './locale.json';

const DEFAULT_LOCALE = 'en';
const locale = DEFAULT_LOCALE;

function getMessages(data: { [id: string]: {} }): {} {
    return data[DEFAULT_LOCALE];
}

const messages = {
    ...getMessages(appLocale)
};

export {
    locale,
    messages
};
