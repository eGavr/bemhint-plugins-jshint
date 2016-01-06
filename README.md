# bemhint-plugins-jshint

Интеграция линтера [jshint](http://jshint.com/docs/) через [bemhint](https://github.com/bem/bemhint).

## Установка

```bash
$ npm install bemhint-plugins-jshint
```

## Использование

В конфигурационном файле `.bemhint.js` подключить плагин:

```js
module.exports = {
    // конфиг

    plugins: {
        'bemhint-plugins-jshint': {
            techs: {
                '*': {
                    // правила jshint для всех технологий
                },

                'js|bemhtml.js': {
                    // правила jshint для технологий `js` и `bemhtml.js`
                },

                'css': false // не проверять технологию `css`
            }
        }
    }

    // конфиг
};
```
