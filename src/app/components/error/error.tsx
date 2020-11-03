import React from 'react';
import Format from 'app/components/format';
import { MESSAGE_ID } from 'app/constants';
import styles from './error.css';

type Props = {
    retrying?: boolean,
    onRetry: () => void
};

export default function Error({ onRetry }: Props): JSX.Element {
    return (
        <div className={styles.root}>
            <div className={styles.message}>
                <div className={styles.title}>
                    <Format.Message id={MESSAGE_ID.ERROR_COMMON_TITLE} />
                </div>
                <div className={styles.description}>
                    <Format.Message id={MESSAGE_ID.ERROR_COMMON_MESSAGE} />
                </div>
                <button onClick={onRetry}>
                    <Format.Message id={MESSAGE_ID.ERROR_COMMON_BUTTON_RETRY} />
                </button>
            </div>
        </div>
    );
}
