

# 移动端OA系统

**项目介绍**：

​	`利用vite+vue3进行搭建一个移动端OA项目，`

- ​	其中内置了环境的配置，开发，测试，生产环境都搭建好了，包括axios的二次封装，拦截器的基本模板也创建好了，

- ​	后端数据使用mockjs，来针对你开发环境的网络请求数据，

- ​	安装了pinia来作为数据存储的仓库，也已经帮你完成了模块化和数据的持久化

- 功能介绍：

  流程管理：审批流程管理

  企业办公：信息管理、工作签批、会议管理、车辆管理、考勤管理、绩效管理、员工管理、合同管理、采购管理、通讯录、薪资管理

  系统管理：权限管理、日志管理

- 内容展示

- ![image-20230910115500520](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115500520.png)



![image-20230910115526273](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115526273.png)

![image-20230910115545208](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115545208.png)



![image-20230910115559020](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115559020.png)

![image-20230910115633678](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115633678.png)

![image-20230910115615235](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115615235.png)

![image-20230910115707140](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115707140.png)



![image-20230910115724787](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115724787.png)



![image-20230910115739300](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115739300.png)



![image-20230910161614900](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910161614900.png)





![image-20230910115802412](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115802412.png)

![image-20230910115821525](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115821525.png)



![image-20230910115933389](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115933389.png)

![image-20230910115951613](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115951613.png)

![image-20230910120013674](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910120013674.png)



![image-20230910161353061](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910161353061.png)



![image-20230910115910443](C:\Users\JuaryLiu\AppData\Roaming\Typora\typora-user-images\image-20230910115910443.png)













运行项目：

安装所有依赖

```
yarn ||  yarn install
```

运行开发环境

```
yarn dev
```

生成环境打包

```
yarn build
```

在生产环境下运行项目

```
yarn preview
```

运行测试环境

```
yarn test
```



**注意**：

​	**提醒一下，不要过度的封装，要根据后端提供的数据进行对应的封装，因为数据是我mock的所以我就能封住我就尽量封装了，主要是美化代码，还有解决代码冗余等问题**