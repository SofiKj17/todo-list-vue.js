<template>
  <div id="SearchBarWrapper">
    <span id="SearchBarTitle">{{ message }}</span>
    <span id="SearchBarArrowWrapper" v-on:click="change">
      <span v-if="isUpped" id="SearchBarArrowUp">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 10 5">
          <path d="m5.016 0-2.51 2.5L0 4.999 5.016 5l5.017-.001L7.525 2.5 5.016 0z"/>
        </svg>
      </span>
      <span v-if="!isUpped" id="SearchBarArrowDown">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 10 5">
          <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/>
        </svg>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "SearchBarComponent",
  props: ["message"],
  data() {
    return {
      isUpped: true
    }
  },
  methods: {
    change() {
      this.isUpped = !this.isUpped;
      this.$emit("arrowChanged", this.isUpped);
    }
  }
}
</script>

<style scoped>
#SearchBarArrowWrapper {
  margin-left: auto;
  margin-right: 10px;
}

#SearchBarArrowUp {
  width: 20px;
  transform: rotate(+90grad);
}

#SearchBarArrowDown {
  width: 20px;
}

#SearchBarWrapper {
  width: 217px;
  background: #EEEEEE;
  border: 1px solid #3D5C59;
  box-sizing: border-box;
  box-shadow: 3px 4px 8px #5BA099;
  border-radius: 11px;
  display: flex;
  padding: 0 0 0 10px;
}

#SearchBarTitle {
  font-family: 'Reem Kufi', sans-serif;
  font-size: 18px;
  color: #254E49;
  display: inline;
}
</style>