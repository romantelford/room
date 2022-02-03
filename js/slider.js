console.log("hello");
const slider_content = [
    ["<h1>Discover innovative ways to decorate</h1><p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p><a class='hero__link--button'>Shop now <svg class='hero__link--svg'width='40' height='12' xmlns='http://www.w3.org/2000/svg'><path d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z' fill-rule='nonzero'/></svg></a>",
        "<img src='../images/desktop-image-hero-1.jpg'>"
    ],
    ["<h1>We are available all across the globe</h1><p>With stores all over the world, it 's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions ? Don 't hesitate to contact us today.</p><a class='hero__link--button'>Shop now <svg class='hero__link--svg'width='40' height='12' xmlns='http://www.w3.org/2000/svg'><path d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z' fill-rule='nonzero'/></svg></a>",
        "<img src='../images/desktop-image-hero-2.jpg'>"
    ],
    ["<h1>Manufactured with the best materials</h1><p>Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.</p><a class='hero__link--button'>Shop now <svg class='hero__link--svg'width='40' height='12' xmlns='http://www.w3.org/2000/svg'><path d='M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z' fill-rule='nonzero'/></svg></a>",
        "<img src='../images/desktop-image-hero-3.jpg'>"
    ]
];

const hero_text = document.querySelector(".hero__textblock--inner");
const hero_img = document.querySelector(".hero--img");

hero_text.innerHTML = slider_content[0][0];
hero_img.innerHTML = slider_content[0][1];

let counter = 0;

function cycleForward() {
    if (counter === 2) {
        counter = 0;
        hero_text.innerHTML = slider_content[counter][0];
        hero_img.innerHTML = slider_content[counter][1];

    } else {
        counter++;
        hero_text.innerHTML = slider_content[counter][0];
        hero_img.innerHTML = slider_content[counter][1];
    }
}

function cycleBackward() {
    if (counter === 0) {
        counter = 2;
        hero_text.innerHTML = slider_content[counter][0]
        hero_img.innerHTML = slider_content[counter][1];

    } else {
        counter--;
        hero_text.innerHTML = slider_content[counter][0];
        hero_img.innerHTML = slider_content[counter][1];
    }

}

document.getElementById("hero__box--right").addEventListener('click', cycleForward);
document.getElementById("hero__box--left").addEventListener('click', cycleBackward);