import './ui.css'

console.log("heyyyy", document.getElementById('create'));

console.log("aksdnsadhasijdnbsajdnas");

document.getElementById('create').onclick = () => {
  const textbox = document.getElementById('count') as HTMLInputElement
  const count = parseInt(textbox.value, 10)
  parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}