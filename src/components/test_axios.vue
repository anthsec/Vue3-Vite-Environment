<template>
<div>
<button @click="get">hello</button>
</div>
</template>




<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  methods: {
    get() {
      
      let url = 'http://127.0.0.1:5000/';
      this.axios.get(url)
        .then(res => {
          console.log(res);
          this.data = res.data;
        })
    }
  },
};
</script>

<style>
</style>