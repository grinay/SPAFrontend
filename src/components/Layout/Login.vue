<template>
  <ul class="nav navbar-top-links navbar-right">
    <li class="dropdown">
      <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#" aria-expanded="false">
        <i class="fa fa-envelope"></i> <span class="label label-warning">16</span>
      </a>
      <ul class="dropdown-menu dropdown-messages">
        <li>
          <div class="dropdown-messages-box">
            <a href="profile.html" class="pull-left">

            </a>
            <div class="media-body">
              <small class="pull-right">46h ago</small>
              <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>
              <small class="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
            </div>
          </div>
        </li>
        <li class="divider"></li>
      </ul>
    </li>
    <li class="dropdown">
      <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#" aria-expanded="false">
        <i class="fa fa-bell"></i> <span class="label label-primary">8</span>
      </a>
      <ul class="dropdown-menu dropdown-alerts">
        <li>
          <a href="mailbox.html">
            <div>
              <i class="fa fa-envelope fa-fw"></i> You have 16 messages
              <span class="pull-right text-muted small">4 minutes ago</span>
            </div>
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="profile.html">
            <div>
              <i class="fa fa-twitter fa-fw"></i> 3 New Followers
              <span class="pull-right text-muted small">12 minutes ago</span>
            </div>
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="grid_options.html">
            <div>
              <i class="fa fa-upload fa-fw"></i> Server Rebooted
              <span class="pull-right text-muted small">4 minutes ago</span>
            </div>
          </a>
        </li>
        <li class="divider"></li>
        <li>
          <div class="text-center link-block">
            <a href="notifications.html">
              <strong>See All Alerts</strong>
              <i class="fa fa-angle-right"></i>
            </a>
          </div>
        </li>
      </ul>
    </li>
    <li><a v-on:click.prevent="logout"><i class="fa fa-sign-out"></i>Выйти</a></li>
  </ul>
</template>

<script>
  import {eventBus} from '@/main'

  export default {
    methods: {

        logout: function(){
          eventBus.$emit('logout');
        }
    }
  }
</script>
