<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="http://localhost:8080/">Woongs MINI PROJECT</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
        <b-navbar-nav class="ml-auto">
          <b-button href="http://localhost:8080/modify">수정하기</b-button>
          <b-button href="http://localhost:8080/write">새로 만들기</b-button>

          <!-- <b-modal id="modifyModal" title="수정하기">
            <p class="my-4">Hello from modal!</p>
            <div>Test</div>
          </b-modal>
          <b-modal id="newModal" title="새로 만들기">
            <p class="my-4">Hello from modal!</p>
          </b-modal> -->
          
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