<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ descricao }}</div>
      <div class="column">
        <Cronometro :tempo-em-segundos="duracaoEmSegundos" />
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
  props: {
    duracaoEmSegundos: Number,
    descricao: String,
  },
});
</script>
