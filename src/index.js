import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const pobj = document.createElement("p");
  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  div.className = "list-row";
  pobj.className = "list-title";
  pobj.innerText = text;
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    const addTarget = completeButton.parentNode.parentNode;
    const text = addTarget.firstElementChild.firstElementChild.innerText;

    addTarget.textContent = null;

    const div = document.createElement("div");
    div.className = "list-row";
    const pobj = document.createElement("p");
    pobj.className = "list-title";
    pobj.innerText = text;
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = returnButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    div.appendChild(pobj);
    div.appendChild(returnButton);
    addTarget.appendChild(div);

    const completeList = document.getElementById("complete-list");
    completeList.appendChild(addTarget);
  });
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });
  div.appendChild(pobj);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
