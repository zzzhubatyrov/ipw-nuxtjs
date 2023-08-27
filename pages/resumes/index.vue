<template>
  <ElasticsearchComponent/>
  <div class="container">
    <section v-for="r in resumes" :key="r.id">
       {{ r }}
    </section>
  </div>
  <ResumeComponent/>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const resumes = ref([]);
    onMounted(async () => {
      try {
        const response = await axios.get("http://localhost:5000/data/v1/users");
        resumes.value = response.data;
        console.log(resumes.value)
      } catch (error) {
        console.error(error);
      }
    });

    return {resumes};
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>