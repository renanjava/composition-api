<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
        <div class="column">
          <Temporizador @ao-temporizador-finalizado="finalizarTarefa" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "./Temporizador.vue";
import { ITarefa } from "@/interfaces/ITarefa";

export default defineComponent({
  name: "Formulario",
  components: {
    Temporizador,
  },
  emits: ["submitTarefa"],
  data() {
    return {
      descricao: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      const tarefa = {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
      } as ITarefa;
      this.$emit("submitTarefa", tarefa);
      this.descricao = "";
    },
  },
});
</script>

<style>
.box {
  color: var(--bg-primario) !important;
  background-color: var(--bg-secundario) !important;
}
.input {
  color: var(--texto-primario) !important;
  background-color: var(--bg-primario) !important;
}
.input::placeholder {
  color: var(--texto-primario) !important;
}
.formulario {
  color: var(--texto-primario) !important;
  background-color: var(--bg-primario) !important;
}
</style>