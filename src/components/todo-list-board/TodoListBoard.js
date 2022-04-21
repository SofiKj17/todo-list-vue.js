import StatusButtonComponent from "@/components/common/button-component/ButtonComponent";
import HorizontalButtonsLine from "@/components/common/horizontal-buttons-line/HorizontalButtonsLine";
// import {TaskService} from "@/service/TaskService";
import ListComponent from "@/components/common/list-component/ListComponent";
import {TaskStatus} from "@/model/TaskStatus";
import GreetingComponent from "@/components/common/greeting-component/GreetingComponent";
import SearchBarComponent from "@/components/common/search-bar-component/SearchBarComponent";
import UnderlineMessageComponent from "@/components/common/underline-message-component/UnderlineMessageComponent";
import {RemoteTaskService} from "@/service/RemoteTaskService";

export default {//объект
    name: "TodoListBoard",
    components: { //поле
        StatusButtonComponent,
        HorizontalButtonsLine,
        ListComponent,
        GreetingComponent,
        SearchBarComponent,
        UnderlineMessageComponent
    },
    data() {
        return {
            title: "Hey, Sofa!",
            message: "What's your plan?",
            list: [],
            taskService: new RemoteTaskService(),
            currentStatusToShow: TaskStatus.UPCOMING,
            statusesList: Object.values(TaskStatus),
            settings: [],
            areStatusButtonsShown: false,
            remote: new RemoteTaskService()
            //объект c переменными компонента
        }
    },
    mounted() { //вызывается когда компонент построен vue.js
        this.onStatusClick({status: this.currentStatusToShow}).then(); //(data)
    },
    methods: {
        getCurrentButtonsSettings() { //параметры в кнопки передаются
            return this.statusesList
                .filter(status => status !== this.currentStatusToShow)
                .map(status => {
                    return {
                        name: status,
                        data: {
                            status: status
                        }
                    }
                });
        },
        getStatusMessage() {
          return this.currentStatusToShow + " To-do's";
        },
        changeArrow(isArrowUpped) {
            this.areStatusButtonsShown = !isArrowUpped;
        },
        async onStatusClick(data) {
            this.currentStatusToShow = data.status;//присвоение
            this.settings = this.getCurrentButtonsSettings();
            await this.findTasks();
        },
        isCreationEnabled() {
            return this.currentStatusToShow === TaskStatus.UPCOMING;// сравниваем
        },
        showCheckmarks() {
            return this.currentStatusToShow === TaskStatus.COMPLETED;
        },
        showDeletionCrosses() {
          return !(this.currentStatusToShow === TaskStatus.REMOVED || this.currentStatusToShow === TaskStatus.COMPLETED);//сравнение
        },
        getListTitleDecorations() {
          if(this.currentStatusToShow === TaskStatus.COMPLETED) {
              return 'line-through';// свойство в css
          }
          return 'none';
        },
        async findTasks() {
            this.list = await this.taskService.findByStatus(this.currentStatusToShow);
            // в компоненте берем переменную --вызываем метод ---в параметре передаем текущий статус - возращаем таски с этим статусом
        },
        async createItem(itemName) {// имя таски которую создаем
            await this.taskService.create({name: itemName, status: this.currentStatusToShow});//объект
            this.list = await this.findTasks();
        },
        async removeItem(id) {
            await this.taskService.removeById(id);
            this.list = await this.findTasks();
        }
    }
}