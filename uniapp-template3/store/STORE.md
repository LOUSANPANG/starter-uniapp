```js
// .vue
export default {
  computed: {
    // 其他的计算属性
    // ...
    // 通过 this.counterStore 和 this.userStore 访问
    ...mapStores(useTestStore, xx)
    // 通过 this.count 和 this.double 访问
    ...mapState(useTestStore, ['staTest']),
  },
  methods: {
    // 通过 this.increment() 访问
    ...mapActions(useTestStore, ['actTest']),
  },
}
```
