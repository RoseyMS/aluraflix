const categoriesList = () => {
  return fetch("https://perfect-sari-crab.cyclic.app/categories")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      return data;
    });
};

const addCategory = (id, title, description, color, securityCode) => {
  return fetch("https://perfect-sari-crab.cyclic.app/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      title,
      description,
      color,
      securityCode,
    }),
  });
};

const deleteCategory = (id) => {
  return fetch(`https://perfect-sari-crab.cyclic.app/categories/${id}`, {
    method: "DELETE",
  });
};

const searchCategory = (id) => {
  return fetch(`https://perfect-sari-crab.cyclic.app/categories?q=${id}`).then(
    (respuesta) => respuesta.json()
  );
};

const editCategory = (id, title, description, color, securityCode) => {
  return fetch(`https://perfect-sari-crab.cyclic.app/categories/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, description, color, securityCode }),
  })
    .then((respuesta) => respuesta.json())
    .catch((err) => console.error("ha ocurrido un error", err));
};
export const categoriesServices = {
  categoriesList,
  addCategory,
  editCategory,
  deleteCategory,
  searchCategory,
};
