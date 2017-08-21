<template>
  <div class="wrapper wrapper-content">
    <div class="row">
      <div class="col-lg-12">
        <div class="ibox">
          <div class="ibox-title">
            <a class="btn btn-primary btn-sm" href=""><i class="fa fa-plus"></i> Создать заявку</a>
          </div>
          <div class="ibox-content">
            <div>
              <div class="m-b">
                <div class="btn-group" id="filter-btns">
                  <a class="btn btn-sm btn-white">Мои заявки</a>
                  <a class="btn btn-sm btn-primary active">Открытые</a>
                  <a class="btn btn-sm btn-white">Закрытые</a>
                </div>

              </div>
              <div class="m-b">
                <div class="input-group">
                  <input type="text" placeholder="Поиск заявки" class="form-control" id="filter">
                  <span class="input-group-btn">
                                    <button type="button" class="btn btn-white"> Поиск</button>
                                </span>
                </div>
              </div>
            </div>


            <request-list></request-list>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Vue from 'vue'
  //import VueResource from 'vue-resource'
  import RequestList from './RequestList.vue'

  //Vue.use(VueResource);

  export default {
    components: {
      RequestList
    },
    //http://localhost:47854/api/UserRequest/All
  }
</script>

