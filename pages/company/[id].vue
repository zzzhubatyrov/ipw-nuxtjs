<template>
  <div>
    <h1>Hello World!</h1>
    <h1>{{ company.id }}</h1>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import axios from "axios";
export default defineComponent({
  setup() {
    const {id} = useRoute().params
    const uri = 'http://localhost:5000/company/v1/' + id
    const company = ref([])
    onMounted(async () => {
      try {
        const response = await axios.get(uri)
        company.value = response.data
        console.log("company-data:",company.value)
      } catch (e) {
        console.log(e)
      }
    })
    return {company}
  }
})
</script>

<style scoped>

</style>