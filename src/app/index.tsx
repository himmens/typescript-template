import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { configureStore } from 'app/store/store';
import { locale, messages } from 'app/locale';
import App from 'app/containers/app';

const store = configureStore({});

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <IntlProvider locale={locale} messages={messages}>
                <App />
            </IntlProvider>
        </Provider>
    </AppContainer>,
    document.getElementById('root')
);
