// Thay đổi nội dung búc thư ở đây
var letterContent = "Em bé vợ của anh à 💖 anh không giỏi nói những lời hoa mỹ nhưng anh thật sự thương em rất nhiều, từ lúc có em mọi thứ trong anh đều thay đổi, anh biết nhớ, biết lo và biết cố gắng hơn mỗi ngày chỉ mong em luôn ở bên anh thật lâu, có thể anh không hoàn hảo và đôi lúc còn làm em buồn nhưng anh sẽ cố gắng từng chút một để yêu em tốt hơn, chỉ cần em còn ở đây nắm tay anh thì dù có chuyện gì anh cũng không sợ nữa, em là điều dịu dàng nhất mà anh có được trong cuộc đời này, cảm ơn em vì đã đến, đã thương anh và ở lại bên anh, anh thương em nhiều lắm, nhiều hơn những gì anh có thể nói ra được 🫶"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})