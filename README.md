# simpleSlider

## Usage

**HTML**
创建div元素，子元素添加class="slider-item"
```html
<ul class="simpleSlider">
    <li class="slider-item"></li>
    <li class="slider-item"></li>
</ul>
```

**JS**
选中元素，调用slider方法
```javascript
$('.simpleSlider').slider(options);
```

## 选项
```javascript
{
    imgSrc: [      //图片来源
        '/abc',
        '/abc'
    ],
    interval: 5000, //间隔切换时间,
    duration: 1200, //切换持续时间
}
```

