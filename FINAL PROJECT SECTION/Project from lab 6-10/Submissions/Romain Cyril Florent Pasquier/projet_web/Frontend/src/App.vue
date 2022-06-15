<template>
  <Header></Header>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "app",
  components: {Header},
  data() {
    return {
    };
  },
};
</script>

<style>
Header
{
  z-index: 10;
}
</style>
