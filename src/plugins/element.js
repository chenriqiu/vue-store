import  Vue  from 'vue'
import {
        Button, 
        Form, 
        FormItem,
        Input,
        Message,
        Container,
        Header,
        Aside,
        Main,
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup,
        Breadcrumb,
        BreadcrumbItem,
        Card,
        Row,
        Col,
        Table,
        TableColumn,
        Switch,
        Tooltip,
        Pagination,
        Dialog,
        MessageBox
      } from 'element-ui'

//挂载全局组件
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)

//需要全局导入message
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm