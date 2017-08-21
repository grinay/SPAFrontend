<template>
  <div>
    <div v-if="!requests.length">
       <circle10 class="center-block"></circle10>
       <h3 class="text-center">Идет загрузка данных. Подождите...</h3>
    </div>

    <div v-else="" class="table-responsive">
      <button @click="agentFilter = !agentFilter">Ntcn</button>
      <table  class="table table-hover table-striped issue-tracker">
        <thead>
        <tr>
          <td>
            Статус
          </td>
          <td>
            Краткая информация<br/>
            Услуга
          </td>
          <td>
            Организация
          </td>
          <td>
            Заявитель
          </td>
          <td>
            Ответственный
          </td>
          <td>
            Изменена
          </td>
          <td>
            Запланированна
          </td>
        </tr>
        </thead>

        <tbody id="issue-tracker-tbody">
        <tr v-for="request in requests"
            :class="{'warning': request.urgency=='High', 'danger': request.urgency=='Critical', 'info': request.urgency=='Low'}">

          <td>
            <div data-toggle="popover" data-placement="auto" data-trigger="hover" data-html="true"
                 data-content="@item.UserRequestChangeHistory.Last().Detail">
              <u> {{request.status.name}}</u>
            </div>
          </td>
          <td class="issue-info">
            <router-link :to="{ name: 'viewRequest', params: { id: request.id }}">
              Заявка {{request.id + ' от '}} {{request.registerTime | toDate}}
            </router-link>

            <br/>
            <small>{{request.title}}</small>
          </td>
          <td>
            <a href="">{{request.clientUser.company.name}}</a>
          </td>
          <td>
            <a href="" data-toggle="popover" data-placement="auto" data-trigger="hover" data-html="true"
               title="Контакты"
               :data-content="'Телефон:'+ request.clientUser.phone+ '<br> Мобильный телефон:'+ request.clientUser.mobilePhone">
              {{request.clientUser.fullName}}
            </a>
          </td>
          <td>
            {{request.agentUser.fullName}}
          </td>

          <td>
            <!--@Html.DisplayFor(modelItem => item.UserRequestChangeHistory.Last().DateTime)-->
            {{request.planTime | toDate}}
          </td>
          <td>
            <!--@Html.DisplayFor(modelItem => item.PlanTime)-->
            {{request.planTime | toDate}}
          </td>
        </tr>


        </tbody>
      </table>
    </div>
    <b-pagination size="sm" @change="changePage" :total-rows="itemsCount" v-model="currentPage"
                  :per-page="itemsPerPage"></b-pagination>
  </div>
</template>

<script>
  import config from '@/config'
  import Circle10 from 'vue-loading-spinner/src/components/Circle10.vue'

  export default {
    components: {
      Circle10
    },
    data: function () {
      return {
        userId:'74ea27ec-ade8-4f17-83d2-4c02ad70ccc6',
        requests: [],
        itemsPerPage: 10,
        itemsCount: 0,
        currentPage: 1,
        agentFilter: false,
        requestOptions:{
          agentFilter: "$filter=agentId eq ''",
          skip: "$skip=",
          top: "$top=",
        }
      }
    },
    watch:{
      agentFilter: function(){
        this.getUserRequests();
      }
    },
    methods: {
      changePage: function (page) {
        this.currentPage = page;
        this.getUserRequests();
      },
      getUserRequests: function () {
        this.requests = [];
        var url =  "odata/UserRequests/?$skip=" + this.itemsPerPage * (this.currentPage - 1) + "&$top=" + this.itemsPerPage + "&$orderby=id desc&$expand=clientUser($expand=company),agentUser($expand=company),status&$count=true";

        if(this.agentFilter){
          url+="&$filter=agentId eq '"+this.userId+"'";
        }

        this.$http.get(url).then(response => {
          this.requests = response.body.value;
          this.itemsCount = response.body['@odata.count'];
          // console.log(this.requests);
          // success callback
        }, response => {
          // error callback
        });
      }
    },
    created: function () {
      this.getUserRequests();
    },

    updated: function () {
      $('[data-toggle="popover"]').popover();
    },
  }

</script>
