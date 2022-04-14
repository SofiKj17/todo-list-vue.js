<template>
  <div>
    <div class="list-item-wrapper" v-for="(item, index) in list" :key="index">
      <!--итерируется по тасками, свойство key (vue.js)-->
      <ListItemComponent :textDecoration="titlesTextDecoration" :title="item.name" :id="item.id"
                         :showCheckmark="showCheckmarks" v-on:deleteitem="deleteItem"
                         :showDeletionCross="showDeletionCrosses"/>
    </div>
    <ListCreateItem v-if="!disableCreation" v-on:newitemcreated="createItem"/>
  </div>
</template>

<script>
import ListItemComponent from "@/components/common/list-item-component/ListItemComponent";
import ListCreateItem from "@/components/common/list-component/list-create-item/ListCreateItem";

export default {
  name: "ListComponent",
  components: {ListCreateItem, ListItemComponent},
  props: ["list", "disableCreation", "showCheckmarks", "titlesTextDecoration", "showDeletionCrosses"],
  methods: {
    createItem(itemName) {
      this.$emit("createitem", itemName)
    },
    deleteItem(id) {
      this.$emit("deleteitem", id)// имитирует событие удаления
    }
  }
}
</script>

<style scoped>
.list-item-wrapper {
  margin-bottom: 5px;
}
</style>