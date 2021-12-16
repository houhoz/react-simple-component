/* src/index.js */
import React, { Component } from 'react'
import styles from './style/style.less' // 使用less的情况
import testPng from './assets/test.jpeg' // 使用图片的情况
console.log(`styles`, styles)

export default class MyComponent extends Component {
  render() {
    return (
      <div className={styles.wrap}>
        <h2>A new Component</h2>
        <img src={testPng} />
      </div>
    )
  }
}
