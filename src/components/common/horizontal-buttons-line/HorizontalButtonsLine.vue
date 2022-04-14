<template>
  <div class="HorizontalButtonsLine">
    <div class="HorizontalButtonsLineBlock" v-for="setting in settings" v-bind:key="setting.name">
      <StatusButtonComponent :name="setting.name" :data="setting.data" v-on:buttonclicked="onButtonClick"
                             v-bind:key="setting.name"/>
    </div>
  </div>
</template>

<script>
import StatusButtonComponent from "@/components/common/button-component/ButtonComponent";

export default {
  name: "HorizontalButtonsLine",
  props: ["settings"],
  components: {
    StatusButtonComponent
  },
  methods: {
    onButtonClick(data) {
      this.$emit("somebuttonclick", data);
    }
  }
}
</script>

<style scoped>
div.HorizontalButtonsLine {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

div.HorizontalButtonsLineBlock {
  display: inline-block;
  /*padding: 0 10px 0 0;*/
}
</style>