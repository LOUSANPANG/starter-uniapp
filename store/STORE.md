```js
// .vue
import { mapState, mapGetters mapMutations, mapActions } from 'vuex'
computed: {
  ...mapState({
    staTest: state => state.Test.staTest
  }),
	...mapGetters([
		getTest: 'Test/getTest'
	])
},
methods: {
  ...mapMutations({
    mutTest: 'Test/mutTest'
  }),
	...mapActions([
		actTest: 'Test/actTest', 
	])
}
// this.staTest 取值
// this.mutTest('') 设置值
// this.actTest('') 设置值
```
