let mainContainer = document.querySelector(".main-container");
let bestSellerDiv = document.querySelector(".section-3-div");
let bestSellerContainer = document.querySelectorAll(".section-3-container");
let bestSellerButton = document.querySelector(".section-3-button");

bestSellerButton.addEventListener("click", function () {

    bestSellerDiv.style.transform = "translateX(-100%)";
    bestSellerDiv.style.transition = "2s";
    bestSellerButton.style.display = "none";

    let leftButton = document.createElement("button");
    leftButton.innerHTML = `<img class="w-80 h-80" src="./icon/chevron_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg" alt="">`;
    leftButton.classList.add(
        "section-3-button",
        "absolute",
        "bg-white",
        "rounded-full",
        "border-1",
        "w-[2.5rem]",
        "h-[2.5rem]",
        "flex",
        "items-center",
        "justify-center",
        "top-[12rem]",
        "left-[1rem]",
        "z-10"
    );
    mainContainer.appendChild(leftButton);

    leftButton.addEventListener("click", function () {

        bestSellerDiv.style.transform = "translateX(0)";
        bestSellerDiv.style.transition = "2s";
        leftButton.style.display = "none";
        bestSellerButton.style.display = "flex";

    });
});


