<template>
  <div class="StatusButtonComponent" v-on:click="onButtonClick">
    <span class="StatusButtonComponent">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: "StatusButtonComponent",
  props: ["name", "data"],// входные свойства
  methods: {
    onButtonClick() {
      this.$emit("buttonclicked", this.data);// состояние события
    }
  }
}
</script>

<style scoped>
div.StatusButtonComponent {
  height: 30px;
  width: 62px;
  border-radius: 10px;

  background-color: #BFEBE6;
  box-shadow: 2px 4px 6px #447B75;
  text-align: center;
  padding-top: 7px;
}

span.StatusButtonComponent {
  font-family: 'Rationale', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
}
</style>