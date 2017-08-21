<template>
  <nav class="navbar-default navbar-static-side" role="navigation">
    <div class="sidebar-collapse">
      <ul class="nav" id="side-menu">
        <li class="nav-header">
          <div class="dropdown profile-element">
            <a data-toggle="dropdown" class="dropdown-toggle" href="#">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold">GRINAY</strong>
                            </span> <span class="text-muted text-xs block">Меню пользователя<b class="caret"></b></span>
                        </span>
            </a>
            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="#">Выход</a></li>
            </ul>
          </div>
          <div class="logo-element">
            IT+
          </div>
        </li>


        <li :class="{'active' : $route.path.match(/\/requests/i)}">
          <a href=""><i class="fa fa-comment-o fa-lg"></i> <span class="nav-label">Заявки</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level">
            <router-link to="/requests/create" tag="li">
              <a>Создать заявку</a>
            </router-link>
            <router-link to="/requests/" exact tag="li">
              <a>Список заявок</a>
            </router-link>
            <router-link to="/requests/report" tag="li">
              <a>Аналитика</a>
            </router-link>
          </ul>
        </li>
        <li class="">
          <a href=""><i class="fa fa-id-card-o fa-lg"></i> <span class="nav-label">Организации</span></a>
        </li>

        <li class="">
          <a href=""><i class="fa fa-users fa-lg"></i> <span class="nav-label">Пользователи</span></a>
        </li>
        <li class="">
          <a href=""><i class="fa fa-id-card-o fa-lg"></i> <span class="nav-label">Справочник услуг</span></a>
        </li>

        <li class="">
          <a href=""><i class="fa fa-id-card-o fa-lg"></i> <span class="nav-label">Сервисный центр</span></a>
        </li>

        <li class="">
          <a href=""><i class="fa fa-id-card-o fa-lg"></i> <span class="nav-label">Транспортные расходы</span></a>
        </li>

        <li>
          <a href="#"><i class="fa fa-cog fa-lg"></i> <span class="nav-label">Настройки системы</span><span
            class="fa arrow"></span></a>
          <ul class="nav nav-second-level collapse">
            <li class="active">
              <a href="#" id="damian"><i class="fa fa-comment-o fa-lg"></i> Заявки<span class="fa arrow"></span></a>
              <ul class="nav nav-third-level">
                <li><a href="">Статусы заявок</a></li>
              </ul>
            </li>
            <li class="">
              <a href=""><i class="fa fa-envelope-o fa-lg"></i> <span class="nav-label">Email Шаблоны</span></a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

