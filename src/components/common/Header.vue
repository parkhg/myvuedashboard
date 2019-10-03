<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-menu"></i>
    </div>
    <div class="logo">System Dashboard</div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 전체화면 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
            <el-tooltip effect="dark" :content="fullscreen?'취소':'전체'" placement="bottom">
                <i class="el-icon-rank"></i>
            </el-tooltip>
        </div>
        <!-- 메시지 센터 -->
        <div class="btn-bell">
            <el-tooltip effect="dark" :content="message?'${message}읽지않은 메시지':'메시지'" placement="bottom">
                <router-link to="/tabs">
                    <i class="el-icon-bell"></i>
                </router-link>
            </el-tooltip>
            <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!-- 사용자 이미지 -->
        <div class="user-avator"><img src="static/img/img.jpg"></div>
        <!-- Click -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                {{username}} <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <a href="http://wu.ac.kr" target="_blank">
                    <el-dropdown-item>Blog</el-dropdown-item>
                </a>
                <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                    <el-dropdown-item>github</el-dropdown-item>
                </a>
                <el-dropdown-item divided  command="loginout">Logout</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
  import bus from '../common/bus'
  export default {
      data() {
          return {
              collapse: false,
              fullscreen: false,
              name: 'Baguju',
              message: 2
          }
      },
      computed:{
          username(){
              let username = localStorage.getItem('ms_username')
              return username ? username : this.name
          }
      },
      methods:{
          // 사용자 이름 선택시
          handleCommand(command) {
              if(command == 'loginout'){
                  localStorage.removeItem('ms_username')
                  this.$router.push('/login')
              }
          },
          // 화면접기
          collapseChage(){
              this.collapse = !this.collapse
              bus.$emit('collapse', this.collapse)
          },
          // 전체화면
          handleFullScreen(){
              let element = document.documentElement
              if (this.fullscreen) {
                  if (document.exitFullscreen) {
                      document.exitFullscreen()
                  } else if (document.webkitCancelFullScreen) {
                      document.webkitCancelFullScreen()
                  } else if (document.mozCancelFullScreen) {
                      document.mozCancelFullScreen()
                  } else if (document.msExitFullscreen) {
                      document.msExitFullscreen()
                  }
              } else {
                  if (element.requestFullscreen) {
                      element.requestFullscreen()
                  } else if (element.webkitRequestFullScreen) {
                      element.webkitRequestFullScreen()
                  } else if (element.mozRequestFullScreen) {
                      element.mozRequestFullScreen()
                  } else if (element.msRequestFullscreen) {
                      // IE11
                      element.msRequestFullscreen()
                  }
              }
              this.fullscreen = !this.fullscreen
          }
      },
      mounted(){
          if(document.body.clientWidth < 1500){
              this.collapseChage()
          }
      }
  }
/* */
</script>

<style scoped>
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        font-size: 22px;
        color: #fff;
    }
    .collapse-btn{
        float: left;
        padding: 0 21px;
        cursor: pointer;
        line-height: 70px;
    }
    .header .logo{
        float: left;
        width:250px;
        line-height: 70px;
    }
    .header-right{
        float: right;
        padding-right: 50px;
    }
    .header-user-con{
        display: flex;
        height: 70px;
        align-items: center;
    }
    .btn-fullscreen{
        transform: rotate(45deg);
        margin-right: 5px;
        font-size: 24px;
    }
    .btn-bell, .btn-fullscreen{
        position: relative;
        width: 30px;
        height: 30px;
        text-align: center;
        border-radius: 15px;
        cursor: pointer;
    }
    .btn-bell-badge{
        position: absolute;
        right: 0;
        top: -2px;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background: #f56c6c;
        color: #fff;
    }
    .btn-bell .el-icon-bell{
        color: #fff;
    }
    .user-name{
        margin-left: 10px;
    }
    .user-avator{
        margin-left: 20px;
    }
    .user-avator img{
        display: block;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
    .el-dropdown-link{
        color: #fff;
        cursor: pointer;
    }
    .el-dropdown-menu__item{
        text-align: center;
    }
</style>
