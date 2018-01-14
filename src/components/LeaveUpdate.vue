<template>
  <div v-show="$parent.count > 0">
<p class="text-center"><span span class="badge badge-secondary">
  Last Leave Request Successfully Submitted on {{ ($parent.lastSubmitDate) }}
</span></p>
<br/>
</div>
</template>
