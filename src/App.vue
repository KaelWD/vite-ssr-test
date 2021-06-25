<template>
  <v-app>
    <v-container>
      Hi
      <v-btn color="primary">Click me</v-btn>

      <tsx-component />
    </v-container>
  </v-app>
</template>

<script>
import TsxComponent from './TsxComponent'

export default {
  components: {
    TsxComponent,
  }
}
</script>
