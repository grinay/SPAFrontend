<template>


  <div class="row">
    <div class="col-lg-9">
      <div class="wrapper wrapper-content">
        <div class="ibox">
          <div class="ibox-content">
            <div class="row">
              <div class="col-lg-12">
                <div class="m-b-md">
                  <a href="#" class="btn btn-white btn-xs pull-right">Edit project</a>
                  <h2>{{request.title}}</h2>
                </div>
                <dl class="dl-horizontal">
                  <dt>Состояние:</dt>
                  <dd>{{request.status.description}}</dd>
                </dl>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5">
                <dl class="dl-horizontal">

                  <dt>Created by:</dt>
                  <dd>Alex Smith</dd>
                  <dt>Messages:</dt>
                  <dd> 162</dd>
                  <dt>Клиент:</dt>
                  <dd><a href="#" class="text-navy"> {{request.clientUser.company.name}}</a></dd>
                  <dt>Version:</dt>
                  <dd> v1.4.2 </dd>
                </dl>
              </div>
              <div class="col-lg-7" id="cluster_info">
                <dl class="dl-horizontal">

                  <dt>Последнее изменение:</dt>
                  <dd>{{ lastChange.changeTime| toDate}}</dd>
                  <dt>Создана:</dt>
                  <dd> {{request.registerTime | toDate}}</dd>
                  <!--<dt>Participants:</dt>-->
                  <!--<dd class="project-people">-->
                    <!--<a href=""><img alt="image" class="img-circle" src="img/a3.jpg"></a>-->
                    <!--<a href=""><img alt="image" class="img-circle" src="img/a1.jpg"></a>-->
                    <!--<a href=""><img alt="image" class="img-circle" src="img/a2.jpg"></a>-->
                    <!--<a href=""><img alt="image" class="img-circle" src="img/a4.jpg"></a>-->
                    <!--<a href=""><img alt="image" class="img-circle" src="img/a5.jpg"></a>-->
                  <!--</dd>-->
                </dl>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <dl class="dl-horizontal">
                  <dt>Completed:</dt>
                  <dd>
                    <div class="progress progress-striped active m-b-sm">
                      <div style="width: 60%;" class="progress-bar"></div>
                    </div>
                    <small>Project completed in <strong>60%</strong>. Remaining close the project, sign a contract and invoice.
                    </small>
                  </dd>
                </dl>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {

    data: function() {
      return {
        request:{
          title:'###############',
          registerTime:'###############',
          status:{
            name:'###############',
            desription:'###############'
          },
          clientUser: {
            company:{
              name:'###############'
            }
          },

        },
        lastChange: {
          changeTime:'###############',
          detail:''
        },

      }
    },
    watch: {
      '$route' (to, from) {


        if(to.name=="viewRequest" && from.params.id!= to.params.id) {
          this.getRequest();
        }
        // обработка изменений параметров пути...
      }
    },

    mounted(){
        this.getRequest();
    },
    methods:{
      getRequest: function () {

        var url = 'odata/UserRequests('+this.$route.params.id+')?&$expand=clientUser($expand=company),status,userRequestChangeHistory';
        this.$http.get(url).then(response => {
          this.request = response.body;
          var arrLen = response.body.userRequestChangeHistory.length;
          this.lastChange.changeTime = response.body.userRequestChangeHistory[arrLen-1].dateTime;
        }, response => {
          // error callback
        });
      }
    }
  }
</script>
