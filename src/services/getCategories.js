import http from "./httpService";

export function getCategories() {
  return http.get("/category/list").then(({ data }) => data.data);
}

export function addNewCategory(data) {
  return http.post("/admin/category/add", data).then(({ data }) => data.data);
}
