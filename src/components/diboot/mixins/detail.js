import { dibootApi } from '@/utils/request'
import moment from 'moment'

export default {
  data () {
    return {
      visible: false,
      model: {},
      title: '',
      spinning: false
    }
  },
  methods: {
    moment,
    async open (id) {
      const res = await dibootApi.get(`/${this.name}/${id}`)
      if (res.code === 0) {
        this.model = res.data
        console.log('详情--', this.model)
        this.title = '详情'
        this.visible = true
        this.afterOpen(id)
      } else {
        this.$notification.error({
          message: '获取详情信息失败',
          description: res.msg
        })
      }
    },
    close () {
      this.visible = false
      this.model = {}
    },
    /****
     * 打开表单之后的操作
     * @param id
     */
    afterOpen (id) {

    }
  }
}