import  Vue  from 'vue'
import {
        Button, 
        Form, 
        FormItem,
        Input,
        Message
      } from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//需要全局导入message
Vue.prototype.$message = Message
