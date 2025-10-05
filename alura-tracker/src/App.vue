<template>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"
  />
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario @submit-tarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="tarefa in tarefas"
          :descricao="tarefa.descricao"
          :duracao-em-segundos="tarefa.duracaoEmSegundos"
          :key="tarefa.descricao"
        />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import { ITarefa } from "./interfaces/ITarefa";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
});
</script>

<style scoped>
.lista {
  padding: 1.25rem;
}
.box {
  background: #242423;
}
</style>
