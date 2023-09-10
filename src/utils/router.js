const pages = import.meta.glob('../views/**/page.js',{
    eager:true,
    import:'default'
  })
  const pageComps = import.meta.glob('../views/**/index.vue')
  const routes = Object.entries(pages).map(([path,meta]) => {
    const pageJsPath = path
    path = path.replace('../views','').replace('/page.js','') || '/'
    const name = path.split('/').filter(Boolean).join('-') || 'index'
    const comPath = pageJsPath.replace('page.js','index.vue')
    return {
      path, 
      name,
      component:pageComps[comPath],
      meta,
    }
  })
  console.log(routes);
  export default routes