import React from 'react'
import ReactDom from 'react-dom'
import MyComponent from '../src/index'
import Demo1 from '@houhoz/react-simple-component'
console.log(`Demo1`, Demo1)

const Demo = () => {
  return (
    <div>
      <Demo1 />
      <h2>组件预览：</h2>
      <MyComponent />
    </div>
  )
}

ReactDom.render(<Demo />, document.getElementById('app'))
