
<template>
  <button class="kn-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "kn-button" });
type ButtonProps = {
  type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
  return { [`kn-button-${buttonProps.type}`]: buttonProps.type };
});
</script>


