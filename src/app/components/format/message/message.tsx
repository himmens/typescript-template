import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import type { ReactNode } from 'react';

export type Values = {
    [key: string]: unknown
};

export type Props = {
    id: string,
    dataMarker?: string,
    className?: string,
    children?: (...message: Array<string>) => ReactNode,
    description?: string,
    defaultMessage?: string,
    values?: Values
};

export default class FormatMessage extends PureComponent<Props> {
    render(): ReactNode {
        const { id, className, children, dataMarker, ...options } = this.props;

        return (
            <span className={className}>
                <FormattedMessage id={id} {...options}>
                    {children}
                </FormattedMessage>
            </span>
        );
    }
}
