let list_of_wishes = document.querySelector("#list-of-wishes");
const wish_input_name = document.querySelector("#input-create-wish-fs");
const button_create_wish = document.querySelector("#button-create-wish");

async function createWish(wishNameInput) {

  if (wish_input_name.value != '') {
    wishNameInput = wish_input_name.value;
    const wish_item = document.createElement("li");
    wish_item.setAttribute("class", "list-item");

    const done_box = document.createElement("input");
    done_box.type = "checkbox";

    const wish_name = document.createElement("p")
    wish_name.textContent = wishNameInput;

    const btn_delete_wish = document.createElement('button');
    btn_delete_wish.textContent = "Deletar tarefa.";

    wish_item.append(done_box, wish_name, btn_delete_wish)

    console.log(wish_item);

    wish_input_name.value = '';

    btn_delete_wish.addEventListener('click', () => list_of_wishes.removeChild(btn_delete_wish.parentNode))

    return list_of_wishes.append(wish_item);
  }
  
}

const wishes = createWish

button_create_wish.addEventListener(
  "click", createWish
);

const done = document.querySelector("#feito");
const not_done = document.querySelector("#nao-feito");
const all_items = document.querySelector("#todos")

done.addEventListener('click', () => {
  const list = [...list_of_wishes.childNodes];
  const done = list.filter(el => el.firstChild.checked);

  if (done.length != 0) {
    list.forEach(el => el.style.display = "none")
    done.forEach((el) => (el.style.display = "flex"));
  }
})

not_done.addEventListener("click", () => {
  const list = [...list_of_wishes.childNodes];
  const done = list.filter((el) => el.firstChild.checked);

  if (done.length != 0) {
    list.forEach((el) => (el.style.display = "flex"));
    done.forEach((el) => (el.style.display = "none"));
  }
});

all_items.addEventListener("click", () => {
  const list = [...list_of_wishes.childNodes];

  if (done.length != 0) {
    list.forEach((el) => (el.style.display = "flex"));
  }
});