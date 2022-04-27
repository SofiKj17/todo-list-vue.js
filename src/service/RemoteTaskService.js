import axios from 'axios'; // библиотека

const HOST = 'https://todo-list-server-1.herokuapp.com/';//сервер

export class RemoteTaskService {

    async findByStatus(status) {
        return (await axios.get(HOST + '?status=' + status)).data;//json объект
    }

    async create(task) {
        await axios.post(HOST, task);
    }

    async changeStatusToRemovedById(id) {
        await axios.put(HOST + '?id=' + id);//DELETE заменили на PUT
    }

    async deleteById(id) {
        await axios.delete(HOST + '?id=' + id);
    }
}