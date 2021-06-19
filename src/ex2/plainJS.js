console.log("hello world");

async function displayData() {
  const raw = await fetch("data.json");
  const data = await raw.json();

  createTabs(data);
}

function createTabs(data) {
  data.map((item, index) => {
    // get parent elements
    const nav = document.querySelector(".nav-pills");
    const tabContent = document.querySelector(".tab-content");

    // add title into table
    const newTab = document.createElement("a");
    newTab.setAttribute("href", `#section${index}`);
    newTab.setAttribute("class", "flex-sm-fill text-sm-center nav-link");
    newTab.setAttribute("data-toggle", "pill");
    newTab.innerHTML = item.title;
    nav.appendChild(newTab);
    console.log(newTab.class);

    // add content into table
    const newContent = document.createElement("div");
    newContent.setAttribute("class", "tab-pane");
    newContent.setAttribute("id", `section${index}`);
    newContent.innerHTML = item.content;
    tabContent.appendChild(newContent);
  });
}

displayData();
