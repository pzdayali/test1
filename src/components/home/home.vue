<template>
        <div>
            <!--  1.完成轮播图部分  -->
            <div id="picswipe">
                 <mt-swipe :auto="4000">
                     <mt-swipe-item>1</mt-swipe-item>
                     <mt-swipe-item>2</mt-swipe-item>
                     <mt-swipe-item>3</mt-swipe-item>
                 </mt-swipe>   
            </div>
        </div>
</template>

<script>
export default {
          data:function(){
               return {
                     list:{}  
               }   
          },
          created:function(){
                  
          },
          methods:{
                getimg:function(){
                     var url="/api/getlunbo"   
                }
          }      
}
</script>

<style scoped>

</style>
