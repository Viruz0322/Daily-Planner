var container = document.querySelector(".container")
var blocks = [7,8,9,10,12,13,14,15,16,17,18,19]

for (var i=0; i < blocks.length; i++ ) {
    var wrapper = document.createElement("div");
    wrapper.setAttribute("style", "display: flex; align-items: center; width: 100%")
    var block = document.createElement("div");
    var textbox = document.createElement('textarea');
    textbox.setAttribute("style", "flex=grow: 1; height: 100px");
    wrapper.appendChild(block);
    wrapper.appendChild(textbox)
    block.textContent = moment(blocks[i], 'HH').format('h a')
    container.appendChild(block);
}