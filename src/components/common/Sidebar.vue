
<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus'
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                      icon: 'el-icon-lx-home',
                      index: 'dashboard',
                      title: 'Dashboard'
                    },
                    {
                      icon: 'el-icon-lx-cascades',
                      index: 'table',
                      title: 'Table'
                    },
                    {
                      icon: 'el-icon-lx-copy',
                      index: 'tabs',
                      title: 'Tabs'
                    },
                    {
                      icon: 'el-icon-lx-calendar',
                      index: '3',
                      title: '양식관련',
                      subs: [
                        {
                          index: 'form',
                          title: 'Form'
                        },
                        {
                          index: '3-2',
                          title: '편집기',
                          subs: [
                            {
                              index: 'editor',
                              title: 'Html Editor'
                            },
                            {
                              index: 'markdown',
                              title: 'markdown Editor'
                            },
                          ]
                        },
                        {
                          index: 'upload',
                          title: '파일업로드'
                        }
                      ]
                    },
                    {
                      icon: 'el-icon-lx-emoji',
                      index: 'icon',
                      title: 'Icon'
                    },
                    {
                      icon: 'el-icon-lx-favor',
                      index: 'charts',
                      title: 'Chart'
                    },
                    {
                      icon: 'el-icon-rank',
                      index: 'drag',
                      title: 'Drag'
                    },
                    {
                      icon: 'el-icon-lx-warn',
                      index: '6',
                      title: '메시지',
                      subs: [
                        {
                          index: 'permission',
                          title: '권한'
                        },
                        {
                          index: '404',
                          title: '404 NotFound'
                        }
                      ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','')
            }
        },
        created(){
            // Event Bus
            bus.$on('collapse', msg => {
                this.collapse = msg
            })
        }
    }
</script>

<style scoped>
    .sidebar{
      display: block;
      position: absolute;
      left: 0;
      top: 70px;
      bottom:0;
      overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
      width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
      width: 250px;
    }
    .sidebar > ul {
      height:100%;
    }
</style>
