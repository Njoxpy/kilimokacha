# Error Encountered


## Error -1 

```js
Uncaught SyntaxError: ambiguous indirect export: default CategoryLayout.jsx:17:7
```

> This error was caused due to incorrect use of import use callback function instead of normal function for programming to save time and clean code.



## Error - 2

```js
Uncaught Error: Absolute route path "/add-blog" nested under path "/blog" is not valid. An absolute child route path must start with the combined path of all its parent routes.
    invariant history.ts:494
    flattenRoute utils.ts:620
    flattenRoutes utils.ts:661
    flattenRoutes utils.ts:658
    flattenRoute utils.ts:643
    flattenRoutes utils.ts:661
    flattenRoutes utils.ts:658
    flattenRoute utils.ts:643
    flattenRoutes utils.ts:661
    flattenRoutes utils.ts:658
    matchRoutesImpl utils.ts:536
    matchRoutes utils.ts:516
    createRouter router.ts:835
    createBrowserRouter index.tsx:270
    <anonymous> App.jsx:15
```

```js
<Route path="/blog" >
        <Route index element={<HomeBlog />} />
        <Route path='/add-blog' element={<AddBlog />}/>
</Route>

// should be
<Route path="/blog" >
        <Route index element={<HomeBlog />} />
        <Route path='add-blog' element={<AddBlog />}/>
      </Route>
```

> use the Route path='/add-blog' is an absolute path, which tries to create /add-blog as a direct child of /. Since it's nested under /blog, it should be path='add-blog' so that it properly nests as /blog/add-blog.