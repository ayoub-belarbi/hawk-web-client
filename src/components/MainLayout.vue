<template>
  <div>
    <app-left-sidebar></app-left-sidebar>
    <div id="page-content-wrapper">
      <div class="page-content container-fluid">
        <app-page-header></app-page-header>
        <div class="page-inner">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSidebar from './shared/LeftSidebar.vue'
import PageHeader from './shared/PageHeader.vue'

export default {
  components: {
    'appLeftSidebar': LeftSidebar,
    'appPageHeader': PageHeader
  },
  mounted: function () {
    $('#menu-toggle').click(function (e) {
      e.preventDefault()
      $('#wrapper').toggleClass('toggled')
    })
  }
}

</script>

<style lang="scss">
  @import '../assets/css/layout.scss';
  @import '../assets/css/common.scss';
</style>
