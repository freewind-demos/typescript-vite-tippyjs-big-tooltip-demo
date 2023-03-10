import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import './index.css';

const button = document.querySelector("#main button");
tippy(button!, {
    trigger: 'click',
    interactive: true,
    content: `<div style="height: 2000px; width: 200px">Hello, tippy</div>`,
    allowHTML: true,
    placement: 'auto'
})
