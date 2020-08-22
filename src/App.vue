<template>
  <v-app id='app'>
    <dialog-loader ref="dialogLoader"></dialog-loader>
  </v-app>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator'
import DialogLoader from '@/modules/crosscutting/dialog/DialogLoader.vue';

@Component({
  components: { 
    DialogLoader,
  }
 })
export default class App extends Vue {

}
</script>
