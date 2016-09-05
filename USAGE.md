# サンプルアプリの使い方

## ソースコードの入手と実行まで

    $ git clone https://github.com/stoshiya/aws-exercise.git
    $ cd aws-exercise
    $ npm install
    $ node bin/www

    
## 動作確認

    $ curl http://localhost:3000


## 起動のヒント

    $ npm install -g pm2
    $ vim aws-excercise.json
    $ pm2 start aws-excercise.json