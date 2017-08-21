<template>
  <div class="middle-box text-center loginscreen animated fadeInDown">
    <div>
      <div>
        <h1 class="logo-name">IT+</h1>
      </div>
      <h3>Вход в сервис деск IT+</h3>
      <form class="m-t" role="form" @submit.prevent="login">
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Email" v-model="data.body.username" required>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" placeholder="Пароль" v-model="data.body.password" required>
        </div>
        <button type="submit" class="btn btn-primary block full-width m-b">Войти</button>

        <a href="#">
          <small>Забыли пароль?</small>
        </a>

        <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
      </form>
      <p class="m-t">
        <small>ООО "ИТ Решения" &copy; 2008-2017</small>
      </p>
    </div>
  </div>
</template>

<script>
  import config from '@/config'

  export default {
    name: 'hello',
    data() {
      return {

        data: {
          body: {
            username: '',
            password: '',
            grant_type: 'password',
          },
          rememberMe: true,
          fetchUser: false,
        },

        error: null
      }
    },
    methods: {
      login: function () {

        this.$auth.login({
          emulateJSON: true,
          body: this.data.body,
          rememberMe: this.data.rememberMe,
          error(res) {
            //console.log('error ' + this.context);
            this.error = res.body.error_description;
          }
        });
      }
    }
  }
</script>
