function pageSearch() {
    let input, filter, cards, cardContainer, title, i;
    input = document.getElementById("page-search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("card-container");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector('.card-title');
      text = cards[i].querySelector('.card-text');
      if (title.innerText.toUpperCase().indexOf(filter) > -1 || text.innerText.toUpperCase().indexOf(filter) > -1) {
        //cards[i].style.display = "";
        cards[i].classList.remove("d-none");
      } else {
        //cards[i].style.display = "none";
        cards[i].classList.add("d-none");
      }
    }
  }

