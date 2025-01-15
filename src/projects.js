export let pro = [];
export  default function projects() {

  let proname = document.querySelector("#project").value;
  if (proname) {
    pro.push(proname);
    display(proname);
  }

  function display(name) {
    let spro = document.querySelector("#spro");
    let pname = document.createElement("div");
    pname.classList.add("pname");
    pname.innerHTML = name;

    let container2 = document.createElement("div");
    container2.classList.add("container2");

    container2.appendChild(pname);

    let del = document.createElement("button");
    del.classList.add("del");
    del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
  </svg>`;

    del.addEventListener("click", (pname) => {
      let index = pro.indexOf(pname);
      if (index > -1) {
        pro.splice(index, 1);
      }
      container2.remove();
    });

    container2.appendChild(del);

    spro.appendChild(container2);
  }
}

 export function display(name) {
  let spro = document.querySelector("#spro");
  let pname = document.createElement("div");
  pname.classList.add("pname");
  pname.innerHTML = name;

  let container2 = document.createElement("div");
  container2.classList.add("container2");

  container2.appendChild(pname);

  let del = document.createElement("button");
  del.classList.add("del");
  del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>`;

  del.addEventListener("click", () => {
    let index = pro.indexOf(pname.innerHTML);
    if (index > -1) {
      pro.splice(index, 1);
    }
    container2.remove();
  });

  container2.appendChild(del);

  spro.appendChild(container2);
}