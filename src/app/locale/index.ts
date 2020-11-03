import appLocale from './locale.json';

const DEFAULT_LOCALE = 'en';
const locale = DEFAULT_LOCALE;

type Messages = { [id: string]: string };

function getMessages(data: { [id: string]: Messages }): Messages {
    return data[DEFAULT_LOCALE];
}

const messages = {
    ...getMessages(appLocale)
};

export {
    locale,
    messages
};
