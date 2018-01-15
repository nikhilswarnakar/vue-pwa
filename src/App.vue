<template>
  <div id="app">
    <!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="100" alt="Angular Logo" src="./assets/logo.png">
</div>
<div>
<br/>
<leave-update></leave-update>
<!-- <total-count :myCount="count" @countUpdated="updateCount"></total-count> -->
<total-count :myCount="count"></total-count>
</div>
<div class="container">
    <div>	
        <div class="app-header">
            <div class="app-heading"><h3>CREW LEAVE</h3> </div>
            <div class="cds-logo_without-boeing-margin-50-percent app-logo" > </div>
        <!-- modal adding -->

        </div>
        <div class='panel-body'>

                <div class='col-xs-5 col-sm-5 col-md-5 col-lg-5 form-group'>
                    <label htmlFor='fromDate'>From</label><span >*</span>
                    <!-- <input type='date' class='form-control'  [(ngModel)]="model.fromDate"  (blur) ="showdateinfo()" /> -->
                    <input type='date' class='form-control'  v-model="fromDate"   />
                </div>
                <div class='col-xs-2 col-sm-2 col-md-2 col-lg-2 form-group' align='center'>
                    <br/>
                    -
                </div>
                <div class='col-xs-5 col-sm-5 col-md-5 col-lg-5 form-group'>
                    <label htmlFor='toDate'>To</label>
                    <!-- <input type='date' class='form-control'  [(ngModel)]="model.toDate"   /> -->
                    <input type='date' class='form-control'  v-model="toDate"   />
                </div>
                <div class='btn-toolbar pull-right ' >
                    <button type='button' class='btn btn-default' @click=" onClickHideQuota"  > Cancel </button>
                    <button type='button' class='btn btn-primary' @click=" onClickShowQuota"> Show Quota </button>
                </div>

        </div>
    </div>
    <!--
    <div *ngIf="showQuotaPanel" >
        <app-quota [vacationDate] = "parentString" ></app-quota>
    </div>
   
    <div *ngIf="(showQuotaPanel | async)" >
    <app-quota></app-quota>
    </div>
     -->
     
     <quota></quota>
    
</div>	



  </div>
</template>

<script>
require('crewmodules-design-system/dist/css/crewmodules-design-system.css')
require('../src/styles/styles.css')
import Quota from '@/components/Quota'
import TotalCount from '@/components/TotalCount'
import LeaveUpdate from '@/components/LeaveUpdate'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    'quota':Quota,
    'total-count':TotalCount,
    'leave-update':LeaveUpdate
  },
  data(){
    return {
      title:'app',
       fromDate: null,
      toDate: null,
      parentString: "",
      showQuotaPanel: false,
      lastSubmitDate: null,
      count: 0,
      leavequota: 0
    }
  },
  methods:{
    onClickShowQuota() {
    var vm = this
    if(this.fromDate != null && this.toDate != null){
      // this.parentString =  new DatePipe('en-US').transform (this.fromDate,'EEEE, MMMM d, y')+ "  to  " + new DatePipe('en-US').transform (this.toDate,'EEEE, MMMM d, y');
      this.parentString =  new Date(this.fromDate).toDateString() + "  to  " + new Date(this.toDate).toDateString();
      this.showQuotaPanel = true;
      
      var toDate = new Date(this.toDate).getTime();
      var fromDate = new Date(this.fromDate).getTime();
      var duration = (Math.floor((toDate - fromDate))/(1000*60*60*24));
      // this.leavequota = Math.abs(duration);
      // console.log('leavequota --- '+duration);
      // console.log(this);
    // this.ngRedux.dispatch({type: ADD_QUOTA, nikState: this});
    axios({
      url:'http://localhost:3000/leaves',
      method:'get'
    }).then(function(result){
      console.log(result);
      vm.leavequota = result.data[0].availableQuota;
    })
    console.log('calling axios')
    }
  },
  onClickHideQuota() {
    this.showQuotaPanel = false;
    console.log(this);
    // this.ngRedux.dispatch({type: HIDE_QUOTA, nikState: this});
  },
  // updateCount(newCount){
  //   this.count += newCount
  // }
  }
}
</script>

<style>
</style>
