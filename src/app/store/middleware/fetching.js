/**
 * Processing request middleware
 *
 * @returns {Function} Return dispatch
 */
export default function fetching({ dispatch }) {
    const timestampByRequest = {};

    return (next) => (action) => {
        const { fetching, types, sequence, timestamp, callback, ...rest } = action;

        if (!fetching) {
            return next(action);
        }

        let promise = fetching;

        if (Array.isArray(fetching)) {
            if (sequence) {
                promise = fetching.reduce((result, item) => result.then(item), Promise.resolve());
            } else {
                promise = Promise.all(fetching.map((item) => item()));
            }
        }

        const [REQUEST, SUCCESS, FAILURE] = types;
        next({ ...rest, type: REQUEST });

        if (timestamp) {
            timestampByRequest[REQUEST] = timestamp;
        }

        promise.then((response) => {
            if (timestamp && timestamp !== timestampByRequest[REQUEST]) {
                return Promise.reject({ code: 'out.of.date' });
            }

            next({ ...rest, response, type: SUCCESS });

            if (typeof callback === 'function') {
                try {
                    callback(response, dispatch);
                } catch (e) {}
            }

            return response;
        }, (error) => {
            if (timestamp && timestamp !== timestampByRequest[REQUEST]) {
                return Promise.reject({ code: 'out.of.date' });
            }

            let response = {};

            if (typeof error === 'object') {
                try {
                    response = JSON.parse(error.originalResponse || null);
                } catch (e) {
                    response = error.originalResponse;
                }
            }

            if (typeof error === 'string') {
                error = { code: 'unknow', message: error };
            }

            next({ ...rest, error, response, type: FAILURE });
            return Promise.reject(error);
        });

        return action;
    };
}
