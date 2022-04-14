import {TaskStatus} from "@/model/TaskStatus";

export class TaskService {

    //поле статичное-единственное для всех объектов класса
    static taskService; // Singleton - имеет методы для взаимодействия с хранилищем (localStorage)  --пустое поле

    static getInstance() {//
        if (!TaskService.taskService) { // если статичное поле underfind
            TaskService.taskService = new TaskService(); // то мы инициализируем поле объектом (новый экземпляр класса)
        }
        return TaskService.taskService;// возвращаем поле (один объект всегда)
    }

    static generateId() { //метод генерации идентификатора
        return Date.now();//берется текущая дата = идентификатор (в мс)
    }

    getTaskStorage() { // метод
        let taskStorage = JSON.parse(window.localStorage.getItem(TASK_STORAGE_NAME));
        //инициализируем переменную - присваеваем массив с тасками
        // из строки функция делает массив (объект.поле. метод (ключ))
        if(!taskStorage) {
            taskStorage = [];
        }
        return taskStorage; // массив
    }
    // при первом запуске поле пустое, но мы проверяем на пустоту (пустое-инициализируем новый массив)

    saveTaskStorage(taskStorage) {//сохраняем параметр - масив с тасками -  при вызове метода
        window.localStorage.setItem(TASK_STORAGE_NAME, JSON.stringify(taskStorage))
        // сохраняем taskStorage в LocalStorage (в кэш)-- массив преобразует в строку
    }

    findByStatus(status) {//ищем по параметру
        const taskStorage = this.getTaskStorage();// присваиваем --- вызов метода для забора массива с таксками ---ссылка на самого себя
        return taskStorage.filter(task => task.status === status);// параметр -> тело фунции фильтра
    } // фильтер возвращает новый массив с тасками нужного нам статуса (переданным в параметре метода) из массива тасков

    create(task) {
        const taskStorage = this.getTaskStorage(); // получаем массив со всеми тасками что у нас есть
        task.id = TaskService.generateId(); // генерируем ид и присваиваем
        taskStorage.push(task);// в массив добавляем таск
        this.saveTaskStorage(taskStorage);// весь массив сохраняем в localStorage
    }

    removeById(id) {
        const taskStorage = this.getTaskStorage();
        const targetIndex = taskStorage.findIndex(task => task.id === id);
        // targetIndex-иднех элемента в массиве с ид переданных в параметре
        const target = taskStorage[targetIndex];// обращение к элемету массива по индексу (достаем таску по индексу
        taskStorage.splice(targetIndex, 1);// удаляем по индексу (удаляет начиная с индекса указанное количество элементов)
        target.status = TaskStatus.REMOVED
        taskStorage.push(target);// добавляем в массив таску (для упорядоченности удаляемых тасков)
        this.saveTaskStorage(taskStorage);
    }
}

const TASK_STORAGE_NAME = "taskStorage";// константа-хранит ключ