let btnTema = document.querySelector(".btn-theme");

btnTema.addEventListener("click", function() {
    document.body.classList.toggle("dark")
})

let unArray = [
    [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum repudiandae eveniet corrupti eaque? Mollitia voluptatem cupiditate accusantium ipsum, eligendi quis soluta omnis doloremque itaque provident fugit cumque deserunt fugiat ea!",
        "img/pepe.jpg"
    ],
    [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum repudiandae eveniet corrupti eaque? Mollitia voluptatem cupiditate accusantium ipsum, eligendi quis soluta omnis doloremque itaque provident fugit cumque deserunt fugiat ea!",
        "img/pepe.jpg"
    ]

]

console.log( unArray[0][0] )