export const addClasses = (elm, classes) => {
	elm.classList.add(...classes.split(' '))
}

export const toggleClass = (elm, classes) => {
	elm.classList.toggle(classes)
}
