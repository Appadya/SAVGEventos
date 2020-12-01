<template>
  <footer id="footer" class="page-footer text-light font-small">
    <b-container fluid>
      <b-row>
        <b-col md class="p-3">
          <small>Copyright aqui</small>
        </b-col>
        <b-col id="contact-text" md="2" class="p-3">
          Contate-nos
        </b-col>
        <b-col id="twitter-button" md="1" class="p-3">
          <i class="fab fa-twitter"></i>
        </b-col>
        <b-col id="facebook-button" md="1" class="p-3">
          <i class="fab fa-facebook-square"></i>
        </b-col>
        <b-col id="linkedin-button" md="1" class="p-3">
          <i class="fab fa-linkedin"></i>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>