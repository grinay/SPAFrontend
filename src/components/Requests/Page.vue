<template>
  <div>
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-sm-4">
        <h2>{{$route.meta.breadcrumb}}</h2>
        <breadcrumbs></breadcrumbs>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


<script>
  import Vue from 'vue'
  import VueBreadcrumbs from 'vue-breadcrumbs'

  Vue.use(VueBreadcrumbs, {
    template: '<ol class="breadcrumb" v-if="$breadcrumbs.length"> ' +
    '<router-link  v-for="(crumb, key) in $breadcrumbs" :to="linkProp(crumb)" :key="key" tag="li">' +
    '<a v-if="$breadcrumbs.length>key+1">{{ crumb | crumbText }}</a>' +
    '<strong v-else>{{ crumb | crumbText }}</strong></router-link> ' +
    '</ol>'
  });

  export default {

  }
</script>
