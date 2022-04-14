<template>
  <div id="UnderlineMessageComponent">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "UnderlineMessageComponent",
  props: ["message"]
}
</script>

<style scoped>
#UnderlineMessageComponent {
  width: 110px;

  font-family: 'Reem Kufi', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.075em;

  color: #254E49;

  border-bottom: black solid 1px;
}
</style>