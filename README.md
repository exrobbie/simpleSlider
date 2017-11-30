# simpleSlider

## Usage

**HTML**
Create a div element
```html
<ul class="simpleSlider">
    <li class="slider-item"></li>
    <li class="slider-item"></li>
</ul>
```

**JS**
Call carousel method with the element
```javascript
$('.enjoy').slider(options);
```

## Options
```javascript
{
    imgList: [      //图片来源
        '/abc',
        '/abc'
    ],
    interval: 5000, //间隔切换时间,
    duration: 1200, //切换持续时间
}
```

