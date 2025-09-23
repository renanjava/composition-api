const { createApp, ref, reactive, computed, nextTick } = Vue;

createApp({
  setup() {
    // Estado reativo
    const users = ref([]);
    const editingUser = ref(null);
    const alert = reactive({
      show: false,
      message: "",
      type: "",
    });

    // Usuário atual para o formulário
    const currentUser = reactive({
      name: "",
      email: "",
      age: "",
      city: "",
    });

    // Função para gerar ID único
    const generateId = () => {
      return Date.now() + Math.random();
    };

    // Função para mostrar alerta
    const showAlert = (message, type = "success") => {
      alert.show = true;
      alert.message = message;
      alert.type = type === "success" ? "alert-success" : "alert-error";

      setTimeout(() => {
        alert.show = false;
      }, 3000);
    };

    // Limpar formulário
    const clearForm = () => {
      currentUser.name = "";
      currentUser.email = "";
      currentUser.age = "";
      currentUser.city = "";
      editingUser.value = null;
    };

    // CREATE & UPDATE - Salvar usuário
    const saveUser = () => {
      try {
        if (editingUser.value) {
          // Atualizar usuário existente
          const index = users.value.findIndex(
            (u) => u.id === editingUser.value.id
          );
          if (index !== -1) {
            users.value[index] = {
              id: editingUser.value.id,
              name: currentUser.name,
              email: currentUser.email,
              age: parseInt(currentUser.age),
              city: currentUser.city,
              createdAt: editingUser.value.createdAt,
              updatedAt: new Date().toLocaleString("pt-BR"),
            };
            showAlert("Usuário atualizado com sucesso! ✅");
          }
        } else {
          // Criar novo usuário
          const newUser = {
            id: generateId(),
            name: currentUser.name,
            email: currentUser.email,
            age: parseInt(currentUser.age),
            city: currentUser.city,
            createdAt: new Date().toLocaleString("pt-BR"),
            updatedAt: new Date().toLocaleString("pt-BR"),
          };

          users.value.push(newUser);
          showAlert("Usuário adicionado com sucesso! 🎉");
        }

        clearForm();
      } catch (error) {
        showAlert("Erro ao salvar usuário: " + error.message, "error");
      }
    };

    // READ - Os usuários já são exibidos via reatividade

    // UPDATE - Editar usuário
    const editUser = (user) => {
      editingUser.value = user;
      currentUser.name = user.name;
      currentUser.email = user.email;
      currentUser.age = user.age.toString();
      currentUser.city = user.city;

      // Scroll suave para o formulário
      nextTick(() => {
        document.querySelector(".form-container").scrollIntoView({
          behavior: "smooth",
        });
      });
    };

    // DELETE - Excluir usuário
    const deleteUser = (id) => {
      if (confirm("Tem certeza que deseja excluir este usuário?")) {
        const index = users.value.findIndex((u) => u.id === id);
        if (index !== -1) {
          users.value.splice(index, 1);
          showAlert("Usuário excluído com sucesso! 🗑️");

          // Se estava editando o usuário excluído, limpar o formulário
          if (editingUser.value && editingUser.value.id === id) {
            clearForm();
          }
        }
      }
    };

    // Dados iniciais para demonstração
    users.value = [
      {
        id: 1,
        name: "Maria Silva",
        email: "maria@email.com",
        age: 28,
        city: "São Paulo",
        createdAt: "23/09/2024 10:30",
        updatedAt: "23/09/2024 10:30",
      },
      {
        id: 2,
        name: "João Santos",
        email: "joao@email.com",
        age: 35,
        city: "Rio de Janeiro",
        createdAt: "23/09/2024 11:15",
        updatedAt: "23/09/2024 11:15",
      },
    ];

    // Retornar tudo que será usado no template
    return {
      users,
      currentUser,
      editingUser,
      alert,
      saveUser,
      editUser,
      deleteUser,
      clearForm,
    };
  },
}).mount("#app");
