# Vue3+Vite+Vue Router+Axios基础环境配置

此项目用于快速搭建vite+vue3的开发环境，并通过组件示例的形式，记录一些常见的组件模板和用法。

## 1、快速开始

```bash
npm install
```

## 2、后端服务

采用flask开发api，并允许跨域访问。

```bash
pip install flask-cors
```

```python
from flask import Flask
#跨域包 pip install flask-cors
from flask_cors import *

app = Flask(__name__)
#允许跨域访问
CORS(app, supports_credentials=True)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

## 3、示例组件

router_1.vue 路由测试

router_2.vue 路由测试

test_axios.vue axios api get测试