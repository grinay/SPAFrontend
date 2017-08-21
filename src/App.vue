<template>
  <div id="wrapper" v-if="$auth.check()">
    <!--Left Navigation-->
    <left-nav-bar></left-nav-bar>
    <!--Page wraper-->
    <div id="page-wrapper" class="gray-bg">
      <!--Top Navigation-->
      <top-nav-bar></top-nav-bar>
      <!-- Main view  -->

      <transition :duration="{ enter: 150, leave: 150}" mode="out-in" enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>


      <footer-div></footer-div>
    </div>
    <!-- End page wrapper-->
  </div>

  <router-view v-else=""></router-view>

</template>

<script>
  import 'expose-loader?$!expose-loader?jQuery!jquery';
  import 'bootstrap/dist/css/bootstrap.min.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import 'bootstrap/dist/js/bootstrap'
  import 'animate.css'
  import 'font-awesome-webpack'
  import 'pace'
  import 'metismenu'
  import 'jquery-slimscroll'

  import './assets/js/inspinia'

  import LeftNavBar from './components/Layout/LeftNavBar.vue'
  import TopNavBar from './components/Layout/TopNavBar.vue'
  import FooterDiv from './components/Layout/Footer.vue'
  import {eventBus} from '@/main'

  export default {
    name: 'app',
    components: {
      LeftNavBar,
      TopNavBar,
      FooterDiv
    },
    mounted: function () {

      eventBus.$on('logout', this.logout);
    },
    methods: {


      logout: function () {


        this.$auth.logout({
          makeRequest: false,
          success() {
            console.log('success ' + this.context);
          },
          error() {
            console.log('error ' + this.context);
          }
        });
      }
      ,

    }
  }
</script>


<style src="./assets/SASS/style.sass" lang="sass"></style>
