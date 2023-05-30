//select form
const form = document.querySelector("form");
//select card
const card_1 = document.querySelector(".card");
const card_2 = document.querySelector(".card-2");
form.addEventLsitener("submit", (e) => {
    //when the form is selected do
    e.preventDefault(); //prevent the default action of refreshing the page when the button is clicked
    card_1.classList.add("hide");
    card_2.class.remove('hide');
});