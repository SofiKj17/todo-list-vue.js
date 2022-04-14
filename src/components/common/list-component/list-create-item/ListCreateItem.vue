<template>
  <div class="list-create-item">
    <div v-if="!editable" v-on:click="activateCreation">
      <span class="plus">+</span>
      <span style="margin-left: 3px">Create new item</span>
    </div>
    <div v-if="editable">
      <span class="plus">+</span>
      <input type="text" v-model="name">
      <span v-on:click="save">OK</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListCreateItem",
  data() {
    return {
      editable: false,
      name: ''
    }
  },
  methods: {
    activateCreation() {
      this.editable = true;
      this.$emit("");
    },
    save() {
      this.editable = false;
      if (this.name) {
        this.$emit("newitemcreated", this.name);
      }
      this.name = "";
    }
  }
}
</script>

<style scoped>
.list-create-item {
  font-family: 'Rationale', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  color: red;
}

.list-create-item:hover {
  width: 213px;

  background: rgba(153, 215, 208, 0.49);
  box-shadow: 1px 4px 6px #447B75;
  border-radius: 5px;
  color: red;
}

input {
  font-family: 'Rationale', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  border: 0;
}

span.plus {
  width: 10px;
  height: 10px;
  border: 1px solid #FC5079;
  /*box-sizing: border-box;*/
  border-radius: 50%;

  display: inline-block;
  text-align: center;
  font-size: 15px;
}
</style>