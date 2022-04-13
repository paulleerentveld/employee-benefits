function pageSearch() {
    let input, filter, cards, cardContainer, title, i;
    input = document.getElementById("page-search");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("card-container");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector('.card-title');
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  }