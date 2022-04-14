<template>
  <span class="checkmark">
    <span v-if="showCheckmark === undefined ? showCheckmarkDefault : showCheckmark">&checkmark;</span><!--если-значит смотрим на значение-->
    <span v-if="showCheckmark !== undefined && !showCheckmark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  </span>
</template>

<script>
export default {
  name: "CheckmarkComponent",
  props: ["showCheckmark"],
  data() {
    return {
      showCheckmarkDefault: true
    }
  }
}
</script>

<style scoped>
.checkmark {
  border: 1px solid #447B75;
  border-radius: 50%;
  font-size: 12px;
  color: #447B75;
}
</style>