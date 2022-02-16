let link_items = document.getElementsByClassName("link-item");

for (let i = 0; i < link_items.length; i++) {
    let a = link_items[i].getElementsByTagName("a")[0];
    let text_added = false;
    a.addEventListener("mouseover", () => {
        if (!text_added) {
            a.innerHTML += ` <span class="link-item-text">${a.id}</span>`;
            text_added = true;
        }
    });
    a.addEventListener("mouseout", () => {
        if (text_added) {
            a.innerHTML = a.innerHTML.replace(` <span class="link-item-text">${a.id}</span>`, "");
            text_added = false;
        }
    });
}