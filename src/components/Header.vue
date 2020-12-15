<template>
  <b-container id="header-image" :class="`${headerSize}`" fluid>
      <b-row :class="`${headerSize} text-center`" align-v="center">
          <b-col>
              <h2 class="text-light">{{ title }}</h2>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
        headerSize: String,
    }
}
</script>