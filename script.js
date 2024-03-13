$(document).ready(() => {
  $(".slot").on("click", () => {
    $(event.currentTarget).find(".plus").toggleClass("hide");
    $(event.currentTarget).find(".minus").toggleClass("active");
    $(event.currentTarget).siblings(".answer").slideToggle();
  });
});
