## deploying with ngix acting as proxy steps
- heroku login
$ heroku buildpacks:clear
$ heroku buildpacks:add heroku/nodejs
$ heroku buildpacks:add https://github.com/hone/heroku-buildpack-static

#### heroku buildpacks:add heroku-community/nginx
- heroku create --app sloovi-takehome-exercise
heroku stack:set container --app takehoem-exercise

- heroku logs --tail (if error exists try fixing it)
- heroku open

- Best Regards web: nginx -g deamon\ off\;


## Heroku Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)


