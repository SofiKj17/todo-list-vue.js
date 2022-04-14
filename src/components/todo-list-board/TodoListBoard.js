import StatusButtonComponent from "@/components/common/button-component/ButtonComponent";
import HorizontalButtonsLine from "@/components/common/horizontal-buttons-line/HorizontalButtonsLine";
import {TaskService} from "@/service/TaskService";
import ListComponent from "@/components/common/list-component/ListComponent";
import {TaskStatus} from "@/model/TaskStatus";
import GreetingComponent from "@/components/common/greeting-component/GreetingComponent";
import SearchBarComponent from "@/components/common/search-bar-component/SearchBarComponent";
import UnderlineMessageComponent from "@/components/common/underline-message-component/UnderlineMessageComponent";

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
            taskService: TaskService.getInstance(),
            currentStatusToShow: TaskStatus.UPCOMING,
            statusesList: Object.values(TaskStatus),
            settings: [],
            areStatusButtonsShown: false
            //объект c переменными компонента
        }
    },
    mounted() { //вызывается когда компонент построен vue.js
        this.onStatusClick({status: this.currentStatusToShow}); //(data)

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
        onStatusClick(data) {
            this.currentStatusToShow = data.status;//присвоение
            this.settings = this.getCurrentButtonsSettings();
            this.list = this.findTasks();
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
        findTasks() {
            return this.taskService.findByStatus(this.currentStatusToShow);
            // в компоненте берем переменную --вызываем метод ---в параметре передаем текущий статус - возращаем таски с этим статусом
        },
        createItem(itemName) {// имя таски которую создаем
            this.taskService.create({name: itemName, status: this.currentStatusToShow});//объект
            this.list = this.findTasks();
        },
        removeItem(id) {
            this.taskService.removeById(id);
            this.list = this.findTasks();
        }
    }
}