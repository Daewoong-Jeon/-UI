<template>
  <div>
    <b-navbar toggleable="lg" type="dark" style="background-color: rgb(19, 215, 203);">
      <b-navbar-brand href="http://localhost:8080/">Woongs MINI PROJECT</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-button href="http://localhost:8080/config">Config</b-button>
        </b-navbar-nav>
      </b-collapse>
      
    </b-navbar>
  </div>
</template>
<script>
export default {
    name: "headerCom"
}
</script>