/**
 * Javascript
 * (c)2016 TCA ALL RIGHTS RESERVED
 * hafrans@163.com
 */

$("#submit").click(function(){
	var counts = 0;
	console.log($("#pform").serialize());

	if($("#name").val().length < 1){
		$("#name").parent().attr("class","form-group has-warning");
		$("#name").prev().html("姓名       (此字段为空哦，请填写~)");
		$("#name").focus();
	}else{
		$("#name").parent().attr("class","form-group");
		$("#name").prev().html("姓名");
		counts++;
	}

	if($("#stunum").val().length < 1){
		$("#stunum").parent().attr("class","form-group has-warning");
		$("#stunum").prev().html("学号       (此字段为空哦，请填写~)");
		$("#stunum").focus();
	}else{
		$("#stunum").parent().attr("class","form-group");
		$("#stunum").prev().html("学号");
		counts++;
	}

	if(counts <2){
		return false;
	}


		//ajax transfer

		$.ajax({
			type:"POST",
			url:"./search.php?r="+Math.random(),
			async:true,
			data:$("#pform").serialize(),
			success:showResult,
			beforeSend:function(xhr){
				$("#submit").attr("disabled",true);
				$("#submit").attr("value","查询中……");
				$("#cover").show();
			},
			error:function(xhr,err){
				$("#status").hide();
				$("#message").show();
				$("#message").html(err);
				setTimeout(function(){
					$("#submit").attr("disabled",false);
					$("#submit").attr("value","查询");
					$("#message").hide();
					$("#status").show();
					$("#cover").hide();

				},2000);
			}
		});
});
function updateChart(flag,total,boy,girl,BJ,TJ,HB,SX,NM,LN,JL,HLJ,SH,JS,ZJ,AH,FJ,JX,SD,HN,HB1,HN1,GD,GX,HN2,
					 CQ,SC,GZ,YN,XZ,SX1,GS,QH,NX,XJ,XG,AM,TW,CJN,CDZ,CLC,CLW,CWF,CHZ,CQD,CRZ,CTA,CJN1,CZB,
					 CBZ,CDY,CLY,CYT,CZZ,CWH,b2002,b2003,other){

	var chart1 = echarts.init(document.getElementById('chart1'));
	option1 = {
			title: {
        text: '所在班级出生年份分布',
        left: 'right'
    },
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			data: ['男生','女生','2002', '2003', '其它年份'],
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
				name: '男女比例',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '43%'],
				 itemStyle: {
                                         borderRadius: 0,
                                         borderColor: '#fff',
                                         borderWidth: 3
                                           },
                                label: {
                                        position: 'inside',
                                        wdith: '50',
                                        overflow: 'break',
                                        fontSize: 13,
                                        formatter: '{b} : {c}',
                                },
				labelLine: {
					show: false
				},
				data: [
					{value: boy, name: '男生'},
					{value: girl, name: '女生'}
				]
			},
			{
				name: '出生年份',
				type: 'pie',
				radius: ['60%', '48%'],
				  itemStyle: {
                                         borderRadius: 0,
                                         borderColor: '#fff',
                                         borderWidth: 3
                                           },
                                labelLine: {
                                        length: 20,
                                },
                                label: {
                                        position: 'outside',
                                        width: '60',
                                        overflow: 'break',
                                        fontSize: 13,
                                        formatter: '{b} : {c}',
                                },
				data: [
					{value: b2002, name: '2002'},
					{value: b2003, name: '2003'},
					{value: other, name: '其它年份'},

				]
			}
		]
	};
	chart1.setOption(option1);

	var chart2 = echarts.init(document.getElementById('chart2'));
	option2 = {
		title: {
        text: '2021级信院出生年份分布',
        left: 'right'
    },
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b}: {c} ({d}%)'
		},
		legend: {
			data: ['男生','女生','2002', '2003', '其它年份'],
			orient: 'vertical',
			left: 'left'
		},
		series: [
			{
				name: '男女比例',
				type: 'pie',
				selectedMode: 'single',
				radius: [0, '43%'],
				itemStyle: {
                                         borderRadius: 0,
                                         borderColor: '#fff',
                                         borderWidth: 3
                                           },
				label: {
					position: 'inside',
					wdith: '50',
					overflow: 'break',
					fontSize: 13,
					formatter: '{b} : {c}',
				},
				labelLine: {
					show: false
				}
				,
				data: [
					{value: 481, name: '男生'},
					{value: 125, name: '女生'}
				]
			},
			{
				name: '出生年份',
				type: 'pie',
				radius: ['60%', '48%'],
				 itemStyle: {
                                         borderRadius: 0,
                                         borderColor: '#fff',
                                         borderWidth: 3
                                           },
				labelLine: {
					length: 20,
				},
				label: {
					position: 'outside',
					width: '60',
					overflow: 'break',
					fontSize: 13,
					formatter: '{b} : {c}',
				},
				data: [
					{value: 224, name: '2002'},
					{value: 331, name: '2003'},
					{value: 51, name: '其它年份'},

				]
			}
		]
	};
	chart2.setOption(option2);

	if(flag == 1) {
		var citydata = [
		{name: '北京', value: BJ},
						{name: '天津', value: TJ},
						{name: '河北', value: HB},
						{name: '山西', value: SX},
						{name: '内蒙古', value: NM},
						{name: '辽宁', value: LN},
						{name: '吉林', value: JL},
						{name: '黑龙江', value: HLJ},
						{name: '上海', value: SH},
						{name: '江苏', value: JS},
						{name: '浙江', value: ZJ},
						{name: '安徽', value: AH},
						{name: '福建', value: FJ},
						{name: '江西', value: JX},
						{name: '山东', value: SD},
						{name: '河南', value: HN},
						{name: '湖北', value: HB1},
						{name: '湖南', value: HN1},
						{name: '广东', value: GD},
						{name: '广西', value: GX},
						{name: '海南', value: HN2},
						{name: '重庆', value: CQ},
						{name: '四川', value: SC},
						{name: '贵州', value: GZ},
						{name: '云南', value: YN},
						{name: '西藏', value: XZ},
						{name: '陕西', value: SX1},
						{name: '甘肃', value: GS},
						{name: '青海', value: QH},
						{name: '宁夏', value: NX},
						{name: '新疆', value: XJ},
						{name: '香港', value: XG},
						{name: '澳门', value: AM},
						{name: '台湾', value: TW},
						{name: '南海诸岛', value: 0},
];

		var chart3 = echarts.init(document.getElementById('chart3'));

		var yMax = 30;
		var dataShadow = [];

		var resultdata0 = [];
		var titledata = [];
		var bartop10 = [];

		function NumDescSort(a, b) {
			return b.value - a.value;
		}

		function NumAsceSort(a, b) {
			return a.value - b.value;
		}

		// 先进行一次降序排序，找出最大的前十个
		citydata.sort(NumDescSort);

		for (var i = 0; i < 20; i++) {
			var top10 = {
				name: citydata[i].name,
				value: citydata[i].value,
			};
			bartop10.push(top10);
			dataShadow.push(yMax);
		}

		bartop10.sort(NumAsceSort);
		for (var i = 0; i < bartop10.length; i++) {
			titledata.push(bartop10[i].name);
		}
		var option3 = {
			title: [
				{
					show: true,
					text: '所在班级地域分布',
					left: 'center'
				},
				{
					show: false,
					text: '所在班级地域分布',
					right: '20',
					textStyle: {
						color: '#666666',
						fontSize: 12,
					},
				},
			],
			tooltip: {
				formatter: '{b} : {c}人',
				backgroundColor: "#ff7f50",
				textStyle: {color: "#fff"}
			},
			legend: {
				show: false,
			},
			grid: {
				// 仅仅控制条形图的位置
				show: true,
				containLabel: false,
				right: 0,
				top: 50,
				bottom: 30,
				width: '20%',
			},
			visualMap: {
				type: 'continuous',
				min: 0,
				max: SD,
				seriesIndex: [0, 2],
				dimension: 0,
				realtime: false,
				left: 0,
				itemWidth: 18,
				itemHeight: 100,
				calculable: true,
				inRange: {
					color: ['#FF7F50', '#CD5C5C'],
					symbolSize: [100, 100],
				},
				outOfRange: {
					color: ['#eeeeee'],
					symbolSize: [100, 100],
				},
			},
			toolbox: {
				show: false,
			},

			xAxis: [
				{
					type: 'value',
					position: 'top',
					inside: false,
					axisLabel: {
						show: false,
					},
					splitLine: {
						show: false,
					},
					margin: 10,
				},
			],
			yAxis: [
				{
					type: 'category',
					boundaryGap: true,
					axisLine: {
						show: false,
					},
					axisLabel: {
						align: 'right',
						margin: 10,
						showMaxLabel: true,
					},
					data: titledata,
				},
			],

			series: [
				{
					name: '总数',
					type: 'map',
					mapType: 'china',
					left: '0',
					width: '60%',
					roam: 'move',
					mapValueCalculation: 'sum',
					zoom: 1,
					selectedMode: false,
					showLegendSymbol: false,
					label: {
						normal: {
							textStyle: {
								color: '#666',
							},
						},
						emphasis: {
							textStyle: {
								color: '#234EA5',
							},
						},
					},
					itemStyle: {
						normal: {
							areaColor: '#EEEEEE',
							borderColor: '#FFFFFF',
						},
						emphasis: {
							areaColor: '#E5F39B',
						},
					},
					data: citydata,
				},
				{
					name: '背景',
					type: 'bar',
					roam: false,
					visualMap: false,
					itemStyle: {
						color: '#eeeeee',
						opacity: 0.5,
					},
					label: {
						show: false,
					},
					emphasis: {
						itemStyle: {
							color: '#eeeeee',
							opacity: 0.5,
						},
						label: {
							show: false,
						},
					},
					silent: true,
					barWidth: 18,
					barGap: '-100%',
					data: dataShadow,
					animation: false,
				},
				{
					name: '占比',
					type: 'bar',
					roam: false,
					visualMap: false,
					// itemStyle: {
					//   color: "#60ACFC"
					// },
					barWidth: 18,
					label: {
						normal: {
							show: true,
							fontSize: 12,
							position: 'insideLeft',
						},
						emphasis: {
							show: true,
						},
					},
					data: bartop10,
				},
			],
		};
		chart3.setOption(option3);

	}


	else {
		var chart3 = echarts.init(document.getElementById('chart3'));
	
		var citydata = [
			{name: '济南市', value: CJN},
			{name: '德州市', value: CDZ},
			{name: '聊城市', value: CLC},
			{name: '莱芜市', value: CLW},
			{name: '潍坊市', value: CWF},
			{name: '菏泽市', value: CHZ},
			{name: '青岛市', value: CQD},
			{name: '日照市', value: CRZ},
			{name: '泰安市', value: CTA},
			{name: '济宁市', value: CJN1},
			{name: '淄博市', value: CZB},
			{name: '滨州市', value: CBZ},
			{name: '东营市', value: CDY},
			{name: '临沂市', value: CLY},
			{name: '烟台市', value: CYT},
			{name: '枣庄市', value: CZZ},
			{name: '威海市', value: CWH},
];	
	
		var yMax = 30;
		var dataShadow = [];

		var resultdata0 = [];
		var titledata = [];
		var bartop10 = [];

		function NumDescSort(a, b) {
			return b.value - a.value;
		}

		function NumAsceSort(a, b) {
			return a.value - b.value;
		}

		// 先进行一次降序排序，找出最大的前十个
		citydata.sort(NumDescSort);

		for (var i = 0; i < 17; i++) {
			var top10 = {
				name: citydata[i].name,
				value: citydata[i].value,
			};
			bartop10.push(top10);
			dataShadow.push(yMax);
		}

		bartop10.sort(NumAsceSort);
		for (var i = 0; i < bartop10.length; i++) {
			titledata.push(bartop10[i].name);
		}



		var option3 = {
			title: [
				{
					show: true,
					text: '所在班级地域分布',
					left: 'center'
				},
				{
					show: false,
					text: '所在班级地域分布',
					right: '20',
					textStyle: {
						color: '#666666',
						fontSize: 12,
					},
				},
			],
			tooltip: {
				formatter: '{b} : {c}人',
				backgroundColor: "#ff7f50",
				textStyle: {color: "#fff"}
			},
			legend: {
				show: false,
			},
			grid: {
				// 仅仅控制条形图的位置
				show: true,
				containLabel: false,
				right: 0,
				top: 50,
				bottom: 30,
				width: '20%',
			},
			visualMap: {
				type: 'continuous',
				min: 0,
				max: 5,
				// text: ['多', '少'],
				seriesIndex: [0, 2],
				dimension: 0,
				realtime: false,
				left: 0,
				itemWidth: 18,
				itemHeight: 100,
				calculable: true,
				inRange: {
					color: ['#FF7F50', '#CD5C5C'],
					symbolSize: [100, 100],
				},
				outOfRange: {
					color: ['#eeeeee'],
					symbolSize: [100, 100],
				},
			},
			toolbox: {
				show: false,
			},

			xAxis: [
				{
					type: 'value',
					position: 'top',
					inside: false,
					axisLabel: {
						show: false,
					},
					splitLine: {
						show: false,
					},
					margin: 10,
				},
			],
			yAxis: [
				{
					type: 'category',
					boundaryGap: true,
					axisLine: {
						show: false,
					},
					axisLabel: {
						align: 'right',
						margin: 10,
						showMaxLabel: true,
					},
					data: titledata,
				},
			],

			series: [
				{
					name: '总数',
					type: 'map',
					mapType: '山东',
					left: '0',
					width: '60%',
					roam: 'move',
					mapValueCalculation: 'sum',
					zoom: 1,
					selectedMode: false,
					showLegendSymbol: false,
					label: {
						normal: {
							textStyle: {
								color: '#666',
							},
						},
						emphasis: {
							textStyle: {
								color: '#234EA5',
							},
						},
					},
					itemStyle: {
						normal: {
							areaColor: '#EEEEEE',
							borderColor: '#FFFFFF',
						},
						emphasis: {
							areaColor: '#E5F39B',
						},
					},
					data: citydata,
				},
				{
					name: '背景',
					type: 'bar',
					roam: false,
					visualMap: false,
					itemStyle: {
						color: '#eeeeee',
						opacity: 0.5,
					},
					label: {
						show: false,
					},
					emphasis: {
						itemStyle: {
							color: '#eeeeee',
							opacity: 0.5,
						},
						label: {
							show: false,
						},
					},
					silent: true,
					barWidth: 18,
					barGap: '-100%',
					data: dataShadow,
					animation: false,
				},
				{
					name: '占比',
					type: 'bar',
					roam: false,
					visualMap: false,
					// itemStyle: {
					//   color: "#60ACFC"
					// },
					barWidth: 18,
					label: {
						normal: {
							show: true,
							fontSize: 12,
							position: 'insideLeft',
						},
						emphasis: {
							show: true,
						},
					},
					data: bartop10,
				},
			],
		}

		chart3.setOption(option3);

	}

	var chart4 = echarts.init(document.getElementById('chart4'));
	var citydata = [
		{
			name: '北京',
			value: 1,
		},
		{
			name: '天津',
			value: 10,
		},
		{
			name: '上海',
			value: 0,
		},
		{
			name: '重庆',
			value: 8,
		},
		{
			name: '河北',
			value: 19,
		},
		{
			name: '河南',
			value: 8,
		},
		{
			name: '云南',
			value: 4,
		},
		{
			name: '辽宁',
			value: 2,
		},
		{
			name: '黑龙江',
			value: 4,
		},
		{
			name: '湖南',
			value: 6,
		},
		{
			name: '安徽',
			value: 8,
		},
		{
			name: '山东',
			value: 428,
		},
		{
			name: '新疆',
			value: 2,
		},
		{
			name: '江苏',
			value: 4,
		},
		{
			name: '浙江',
			value: 6,
		},
		{
			name: '江西',
			value: 7,
		},
		{
			name: '湖北',
			value: 14,
		},
		{
			name: '广西',
			value: 6,
		},
		{
			name: '甘肃',
			value: 6,
		},
		{
			name: '山西',
			value: 9,
		},
		{
			name: '内蒙古',
			value: 4,
		},
		{
			name: '陕西',
			value: 8,
		},
		{
			name: '吉林',
			value: 4,
		},
		{
			name: '福建',
			value: 0,
		},
		{
			name: '贵州',
			value: 6,
		},
		{
			name: '广东',
			value: 16,
		},
		{
			name: '青海',
			value: 4,
		},
		{
			name: '西藏',
			value: 0,
		},
		{
			name: '四川',
			value: 7,
		},
		{
			name: '宁夏',
			value: 0,
		},
		{
			name: '海南',
			value: 0,
		},
		{
			name: '台湾',
			value: 5,
		},
		{
			name: '香港',
			value: 0,
		},
		{
			name: '澳门',
			value: 0,
		},
		{
			name: '南海诸岛',
			value: 0,
		},
	];

	var yMax = 500;
	var dataShadow = [];

	var resultdata0 = [];
	var titledata = [];
	var bartop10 = [];

	function NumDescSort(a, b) {
		return b.value - a.value;
	}

	function NumAsceSort(a, b) {
		return a.value - b.value;
	}

	// 先进行一次降序排序，找出最大的前十个
	citydata.sort(NumDescSort);

	for (var i = 0; i < 20; i++) {
		var top10 = {
			name: citydata[i].name,
			value: citydata[i].value,
		};
		bartop10.push(top10);
		dataShadow.push(yMax);
	}

	bartop10.sort(NumAsceSort);
	for (var i = 0; i < bartop10.length; i++) {
		titledata.push(bartop10[i].name);
	}

	var option4 = {
		title: [
			{
				show: true,
				text: '2021级信院地域分布',
				left: 'center'
			},
			{
				show: false,
				text: '2021级信院地域分布',
				right: '20',
				textStyle: {
					color: '#666666',
					fontSize: 12,
				},
			},
		],
		tooltip: {
			formatter: '{b} : {c}人',
			backgroundColor: "#ff7f50",
			textStyle: {color: "#fff"}
		},
		legend: {
			show: false,
		},
		grid: {
			// 仅仅控制条形图的位置
			show: true,
			containLabel: false,
			right: 0,
			top: 50,
			bottom: 30,
			width: '20%',
		},
		visualMap: {
			type: 'continuous',
			min: 0,
			max: 428,
			seriesIndex: [0, 2],
			dimension: 0,
			realtime: false,
			left: 0,
			itemWidth: 18,
			itemHeight: 100,
			calculable: true,
			inRange: {
				color: ['#FF7F50', '#CD5C5C'],
				symbolSize: [100, 100],
			},
			outOfRange: {
				color: ['#eeeeee'],
				symbolSize: [100, 100],
			},
		},
		toolbox: {
			show: false,
		},

		xAxis: [
			{
				type: 'value',
				position: 'top',
				inside: false,
				axisLabel: {
					show: false,
				},
				splitLine: {
					show: false,
				},
				margin: 10,
			},
		],
		yAxis: [
			{
				type: 'category',
				boundaryGap: true,
				axisLine: {
					show: false,
				},
				axisLabel: {
					align: 'right',
					margin: 10,
					showMaxLabel: true,
				},
				data: titledata,
			},
		],

		series: [
			{
				name: '总数',
				type: 'map',
				mapType: 'china',
				left: '0',
				width: '60%',
				roam: 'move',
				mapValueCalculation: 'sum',
				zoom: 1,
				selectedMode: false,
				showLegendSymbol: false,
				label: {
					normal: {
						textStyle: {
							color: '#666',
						},
					},
					emphasis: {
						textStyle: {
							color: '#234EA5',
						},
					},
				},
				itemStyle: {
					normal: {
						areaColor: '#EEEEEE',
						borderColor: '#FFFFFF',
					},
					emphasis: {
						areaColor: '#E5F39B',
					},
				},
				data: citydata,
			},
			{
				name: '背景',
				type: 'bar',
				roam: false,
				visualMap: false,
				itemStyle: {
					color: '#eeeeee',
					opacity: 0.5,
				},
				label: {
					show: false,
				},
				emphasis: {
					itemStyle: {
						color: '#eeeeee',
						opacity: 0.5,
					},
					label: {
						show: false,
					},
				},
				silent: true,
				barWidth: 18,
				barGap: '-100%',
				data: dataShadow,
				animation: false,
			},
			{
				name: '占比',
				type: 'bar',
				roam: false,
				visualMap: false,
				// itemStyle: {
				//   color: "#60ACFC"
				// },
				barWidth: 18,
				label: {
					normal: {
						show: true,
						fontSize: 12,
						position: 'insideLeft',
					},
					emphasis: {
						show: true,
					},
				},
				data: bartop10,
			},
		],
	};
	//把配置项给实例对象
	chart4.setOption(option4);

}

