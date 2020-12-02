<template>
  <b-container class="mt-5 mb-5 border-shadow">
    <b-row class="primary-contents">
      <b-col md class="p-5">
        <h2>Imagens em destaque</h2>
        <Carousel />
      </b-col>
    </b-row>
    <b-row id="about-us" class="secondary-contents">
      <b-col md class="p-5">
        <h2>Sobre nós</h2>
        <p>
          Seja bem vindo(a) ao Sistema de apoio a visitante em grandes eventos,
          visamos proporcionar de forma a facilitar a busca de locais próximos a
          você, para que possa aproveitar todos os dias de sua viagem. Nosso
          site listará para você, seja por avaliação, menor preço ou maior
          preço, todos os melhores locais da região ao seu redor.
        </p>
        <p>Temos diversas categorias:</p>
        <ul>
          <li>Pontos turísticos</li>
          <li>Praias</li>
          <li>Hoteis</li>
          <li>Delegacias</li>
          <li>Hospitais</li>
        </ul>
        <p>Aproveite sua viagem!</p>
      </b-col>
      <b-col md>
        <img src="@/assets/niteroi.jpg" width="100%" alt="" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Carousel from '../components/Carousel'

export default {
  name: "Home",
  components: {
    Carousel,
  }
};
</script>
