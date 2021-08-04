/* eslint-disable no-template-curly-in-string */
import axiosClient from './axiosClient';

const userApi = {
    getAll(params) {
        const url = '/users';
        return axiosClient.get(url, { params });
    },
    get(id) {
        // eslint-disable-next-line no-template-curly-in-string
        const url = '/users/${id}';
        return axiosClient.get(url);
    },
    add(data) {
        const url = '/users';
        return axiosClient.post(url, data);
    },
    update(data) {
        const url = '/users/${data.id}';
        return axiosClient.patch(url, data);
    },
    remove(id) {
        const url = '/users/${id}';
        return axiosClient.delete(url);
    },
};
export default userApi;