<template>
  <Box>
    <div class="columns">
      <div class="column is-7">{{ descricao || 'Tarefa sem descrição' }}</div>
      <div class="column">
        <Cronometro :tempo-em-segundos="duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "./Cronometro.vue";
import Box from "./Box.vue";

export default defineComponent({
  name: "Tarefa",
  components: {
    Cronometro,
    Box
  },
  props: {
    duracaoEmSegundos: Number,
    descricao: String,
  },
});
</script>
