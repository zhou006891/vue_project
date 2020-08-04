<template>
  <div>
     <el-button @click="loginOut" type="info">退出</el-button>
  </div>
</template>

<script>
export default {
  methods:{
    loginOut:function(){
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>