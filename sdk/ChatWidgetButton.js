// import { addClasses } from './DOMHelpers'

export const body = document.getElementsByTagName('body')[0]

export const widgetHolder = document.createElement('div')
export const bubbleHolder = document.createElement('div')
export const chatBubble = document.createElement('button')
export const closeBubble = document.createElement('button')
export const chatWidgetButton = document.createElement('button')

export const createChatWidgetButton = (hideMessageBubble) => {
	// if (hideMessageBubble) {
	// 	addClasses(bubbleHolder, 'woot-hidden')
	// }
	// addClasses(bubbleHolder, 'woot--bubble-holder')

	chatWidgetButton.style.position = 'fixed'
	chatWidgetButton.style.zIndex = '3000'
	chatWidgetButton.style.bottom = '1rem'
	chatWidgetButton.style.right = '1rem'
	chatWidgetButton.style.width = '40px'
	chatWidgetButton.style.height = '40px'
	chatWidgetButton.style.background = 'red'
	chatWidgetButton.style.borderRadius = '100%'

	body.appendChild(chatWidgetButton)
}
