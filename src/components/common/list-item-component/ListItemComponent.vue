<template>
  <div class="list-item">
    <CheckmarkComponent :showCheckmark="showCheckmark"/>
    <span class="title" :style="{'text-decoration': textDecoration}">{{ title }}</span>
    <!--:style (vue.js)- с помощью этого свойства мы можем передовать значения переменных в свойство style
    ////в качестве текста передаем переменную-->
    <span class="delete" v-on:click="deleteItem" v-if="showDeletionCross">&cross;</span>
  </div>
</template>

<script>
import CheckmarkComponent from "@/components/common/checkmark-component/CheckmarkComponent";

export default {
  name: "ListItemComponent",
  components: {CheckmarkComponent},
  props: ["title", "id", "showCheckmark", "textDecoration", "showDeletionCross"],
  methods: {
    deleteItem() {
      return this.$emit("deleteitem", this.id);// имитирует передачу   ид таски которую мы отображаем
    }
  }
}
</script>

<style scoped>
.title {
  width: 100%;
  margin-left: 3px;

}

.list-item {
  font-family: 'Rationale', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: #5C5959;
  display: flex;
  cursor: pointer;
}

.list-item:hover {
  background: rgba(153, 215, 208, 0.49);
  box-shadow: 1px 4px 6px #447B75;
  border-radius: 5px;
}

.delete {
  float: right;
  color: red;
  border: red solid 1px;
  border-radius: 50%;
  display: inline-block;
}
</style>