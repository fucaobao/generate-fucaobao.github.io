---
layout: post
title: IE8下上传图片问题
tags:  [IE8]
categories: [JavaScript]
author: fucaobao
---
&nbsp;
    最近做项目，需要上传图片，用到了jQuery插件[ajaxFileUpload](https://github.com/davgothic/AjaxFileUpload.git)，在chrome下表现良好，但是在IE8(低版本IE不考虑)下面出现了问题。

# 一、问题一

```
    //前端代码
    $.ajaxFileUpload({
        url: uploadUrl + '/sub_merchant/import_export',
        secureuri: false,
        fileElementId: 'multipartFile',//这里是name，不是id
        dataType: 'json',
        success: function(data) {
        },
        complete: function(xmlHttpRequest) {
            $("#uploadFile").replaceWith('<input type="file" id="uploadFile" name="multipartFile" class="export-btn upload">');//解决点击同一个文件，事件不触发的BUG
            $("#uploadFile").on("change", function() {
                ajaxFileUpload();
            });
        },
        error: function(data, status, e) {
        }
    });

    //后端代码
    /**
	 * 采用spring提供的上传文件的方法
	 *
	 * @param request
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping("/springUpload")
	@ResponseBody
	public OpResponse springUpload(HttpServletRequest request) throws IllegalStateException, IOException {
		// 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
		List<Map<String, String>> list = new ArrayList<>();
		// 检查form中是否有enctype="multipart/form-data"
		if (multipartResolver.isMultipart(request)) {
			//获取list数据的方法
		}
		OpResponse jsonMessage = OpResponse.suc();
		jsonMessage.setData(list);
		return jsonMessage;
	}
```

***

&nbsp;
    上述代码，在chrome中能够正常运行，在IE8中发现，前端没有收到返回(无论是success方法还是error方法)，并且提示下载文件(确实是下载，不是上传)。原因是ajaxFileUpload不支持响应头ContentType为application/json设置，不支持原因可能是为了浏览器兼容，因为ie不支持application/json格式，而firefox, chrome浏览器iframe在接收application/json格式的时候会自动将其转化为text/html格式，所以chrome下没有问题，而ie下出现问题。
	为了解决这个问题，***在后端手动设置ContentType为text/html***
&nbsp;

```
    HttpServletResponse response = getResponse();
    response.setContentType("text/html"); //设置content-type
````

# 二、问题二

&nbsp;
    在添加上述代码后，发现可以获得返回的JSON数据了，但下载文件的提示依然存在。经过研究，发现
    ***上传文件的方法不能有返回值(必须为void类型)，返回值通过response.getWriter().write(JsonUtil.toJSONString(list))返回***(具体原因暂不清楚)；

```

    //修改后的后端代码
    /**
     * 采用spring提供的上传文件的方法
     *
     * @param request
     * @return
     * @throws IllegalStateException
     * @throws IOException
     */
    @RequestMapping("/springUpload")
    @ResponseBody
    public void springUpload(HttpServletRequest request) throws IllegalStateException, IOException {
        // 将当前上下文初始化给 CommonsMutipartResolver （多部分解析器）
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        HttpServletResponse response = getResponse();
        response.setContentType("text/html"); //设置content-type
        List<Map<String, String>> list = new ArrayList<>();
        // 检查form中是否有enctype="multipart/form-data"
        if (multipartResolver.isMultipart(request)) {
            //获取list数据的方法
        }
        PrintWriter pw  = null;
        response.setContentType("text/html"); //设置content-type
        try {
            pw = response.getWriter();
            pw.write(JsonUtil.toJSONString(list));
        } catch (IOException e) {
            logger.error("import_export io exception",e);
        }finally{
            if(pw!=null){
                pw.close();
            }
        }
    }
}

```
&nbsp;
    至此，问题全部解决。IE下不再有下载文件的提示，同时返回正确的JSON数据。


