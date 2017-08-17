$(document).ready(function() {

  var burgerInput = $("#burger-name");

  $(document).on("submit", "#author-form", getBurgers);
  $(document).on("click", ".devour-burger", handleDeleteButtonPress);

  getBurgers();
  
  function burgerSubmit(event) {
    event.preventDefault();

    if (!burgerInput.val().trim().trim()) {
      return;
    }
    newBurger({
      name: burgerInput
        .val()
        .trim()
    });
  }

  function newBurger(burgerData) {
    $.post("/api/burgerpost", burgerData)
      .then(getBurgers);
  }

  function getBurgers() {
    $.get("/api/burgers", function(data) {
    });
  }


  function devourBurger() {
    var listItemData = $(this);
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    })
    .done(getBurgers);
  }
});