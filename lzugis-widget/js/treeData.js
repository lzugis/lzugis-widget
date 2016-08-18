var treeData =[
    {
        name:"WIDGET",
        open:true,
        children: [
            {
                name:"zTree",
                open:true,
                children: [
                    {
                        name:"普通树",
                        open:false,
                        children: [
                            {
                                name:"最简单的树-标准JSON数据",
                                src:"example/ztree/standardData.html"
                            },
                            {
                                name:"最简单的树-简化JSON数据",
                                src:"example/ztree/simpleData.html"
                            },
                            {
                                name:"点击树",
                                src:"example/ztree/clickTree.html"
                            },
                            {
                                name:"自定义图标",
                                src:"example/ztree/userIcon.html"
                            }
                        ]
                    },
                    {
                        name:"复/单选框的树",
                        open:false,
                        children: [
                            {
                                name:"复选框的树",
                                src:"example/ztree/chkbox.html"
                            },
                            {
                                name:"设置选中状态",
                                src:"example/ztree/setchk.html"
                            },
                            {
                                name:"单选框的树",
                                src:"example/ztree/radiotree.html"
                            }
                        ]
                    }
                ]
            },
            {
                name:"HighCharts",
                open:true,
                children: [
                    {
                        name:"常用设置",
                        open:false,
                        children: [
                            {
                                name:"图标版权信息",
                                src:"example/highcharts/credits.html"
                            },
                            {
                                name:"图片导出设置",
                                src:"example/highcharts/export.html"
                            }
                        ]
                    },
                    {
                        name:"柱状图",
                        open:false,
                        children: [
                            {
                                name:"纵向柱状图",
                                src:"example/highcharts/barchart.html"
                            },
                            {
                                name:"堆积纵向向柱状图",
                                src:"example/highcharts/stackbar.html"
                            },
                            {
                                name:"横向柱状图",
                                src:"example/highcharts/columnchart.html"
                            },
                            {
                                name:"堆积横向柱状图",
                                src:"example/highcharts/stackcolumn.html"
                            },
                            {
                                name:"3D横向柱状图",
                                src:"example/highcharts/3dcolumnchart.html"
                            },
                            {
                                name:"3D堆积横向柱状图",
                                src:"example/highcharts/3dstackcolumn.html"
                            }
                        ]
                    },
                    {
                        name:"饼状图",
                        open:false,
                        children: [
                            {
                                name:"饼状图",
                                src:"example/highcharts/piechart.html"
                            },
                            {
                                name:"3D饼状图",
                                src:"example/highcharts/3dpiechart.html"
                            },
                            {
                                name:"3D环状图",
                                src:"example/highcharts/3dpiedonut.html"
                            }
                        ]
                    },
                    {
                        name:"线状图",
                        open:false,
                        children: [
                            {
                                name:"折线图",
                                src:"example/highcharts/line.html"
                            },
                            {
                                name:"圆滑曲线图",
                                src:"example/highcharts/spline.html"
                            },
                            {
                                name:"带标签的折线图",
                                src:"example/highcharts/labelline.html"
                            }
                        ]
                    },
                    {
                        name:"区域图",
                        open:false,
                        children: [
                            {
                                name:"区域图",
                                src:"example/highcharts/areachart.html"
                            },
                            {
                                name:"光滑区域图",
                                src:"example/highcharts/areaspline.html"
                            },
                            {
                                name:"堆积区域图",
                                src:"example/highcharts/stackarea.html"
                            },
                            {
                                name:"范围区域图",
                                src:"example/highcharts/arearange.html"
                            },
                            {
                                name:"区域折线图",
                                src:"example/highcharts/arealine.html"
                            }
                        ]
                    },
                    {
                        name:"灯泡图",
                        open:false,
                        children: [
                            {
                                name:"灯泡图",
                                src:"example/highcharts/bubble.html"
                            },
                            {
                                name:"3D灯泡图",
                                src:"example/highcharts/3dbubble.html"
                            }
                        ]
                    }
                ]
            },
            {
                name:"dojo-chart",
                open:false,
                children: [
                    {
                        name: "水平柱状图",
                        src: "example/dojochart/barchart.html"
                    },
                    {
                        name: "水平聚类柱状图",
                        src: "example/dojochart/clusterbar.html"
                    },
                    {
                        name: "水平堆积柱状图",
                        src: "example/dojochart/stackbar.html"
                    },
                    {
                        name: "竖直柱状图",
                        src: "example/dojochart/columnchart.html"
                    },
                    {
                        name: "竖直聚类柱状图",
                        src: "example/dojochart/clustercolumn.html"
                    },
                    {
                        name: "竖直堆积柱状图",
                        src: "example/dojochart/stackcolumn.html"
                    },
                    {
                        name: "饼状图",
                        src: "example/dojochart/piechart.html"
                    },
                    {
                        name: "区域图",
                        src: "example/dojochart/areachart.html"
                    },
                    {
                        name: "堆积区域图",
                        src: "example/dojochart/stackarea.html"
                    }
                ]
            },
            {
                name:"jquery UI",
                open:false,
                children: [
                    {
                        name: "按钮",
                        src: "example/jqueryui/buttons.html"
                    },
                    {
                        name: "对话框",
                        src: "example/jqueryui/dialog.html"
                    },
                    {
                        name: "带模态层的对话框",
                        src: "example/jqueryui/modaldialog.html"
                    },
                    {
                        name: "滑动块",
                        src: "example/jqueryui/slider.html"
                    },
                    {
                        name: "进度条",
                        src: "example/jqueryui/progressbar.html"
                    },
                    {
                        name: "Accordion",
                        src: "example/jqueryui/accordion.html"
                    },
                    {
                        name: "tab",
                        src: "example/jqueryui/tab.html"
                    },
                    {
                        name: "日期选择器",
                        src: "example/jqueryui/datepickers.html"
                    },
                    {
                        name: "文件上传",
                        src: "example/jqueryui/fileinput.html"
                    },
                    {
                        name: "wijmenu",
                        src: "example/jqueryui/menu.html"
                    }
                ]
            },
            {
                name:"Easy UI",
                open:false,
                children: [
                    {
                        name: "按钮",
                        src: "example/easyui/buttons.html"
                    },
                    {
                        name: "Accordion",
                        src: "example/easyui/accordion.html"
                    },
                    {
                        name: "数据列表",
                        src: "example/easyui/datagrid.html"
                    },
                    {
                        name: "滑动块",
                        src: "example/easyui/spinner.html"
                    },
                    {
                        name: "拖拽放大",
                        src: "example/easyui/dragresize.html"
                    },
                    {
                        name: "tab",
                        src: "example/easyui/tab.html"
                    },
                    {
                        name: "menubutton",
                        src: "example/easyui/menubutton.html"
                    },
                    {
                        name: "panel",
                        src: "example/easyui/panel.html"
                    },
                    {
                        name: "信息提示",
                        src: "example/easyui/tooltips.html"
                    },
                    {
                        name: "tree",
                        src: "example/easyui/tree.html"
                    },
                    {
                        name: "window",
                        src: "example/easyui/windows.html"
                    }
                ]
            }
        ]
    },
    {
        name:"OPENLAYERS",
        open:true,
        children:[
            {
                name:"OL2",
                open:false,
                children:[
                    {
                        name: "Arcis切片",
                        src: "example/openlayers/ol2/agscache.html"
                    },{
                        name: "聚类展示",
                        src: "example/openlayers/ol2/cluster.html"
                    },{
                        name: "画圆",
                        src: "example/openlayers/ol2/drawcircle.html"
                    },{
                        name: "编辑",
                        src: "example/openlayers/ol2/edit.html"
                    },{
                        name: "地图展示",
                        src: "example/openlayers/ol2/map.html"
                    },{
                        name: "高亮展示",
                        src: "example/openlayers/ol2/vector.html"
                    },{
                        name: "WFS",
                        src: "example/openlayers/ol2/wfs.html"
                    },{
                        name: "地图全图",
                        src: "example/openlayers/ol2/fullscreen.html"
                    },{
                        name: "地图鼠标样式",
                        src: "example/openlayers/ol2/cursor.html"
                    },{
                        name: "百度POI",
                        src: "example/openlayers/ol2/bdpoi.html"
                    },{
                        name: "热力图",
                        src: "example/openlayers/ol2/heatmap.html"
                    },{
                        name: "统计图",
                        src: "example/openlayers/ol2/chart.html"
                    },{
                        name: "加载天地图",
                        src: "example/openlayers/ol2/public_map/tdt.html"
                    },{
                        name: "在线天地图",
                        src: "example/openlayers/ol2/public_map/tdtonline.html"
                    },{
                        name: "离线天地图",
                        src: "example/openlayers/ol2/public_map/tdtoffline.html"
                    }
                ]
            },
            {
                name:"OL3",
                open:false,
                children:[
                    {
                        name: "聚类展示1",
                        src: "example/openlayers/ol3/cluster.html"
                    },{
                        name: "聚类展示2",
                        src: "example/openlayers/ol3/cluster1.html"
                    },{
                        name: "卷帘工具",
                        src: "example/openlayers/ol3/swipe.html"
                    },{
                        name: "地图控制",
                        src: "example/openlayers/ol3/control.html"
                    },{
                        name: "图形绘制",
                        src: "example/openlayers/ol3/draw.html"
                    },{
                        name: "测量",
                        src: "example/openlayers/ol3/measure.html"
                    },{
                        name: "修改编辑",
                        src: "example/openlayers/ol3/modify.html"
                    },{
                        name: "多地图",
                        src: "example/openlayers/ol3/multimap.html"
                    },{
                        name: "信息框",
                        src: "example/openlayers/ol3/popup.html"
                    },{
                        name: "选择对象",
                        src: "example/openlayers/ol3/select.html"
                    },{
                        name: "wkt操作",
                        src: "example/openlayers/ol3/wkt.html"
                    },{
                        name: "加载wms",
                        src: "example/openlayers/ol3/wms.html"
                    },{
                        name: "动画效果",
                        src: "example/openlayers/ol3/animation.html"
                    },{
                        name: "动态标绘",
                        src: "example/openlayers/ol3/plot.html"
                    },{
                        name: "统计图",
                        src: "example/openlayers/ol3/chart.html"
                    },{
                        name: "加载天地图",
                        src: "example/openlayers/ol3/public_map/tdt.html"
                    },{
                        name: "在线天地图",
                        src: "example/openlayers/ol3/public_map/tdtonline.html"
                    },{
                        name: "离线天地图",
                        src: "example/openlayers/ol3/public_map/tdtoffline.html"
                    }
                ]
            }
        ]
    },
    {
        name:"ARCGIS",
        open:true,
        children:[
            {
                name:"基础功能",
                open:false,
                children:[
                    {
                        name:"地图",
                        src:"example/arcgis/map.html"
                    },{
                        name:"信息框",
                        src:"example/arcgis/InfoWindow.htm"
                    },{
                        name:"地图控制",
                        src:"example/arcgis/navigationToolbar.html"
                    },{
                        name:"比例尺",
                        src:"example/arcgis/scalebar.htm"
                    },{
                        name:"加载wms",
                        src:"example/arcgis/wms.html"
                    },{
                        name:"toc图层控制",
                        src:"example/arcgis/toctool.html"
                    },{
                        name:"查询(属性/空间)",
                        src:"example/arcgis/query.html"
                    },{
                        name:"图层标注",
                        src:"example/arcgis/lbl.html"
                    }
                ]
            },{
                name:"高级功能",
                open:false,
                children:[
                    {
                        name:"统计图",
                        src:"example/arcgis/mapchart.html"
                    },{
                        name:"缓冲区分析",
                        src:"example/arcgis/buffergp.html"
                    },{
                        name:"spline分析",
                        src:"example/arcgis/gpspline.html"
                    },{
                        name:"地理编码",
                        src:"example/arcgis/geocode.htm"
                    },{
                        name:"动态路径展示",
                        src:"example/arcgis/dynapath.html"
                    },{
                        name:"百度POI",
                        src:"example/arcgis/marker.html"
                    },{
                        name:"改变地图大小",
                        src:"example/arcgis/resizemap.html"
                    }
                ]
            }
        ]
    },
    {
        name:"leaflet",
        open:true,
        children:[{
                name:"leaflet map",
                src:"example/leaflet/map.html"
            }
        ]
    }
    ,
    {
        name:"eCharts",
        open:true,
        children:[{
            name:"map",
            src:"example/echart/index.html"
        }
        ]
    }
];