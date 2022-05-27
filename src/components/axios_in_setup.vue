<script>
import { ref } from 'vue'
import { getCurrentInstance } from "vue";

export default{
   setup(){

       const data = ref('hello');
       const value = data.value;

       const { proxy } = getCurrentInstance()
       const try_axios = () => {
           proxy.$axios.get("/api/xxxx?xxx=xxx").then(res => {
               console.log(res);
           }).catch(err => {
               console.log(err);
           })
       }

       return {
              data,
              value,
              try_axios
       }

   }
}

</script>

<template>
<div>

</div>
  
</template>

<style scoped>

</style>