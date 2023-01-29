document.addEventListener("DOMContentLoaded", function() {
    let course_button = document.querySelector("#button_cs50");
    course_button.addEventListener("click", function() {
        window.open("https://cs50.harvard.edu/indonesia/2023/", '_blank');
    })

    let my_blog_button = document.querySelector("#button_my_blog");
    my_blog_button.addEventListener("click", function() {
        window.open("https://www.mursmp17.my.id/", "_blank");
    })
});