function showResult(body){
	console.log(body);
//	body = JSON.parse(body);
//	console.log(body);
	if(body.status == -1 || body.status == -2 ){
		$("#status").hide();
		$("#message").show();
		$("#message").html(body.msg);
		setTimeout(function(){
			$("#submit").attr("disabled",false);
			$("#submit").attr("value","查询");
			$("#message").hide();
			$("#status").show();
			$("#cover").hide();
		},2000);
	}else{
		/**
		 * 删除等待层
		 */
			$("#submit").attr("disabled",false);
			$("#submit").attr("value","查询");
			$("#message").hide();
			$("#ac").hide();
			$("#ad").hide();
			$("#status").show();
			$("#cover").hide();

		/**
		 * 显示结果层
		 */
		$("#request").hide();
		$("#result_name").html(body.bundle.name);
		$("#result_zy").html(body.bundle.major);
		$("#result_dormitory").html(body.bundle.dormitory);
		$("#result_dormitory1").html(body.bundle.dormitory1);
		$("#result_ren").html(body.bundle.dormitory_size);
		$("#result_stunum").html(body.bundle.stu_num);
		$("#result_teacher").html(body.bundle.teacher);
		$("#result_zhu1").html(body.bundle.zhu1);
		$("#result_zhu2").html(body.bundle.zhu2);
		$("#result_master").html(body.bundle.master);
		/*
		 * 遍历宿舍
		 */
		if(body.roommate.length < 10) {
			var mstring = "";
			for (var i = 0; i < body.roommate.length; i++) {
				mstring += body.roommate[i] + "&nbsp;&nbsp;";
				if ((i + 1) % 3 == 0) {
					mstring += "<br>";
				}
			}
			console.log(mstring);

		}
		else{
			var mstring = "未知";
		}
		var mstring1 = "";
		for(var i = 0;i<body.classmate.length;i++){
			mstring1 += body.classmate[i] + "&nbsp;&nbsp;";
			if((i+1)%4 == 0){
				mstring1 += "<br>";
			}
		}
		console.log(mstring1);

		$("#result_tomodati").html(mstring);
		$("#result_classmate").html(mstring1);
		$("#result_class").html(body.className);
		$("#result").show();
		setTimeout(function(){
		updateChart(body.flag,body.allin,body.male,body.female,body.BJ,body.TJ,body.HB,body.SX,body.NM,body.LN,
			body.JL,body.HLJ,body.SH,body.JS,body.ZJ,body.AH,body.FJ,body.JX,body.SD,body.HN,
			body.HB1,body.HN1,body.GD,body.GX,body.HN2,body.CQ,body.SC,body.GZ,body.YN,
			body.XZ,body.SX1,body.GS,body.QH,body.NX,body.XJ,body.XG,body.AM,body.TW,body.CJN,
			body.CDZ,body.CLC,body.CLW,body.CWF,body.CHZ,body.CQD,body.CRZ,body.CTA,body.CJN1,body.CZB,
			body.CBZ,body.CDY,body.CLY,body.CYT,body.CZZ,body.CWH,body.b2002,body.b2003,body.other);
		},500);

	}
}
