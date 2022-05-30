import axios from 'axios'

// // axios基本使用
// axios
//   .get('http://123.207.32.32:8000/home/multidata')
//   .then((res) => console.log(res.data))

// axios
//   .get('http://httpbin.org/get', {
//     params: {
//       name: 'ziu',
//       age: 18
//     }
//   })
//   .then((res) => console.log(res.data))

// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       name: 'ziu',
//       age: 18
//     }
//   })
//   .then((res) => console.log(res.data))

// // 修改axios全局配置
axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 10000
// // axios.defaults.headers = {}

// // 每个请求也可以单独配置
// axios
//   .get('/get', {
//     params: {
//       name: 'ziu',
//       age: 18
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => console.log(res.data))

// axios
//   .post('/post', {
//     data: {
//       name: 'ziu',
//       age: 18
//     }
//   })
//   .then((res) => console.log(res.data))

// axios.all()
axios
  .all([
    axios.get('/get', {
      params: {
        name: 'ziu',
        age: 18
      },
      timeout: 5000,
      headers: {}
    }),
    axios.post('/post', {
      data: {
        name: 'ziu',
        age: 18
      }
    })
  ])
  .then((resArray) => {
    console.log(resArray[0].data)
    console.log(resArray[1].data)
  })

// axios 拦截器
axios.interceptors.request.use(
  (config) => {
    console.log('请求成功')
    return config
  },
  (err) => {
    console.log('请求出错')
    return err
  }
)

axios.interceptors.response.use(
  (config) => {
    console.log('服务器响应成功')
    return config
  },
  (err) => {
    console.log('服务器响应出错')
    return err
  }
)

axios.get('/get', {
  params: {
    name: 'ziu',
    age: 18
  },
  timeout: 5000,
  headers: {}
})
