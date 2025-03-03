function checkScroll() {
	const headerElement = document.querySelector('header.header')

	if (headerElement) {
		// Перевірка наявності прокрутки
		// if (
		// 	document.documentElement.scrollHeight >
		// 	document.documentElement.clientHeight
		// ) {
		// 	headerElement.classList.add('has-scroll')
		// } else {
		// 	headerElement.classList.remove('has-scroll')
		// }

		// Додавання/видалення класу при прокрутці на 50 пікселів
		if (window.scrollY > 50) {
			headerElement.classList.add('header--scroll')
		} else {
			headerElement.classList.remove('header--scroll')
		}
	}
}

// Виклик функції при завантаженні сторінки, при зміні розміру та при прокрутці
window.addEventListener('load', checkScroll)
window.addEventListener('resize', checkScroll)
window.addEventListener('scroll', checkScroll)
