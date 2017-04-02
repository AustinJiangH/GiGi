/*
 *
 * Author: Austin Jiang;  // ab12ab12@outlook.com
 * Date: 2017/03/31;
 * Project: China's Price Project;  // zhangguocpp.163.com
 *
 */


//particles
particlesJS.load('particles-js', 'http://127.0.0.1:4000/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

//echarts
var myChart = echarts.init(document.getElementById('chart'));
var eChartOptions= {
    backgroundColor: '#222',

    title: {
        text: '',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:600, name:'snow'},
                {value:350, name:'rain'},
                {value:300, name:'sunshine'},
                {value:400, name:'cafe'},
                {value:500, name:'strom'}
            ].sort(function (a, b) { return a.value - b.value}),
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#6f86d6',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'ease',
            animationDuration: 2000,
            animationDelay: function (idx) {return Math.random() * 200;}
        }
    ]
};

//main

var chartEle = document.querySelector('.echart');
chartTop = chartEle.offsetTop;



var blogCards = document.querySelectorAll('.blog-card');
var blogCardOffSet = document.querySelector('.blog').offsetTop;
var scroll;
setInterval( function(){
    scroll = $(window).scrollTop();
    if(scroll - blogCardOffSet > 60 && scroll - blogCardOffSet < 2000){
        for(var i = 0; i < blogCards.length; i++){
            classie.remove(blogCards[i], 'card-hide');
        }
    } else if(scroll - blogCardOffSet > 2000 || scroll - blogCardOffSet < 60){
        for(var i = 0; i < blogCards.length; i++){
            classie.add(blogCards[i],'card-hide');
        }
    }

    if(scroll - chartTop > 80 && scroll - chartTop < 600){
        myChart.setOption(eChartOptions);
    }
}, 100);

//mobile menu
var bars = document.querySelector('.bars');
var cross = document.querySelector('.cross');
var mobileMenu = document.querySelector('.mobile-menu');
bars.addEventListener('click', function () {
    classie.remove(mobileMenu, 'slide-out');
    classie.add(mobileMenu, 'slide-in');
});
cross.addEventListener('click', function () {
    classie.remove(mobileMenu, 'slide-in');
    classie.add(mobileMenu, 'slide-out');
});

