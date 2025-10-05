<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">Descricao da Tarefa</div>
      <div class="column">
        <Cronometro />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
  },
});
</script>
