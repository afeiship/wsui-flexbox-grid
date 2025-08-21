# wsui-flexbox-grid
> Webkit sass flexbox grid system.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm i @jswork/wsui-flexbox-grid
```

## usage
```html

<div class="wsui-cols-1 wsui-cols-xs-2 wsui-cols-sm-4 wsui-cols-md-5 wsui-cols-lg-6">
  <div class="col">111</div>
  <div class="col">111</div>
  <div class="col">111</div>
  <div class="col">111</div>
  <div class="col">111</div>
  <div class="col">111</div>
  <div class="col">111</div>
  <div class="col">111</div>
</div>
```

## customize
```scss
$grid-gap: 10px !default;
$grid-gap-x: $grid-gap !default;
$grid-gap-y: $grid-gap !default;
$grid-list: (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
$grid-responsive: (
  xs: 390px,
  sm: 1280px,
  md: 1440px,
  lg: 1600px
) !default;

@import '~@jswork/wsui-flexbox-grid';
```

## resources
- https://www.zhihu.com/question/29924791
- https://segmentfault.com/a/1190000002910324
- http://the-echoplex.net/flexyboxes/

## license
Code released under [the MIT license](https://github.com/afeiship/wsui-flexbox-grid/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/wsui-flexbox-grid
[version-url]: https://npmjs.org/package/@jswork/wsui-flexbox-grid

[license-image]: https://img.shields.io/npm/l/@jswork/wsui-flexbox-grid
[license-url]: https://github.com/afeiship/wsui-flexbox-grid/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/wsui-flexbox-grid
[size-url]: https://github.com/afeiship/wsui-flexbox-grid/blob/master/dist/wsui-flexbox-grid.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/wsui-flexbox-grid
[download-url]: https://www.npmjs.com/package/@jswork/wsui-flexbox-grid

