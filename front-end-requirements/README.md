# README #

### Instructions for gulp/dev tools, setup: ###

* npm i (setup project)
* gulp (start local server, build all assets in dev mode, start watchers) // якщо є еррор: 'gulp not found' -- npm install gulp -g
* gulp build (only build assets in dev mode, without watchers)
* gulp build --prod (build all assets in production mode, minified all files, etc.)

Please, before run 'gulp build --prod', run 'gulp clearcache'

# Front-end requirements, must have to use 100% #

### ЗАГАЛЬНІ ПРАВИЛА ###
* Завжди робіть правильно табуляцію;
* Використовуйте правильну IDE для всього - VS Code, WebStorm;
* Перевіряйте код на w3c валідаторі завжди;
* Використовуйте програми бля інспекту дизайн сорсів, наприклад: AvoCode/Zeplin. Або плагіни для .psd.
* Ніколи не використовуйте чистий photoshop. Можливість помилки в такому випадку критична.

### CSS правила ###
* Ніколи не давайте font-family: Arial (наприклад) кожному елементу на сайті якщо ви написали перед тим для body - font-family: Arial. Стиль фонту дається найвищому елементу;
* Ніколи не пишіть css до html селекторів (тільки в base.scss). Для прикладу .some-item a { color: red; } .some-item input { border: black; }
* Ніколи не пишіть js до класів які використовуються в css. Створюйте .js-some-item, для класу .some-item.
* Ніколи не робіть вкладеності більше 3 рівнів і безкінечні селектори .some-mainwrapper { .some-mainwrapper-block { .some-mainwrapper-block-title {} } }
Для цього використовуйте BEM: .some-mainwrapper { &__block {} &__title {} &__btn{} і т.д }
* Використовуйте по максимуму хелпер класи і дописуйте їх під проект: .h-text-bold, .h-crsr-pointer.
* Завжди пишіть font-size в rem
* Завжди використовуйте jpg в зжатому вигляді, jpg та png завжди використовуйте 2x, для всіх іконок та лого використовуйте .svg
* Ніколи не пишіть медіа в sass під кожним вкладенням, натомість пишіть media querie в кінці блоку -- дивись приклад в проекті!
* Завжди використовуйте 7-1 pattern SCSS для структури проекту: https://gist.github.com/rveitch/84cea9650092119527bc
* Завжди використовуйте BEM: http://getbem.com/ згідно з усіма його правилами. (Вийняток - модифікатори можна писати через &.is-dark синтаксис.
В комбінації з scss це дуже потужна річ:

### Приклад BEM стилів в scss ###
.block {
	&__title { } // element

	&--dark-theme { background: black; } // modifier або &.is-dark-theme { }

	&__btn {
		&-icon {
			color: green;
		}
	}
}

### Приклад BEM класів в html ###

<div class="block block--dark-theme">
	<h1 class="block__title"></h1>
	<button class="block__btn"><i class="block__btn-icon"></i></button>
</div>

### JS правила ###
* Завжди використовуйте модульну систему збірки js файлів: browserify(for gulp) або webpack.
* В даному сіді, ви можете використовувати require: для підгрузки цілого файлу, або import / export es6 синтаксис.
* Завжди пишіть модульний код і максимально перевикористовуйте функції
