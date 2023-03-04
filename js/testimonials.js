class Testimonial {
    constructor(quote, image) {
        this._quote = quote
        this._image = image
    }

    get quote() {
        return this._quote
    }

    get image() {
        return this._image
    }

    get html() {
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.author}</p>
        </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, quote, image) {
        super(quote, image)
        this._author = author
    }

    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }

    get author() {
        return this._company + " Muay Thai Camp"
    }
}

const testimonial1 = new AuthorTestimonial("Deas Aditya", "Belajar, Berusaha, Berdoa", "https://media.istockphoto.com/id/641017924/id/foto/pertandingan-muay-thai-di-ring-tinju-di-thailand.jpg?s=1024x1024&w=is&k=20&c=htSHuWx_HQlLH65mQVmT1QSGaJA-KDMR79ECfdFXizI=")

const testimonial2 = new AuthorTestimonial("Deas Aditya", "Berlatih bela diri Muay Thai", "https://images.unsplash.com/photo-1601588462060-470011bd9a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")

const testimonial3 = new CompanyTestimonial("King", "Fighter", "https://media.istockphoto.com/id/911353384/id/foto/atlet-muay-thai-berlatih-di-atas-ring-tinju.jpg?s=1024x1024&w=is&k=20&c=aGP894XMq8Qb6bJevJK8XLvzTnsgYOz8qwsdmjjvqzo=")

let testimonialData = [testimonial1, testimonial2, testimonial3]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].html
}

document.getElementById("testimonials").innerHTML = testimonialHTML



