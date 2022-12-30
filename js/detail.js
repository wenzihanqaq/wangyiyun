 // 标题
	    var titles = document.getElementById('title').getElementsByTagName('li')
	    // 内容
	    var contents = document.getElementById('content').getElementsByTagName('li')
	    // 遍历titles是为了给标题绑定单击事件
	    for (var i = 0; i < titles.length; i++) {
	        console.log(titles[i])
	        titles[i].onclick = function () {
	            console.log(this)
	            // 判断比较一下是否是当前的被单击的
	            for (var j = 0; j < titles.length; j++) {
	                if (titles[j] == this) {
	                    this.style.color = '#000'
	                    this.style.fontWeight = '600'
	                    contents[j].style.display = 'block'
	                } else {
	                    titles[j].style.color = '#838890'
	                    contents[j].style.display = 'none'
						titles[j].style.fontWeight = '400'
	                }
	            }
	        }
	    }