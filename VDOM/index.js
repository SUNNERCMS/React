function view() {
  return <ul id="filmList" className="list">
    <li className="main">Detective Chinatown Vol 2</li>
    <li>Ferdinand</li>
    <li>Paddington 2</li>
  </ul>
}

function flatten(arr) {
  return [].concat(...arr)
}

// JSX在babel编译过程中，通过调用transform-react-jsx插件，将JSX转换成用pragma定义函数处理的对象结构。
function h(type, props, ...children) {
  return {
    type,
    props: props || {},
    children: flatten(children)
  }
}

// render：将虚拟DOM，按照一定规则，转换为真正的DOM，展示在浏览器上。
function render(el) {
  console.log('虚拟DOM：', view());
  el.appendChild(createElement(view(0)))
}

function createElement(node) {
  if (typeof(node) === 'string') {
    return document.createTextNode(node)
  }

  let { type, props, children } = node
  const el = document.createElement(type)
  setProps(el, props)
  children.map(createElement)
    .forEach(el.appendChild.bind(el)); // 等同于下面的写法

  // let childrenMap = children.map(function(item) {
  //   return createElement(item); // 其实createElement可以直接作为回调函数来用
  // });

  // childrenMap.forEach(el.appendChild, el); //等同于下面的写法
  // // childrenMap.forEach(function(item) {
  // //   el.appendChild(item)
  // // });

  return el
}

function setProp(target, name, value) {
  if (name === 'className') {
    return target.setAttribute('class', value)
  }

  target.setAttribute(name, value)
}

function setProps(target, props) {
  Object.keys(props).forEach(key => {
    setProp(target, key, props[key])
  })
}