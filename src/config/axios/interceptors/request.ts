import store from '@/store';

export default (config: any) => {
    const token = (store.state as any).auth.access_token;
    if (
        !config.headers.Authorization &&
        token &&
        config.url.indexOf('token') === -1
    ) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
};
