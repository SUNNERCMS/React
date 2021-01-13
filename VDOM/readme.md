
```js
"scripts": {
    "compile": "babel index.js --out-file compiled.js"
  }
```
脚本文件，`npm run compile`，使用babel将index.js文件编译的内容放在compiled.js文件中。

## 虚拟VDOM
虚拟VDOM就是记录JSX转换结果的数据对象。

**虚拟VDOM的生成过程**：
JSX在babel编译过程中，通过调用transform-react-jsx插件，将JSX转换成用React.createElement方法包裹的代码。
从 jsx 转译结果来看，这个方法的参数包括：
（1）节点类型，它的值可能是div，h1，span等等。
（2）属性对象。
（3）子节点的数组。

createElement方法返回了一个对象来保存相应的节点信息，这个数据对象也就是所谓的虚拟DOM。

render 方法的作用就是将虚拟 DOM 渲染成真实的 DOM
> render方法就是利用虚拟DOM的数据对象信息，通过判断虚拟DOM类型，创建dom元素，修改属性名，递归渲染子节点等操作，将渲染结果挂载到真正的DOM上，完成页面的展示。

参考文章：
https://www.v2ex.com/amp/t/439607
https://segmentfault.com/a/1190000014603332
