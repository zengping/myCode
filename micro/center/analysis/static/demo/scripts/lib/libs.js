'use strict';

var libs = {
    observer: {},
    go: function go() {
        var $this = $(this),
            url = $this.attr("data-url");

        sessionStorage.appUrl = url;
        if (url == 'views/relateAnalysis/relateAnalysis' || url == 'views/relateAnalysis/tools-clue' || url == 'views/relateAnalysis/relateAnalysis_MACSearch') {
            // window.open("http://clean.mzga.com:8080/clean");
            window.open(appApi("D_NEW_WINDOW"));
        }
        $('#sys-main').empty().load(url + ".html");
        libs.menuActive();
    },
    insertLogMessage: function(systemModule) {
        $.ajax({
            url: 'http://10.169.52.249:8080/logserver/service/writeDatabase',
            type: 'get',
            dataType:'jsonp',
            jsonp: "callback",
            data: {"userName":sessionStorage.username,"ipAddress":"","systemName":"数据资源系统","systemModule":systemModule},
            success:function(data) {
                console.log(data);
            },
            error:function(e) {
                console.log(e);
            }
        });
    },
    menuActive: function menuActive(nowPage) {
        nowPage = nowPage ? nowPage : sessionStorage.appUrl ? sessionStorage.appUrl : "";
        var menuStatus = false;

        setTimeout(function () {
            $("#sys-menu ul.sys-menu-child li a").each(function () {
                var url = $(this).attr('data-url');
                if (nowPage === url) {
                    $("#sys-menu li").removeClass("active");
                    $(this).parent().parent().parent().addClass('active');
                    $(this).parent().addClass('active');
                    menuStatus = true;
                    libs.insertLogMessage($(this).text());
                }
            });
            if (!menuStatus) {
                $("#sys-menu .parentMenu").each(function () {
                    var url = $(this).attr('data-url');
                    if (nowPage === url) {
                        $("#sys-menu li").removeClass("active");
                        $(this).parent().addClass('active');
                        menuStatus = true;
                        libs.insertLogMessage($(this).text());
                    }
                });
            }
            if (menuStatus) {
                $(".curLine").css({
                    "width": $("#sys-menu > ul > li.active").width(),
                    "left": $("#sys-menu > ul > li.active").position().left
                });
            } else {
                var jqyp = ['views/dataSearch/dataSearch-view', 'views/dataSearch/dataSearch-list'];
                if (jqyp.indexOf(nowPage) > -1) {
                    nowPage = "views/dataSearch/dataSearch";
                }
                var lflk = ['views/dataSearch/dataSearch-feature', 'views/relateAnalysis/tools-clue'];
                if (lflk.indexOf(nowPage) > -1) {
                    nowPage = "views/relateAnalysis/relateAnalysis";
                }
                var gjfx = ['views/caseSearch/myFloder'];
                if (gjfx.indexOf(nowPage) > -1) {
                    nowPage = "views/caseSearch/caseSearch";
                }
                var txtz = ['views/communication/source', 'views/communication/communication-cp'];
                if (txtz.indexOf(nowPage) > -1) {
                    nowPage = "views/communication/communication";
                }
                libs.menuActive(nowPage);
                return;
            }
            $("#sys-menu").on("mouseover", "li", function () {
                $(".curLine").stop(true).animate({
                    left: $(this).position().left,
                    width: $(this).width()
                }, 200);
            });

            $("#sys-menu").on("mouseout", "li", function () {
                $(".curLine").stop(true).animate({
                    left: $("#sys-menu > ul > li.active").length > 0 ? $("#sys-menu > ul > li.active").position().left : 0,
                    width: $("#sys-menu > ul > li.active").width()
                }, 200);
            });
        }, 500);
    },
    setPublicLink: function setPublicLink(data) {
        _.map(data, function (o) {
            if (o.systemIdentifier == "access") libs.access = o.systemUrl;
            if (o.systemIdentifier == "cleaning") libs.resource = o.systemUrl;
            if (o.systemIdentifier == "exch") libs.share = o.systemUrl;
            if (o.systemIdentifier == "analysis") libs.analysis = o.systemUrl;
            if (o.systemIdentifier == "index") libs.bigdata = o.systemUrl;
        });
    },
    fileBtn: function fileBtn(i) {
        if ($("#readFile").length < 1) {
            $("body").append("<input type='file' id='readFile' style='opacity:0'>");
        }
        $("#readFile").trigger("click");

        document.getElementById('readFile').addEventListener('change', function () {
            libs.readFile(this, function (data) {
                // var data = data.replace('\t', ',').replace('\r', ',').replace('\n', ',');
                var data = data.replace(/\r\n/g, ',');
                data = data.replace(/\n/g, ',');
                i.val(data);
            }, function () {
                alert('解析文件出错');
            });
        });
    },
    readFile: function readFile(input, sc, ec) {
        //支持chrome IE10
        if (window.FileReader) {
            var file = input.files[0];
            filename = file.name.split(".")[0];
            var reader = new FileReader();
            reader.onload = function () {
                sc(this.result);
            };
            reader.readAsText(file, 'gb2312');
        }
        //支持IE 7 8 9 10
        else if (typeof window.ActiveXObject != 'undefined') {
                var xmlDoc;
                xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                xmlDoc.async = false;
                xmlDoc.load(input.value);
                sc(xmlDoc);
            }
            //支持FF
            else if (document.implementation && document.implementation.createDocument) {
                    var xmlDoc;
                    xmlDoc = document.implementation.createDocument("", "", null);
                    xmlDoc.async = false;
                    xmlDoc.load(input.value);
                    sc(xmlDoc);
                } else {
                    ec();
                }
    },
    uploadFile: function uploadFile(obj) {
        if ($("#uploadFile").length > 0) {
            $("#uploadFile").remove();
        }
        $("body").append("<input type='file' id='uploadFile' style='opacity:0'>");
        $("#uploadFile").trigger("click");

        $('#uploadFile').on('change', function () {
            var _files = this.files;
            var reader = new FileReader();
            var step = 100 * 1024;
            var total = _files[0].size;
            var cuLoaded = 0;
            var uid = "";
            var stop = {};

            function startUpload(start) {
                $(obj.submit).attr("readonly", true);
                uploadFile(start, uid, function (res) {
                    if (stop[uid]) return;
                    cuLoaded = res.data.start;
                    if (obj.hock) {
                        obj.hock({
                            uid: uid,
                            start: start,
                            total: total,
                            file: _files[0],
                            stop: stop
                        });
                    }
                    //如果没有读完，继续
                    if (cuLoaded < total) {
                        startUpload(cuLoaded);
                    } else {
                        cuLoaded = total;
                        if (obj.callback) {
                            obj.callback(res.data, {
                                uid: uid
                            });
                        }
                    }
                });
            }
            //指定开始位置，分块读取文件
            function readBlob(start) {
                //指定开始位置和结束位置读取文件
                var blob = _files[0].slice(start, start + step);
                reader.readAsArrayBuffer(blob);
            }
            //开始读取
            function uploadFile(startIndex, uid, onSuccess) {
                var blob = sliceFile(_files[0], startIndex, startIndex + step);
                //提交到服务器
                if (!_files.length) return;
                if (_files.length === 1) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', obj.api + "&token=" + uid + "&fileName=" + _files[0].name + "&apiType=" + obj.apiType);
                    var range = "bytes " + startIndex + "-" + (startIndex + step) + "/" + total;
                    xhr.setRequestHeader("Content-Range", range);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            if (xhr.responseText.substr(0, 20).indexOf("<!DOCTYPE html>") != -1) {
                                _as.jAlert("<p>对不起，服务器接口出错！请联系技术人员！</p>");
                                throw "对不起，服务器接口出错！";
                            }
                            var result = JSON.parse(xhr.responseText);
                            if (Number(result.status.code) !== 200) {
                                _as.jAlert(result.status.message);
                                throw result.status.message;
                            }
                            if (onSuccess) onSuccess(result);
                        }
                    };
                    xhr.send(blob);
                } else {}
            }

            function sliceFile(f, startPos, endPos) {
                startPos = startPos || 0;
                endPos = endPos || 0;
                return f.slice ? f.slice(startPos, endPos) : f.webkitSlice ? f.webkitSlice(startPos, endPos) : f.mozSlice ? f.mozSlice(startPos, endPos) : f;
            }

            function getToken() {
                //提交到服务器
                if (!_files.length) return;
                if (_files.length === 1) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', obj.token + "&fileName=" + _files[0].name + "&fileSize=" + total + "&apiType=" + obj.apiType);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            if (xhr.responseText.substr(0, 20).indexOf("<!DOCTYPE html>") != -1) {
                                _as.jAlert("<p>对不起，服务器接口出错！请联系技术人员！</p>");
                                throw "对不起，服务器接口出错！";
                            }
                            var result = JSON.parse(xhr.responseText);
                            if (Number(result.status.code) !== 200) {
                                _as.jAlert(result.status.message);
                                throw result.status.message;
                            }
                            uid = result.data.token;
                            stop[uid] = false;
                            getStart();
                        }
                    };
                    xhr.send();
                } else {}
            }

            function getStart() {
                //提交到服务器
                if (!_files.length) return;
                if (_files.length === 1) {
                    var xhr = new XMLHttpRequest();
                    xhr.open('GET', obj.get + "&token=" + uid + "&fileName=" + _files[0].name + "&fileSize=" + total + "&apiType=" + obj.apiType);
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState == 4 && xhr.status == 200) {
                            if (xhr.responseText.substr(0, 20).indexOf("<!DOCTYPE html>") != -1) {
                                _as.jAlert("<p>对不起，服务器接口出错！请联系技术人员！</p>");
                                throw "对不起，服务器接口出错！";
                            }
                            var result = JSON.parse(xhr.responseText);
                            if (Number(result.status.code) !== 200) {
                                _as.jAlert(result.status.message);
                                throw result.status.message;
                            }
                            startUpload(result.data.start);
                        }
                    };
                    xhr.send();
                } else {}
            }
            getToken();
        });
    },
    showLoading: function showLoading() {
        if ($("#loading").length < 1) {
            var box = "<div class=\"alertLoading\" id=\"loading\">";
            box += "<div class=\"layerbg\"></div>";
            box += "<div class=\"layerbox\">";
            box += "<img src=\"./assets/images/loading.gif\">";
            box += "</div>";
            box += "</div>";
            $(box).appendTo("body");
        }
        $("#loading").show();
    },
    getRequest: function getRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") !== -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    },
    showText: function showText(obj) {
        var self = this;
        obj.addEventListener("mouseover", function () {
            self.bindMove(obj.text);
        });
        obj.addEventListener("mouseout", function () {
            $(".mapshow").hide();
            self.unBindMove();
        });
    },
    bindMove: function bindMove(text) {
        var self = this;
        $(".mapshow").remove();
        $("body").append("\n<div class=\"mapshow\">\n    <h3>" + text + "</h3>\n</div>\n");
        var alert = $(".mapshow");
        alert.show();
        window.setCapture ? (
        //捕捉焦点 
        window.setCapture(),
        //设置事件 
        window.onmousemove = function (ev) {
            self.mouseMove(ev || event);
        }) :
        //绑定事件 
        $(document).bind("mousemove", self.mouseMove);
    },
    mouseMove: function mouseMove(event) {
        var x = event.pageX + 12;
        var y = event.pageY + 20;
        // 拖拽元素随鼠标移动
        $(".mapshow").css({
            left: x + 'px',
            top: y + 'px'
        });
    },
    unBindMove: function unBindMove(event) {
        window.releaseCapture ? (
        //释放焦点 
        window.releaseCapture(),
        //移除事件 
        window.onmousemove = null) :
        //卸载事件 
        $(document).unbind("mousemove", self.mouseMove);
        $(".mapshow").remove();
    },
    loadComp: function loadComp(url, cb) {
        $.get(url, cb);
    },
    on: function on(name, fn) {
        this.observer[name] = fn;
    },
    emit: function emit(fn, args) {
        if (this.observer[fn]) {
            this.observer[fn].apply(this, args);
        }
    },
    destroyed: function destroyed(fn) {
        delete this.observer[fn];
    }
};