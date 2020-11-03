import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { MESSAGE_ID, REQUEST } from 'app/constants';
import Actions from 'app/actions';
import Format from 'app/components/format';
import Loading from 'app/components/loading/loading';
import Error from 'app/components/error/error';
import type { ReactNode } from 'react';
import type { DataState, StoreState } from 'app/types';
import styles from './app.css';

type PropsState = {
    data: DataState
};

type PropsActions = {
    getInitialData: () => void
};

type Props = PropsState & PropsActions;

class AppContainer extends PureComponent<Props> {
    componentDidMount() {
        this.props.getInitialData();
    }

    render(): ReactNode {
        const { data: { state } } = this.props;

        if (state === REQUEST.LOADING) {
            return this.renderLoading();
        }

        if (state === REQUEST.ERROR) {
            return this.renderError();
        }

        return (
            <div className={styles.root}>
                {this.renderHeader()}
                {this.renderBody()}
            </div>
        );
    }

    renderHeader(): ReactNode {
        return (
            <div className={styles.header}>
                <Format.Message id={MESSAGE_ID.APP_TITLE} />
            </div>
        );
    }

    renderBody(): ReactNode {
        const { data: { data } } = this.props;

        if (!data) {
            return null;
        }

        return (
            <div className={styles.body}>
                {data.value}
            </div>
        );
    }

    renderLoading(): ReactNode {
        return <Loading />;
    }

    renderError(): ReactNode {
        const onRetry = () => {
            this.props.getInitialData();
        };

        return (
            <Error onRetry={onRetry} />
        );
    }
}

export default hot(connect<PropsState, PropsActions>(
    (store: StoreState): PropsState => {
        return {
            data: store.data
        };
    },
    ({
        getInitialData: Actions.getInitialData
    })
)(AppContainer));
