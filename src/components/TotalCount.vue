<template>
  <div class="totalcount" v-if="count > 0">
    <!-- <p @click="incrementCount" class="text-center"><span span class="badge badge-secondary"> -->
  <p class="text-center"><span span class="badge badge-secondary">
    <!-- Total Leave Request Submitted : {{ count}} -->
    <!-- <br> -->
    Total Leave Request Submitted : {{ count }}
    <!-- <br> -->
    <!-- Total Leave Request Submitted : {{ myComputedProp}} -->
  </span></p>
  <br/>
</div>
</template>
<script>
export default {
  props:['myCount'],
  computed: {
     count: function() {
       return this.$store.getters.count;
     }     
   },
   created(){
        console.log('TotalCount created')
    },
    mounted(){
        console.log('TotalCount mounted')
    },
  beforeUpdate(){
      console.log('total count updated')
  }  
  
  }
//   computed:{
//       myComputedProp:function(){
//           return this.myCount+5
//       }
//   },
//   data(){
//       return{
//           count:0
//       }
//   },
//   methods:{
//       incrementCount(){
//           this.$emit('countUpdated',10)
//       }
//   }

</script>

