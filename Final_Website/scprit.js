(async () => {

    let text=document.getElementById('text');
    let leaf=document.getElementById('leaf');
    let hill1=document.getElementById('hill1');
    let hill4=document.getElementById('hill4');
    let hill5=document.getElementById('hill5');
    
    const screenHight = window.innerHeight;
    
    window.addEventListener('scroll',() =>{
        let value=window.scrollY;
    
        if (value < (screenHight - 350)) {
            leaf.style.top = value + -1.5 + 'px';
            hill1.style.top = value + 1 + 'px';
        }
    
        text.style.marginTop = value + 2.5 + 'px';
        leaf.style.left = value + 1.5 + 'px';
        hill5.style.left = value + 1.5 + 'px';
        hill4.style.left = value * -1.5 + 'px';
    
    
    });

    await new Promise(res => {
        window.addEventListener('click',() =>{
            res();
        })
    })
    
    console.log("test");

})()



// - Noel Delgado | @pixelia_me

const nodes = [].slice.call(document.querySelectorAll('li'), 0);
const directions = { 0: 'top', 1: 'right', 2: 'bottom', 3: 'left' };
const classNames = ['in', 'out'].map(p => Object.values(directions).map(d => `${p}-${d}`)).reduce((a, b) => a.concat(b));

const getDirectionKey = (ev, node) => {
  const { width, height, top, left } = node.getBoundingClientRect();
  const l = ev.pageX - (left + window.pageXOffset);
  const t = ev.pageY - (top + window.pageYOffset);
  const x = l - width / 2 * (width > height ? height / width : 1);
  const y = t - height / 2 * (height > width ? width / height : 1);
  return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

class Item {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('mouseover', ev => this.update(ev, 'in'));
    this.element.addEventListener('mouseout', ev => this.update(ev, 'out'));
  }

  update(ev, prefix) {
    this.element.classList.remove(...classNames);
    this.element.classList.add(`${prefix}-${directions[getDirectionKey(ev, this.element)]}`);
  }
}


nodes.forEach(node => new Item(node));




