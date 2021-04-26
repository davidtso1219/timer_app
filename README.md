# timer_app

## Final Release
https://david-first-webapp-on-heroku.herokuapp.com/

## Structure
```
unsharable_videos_app/
  app/
    static/
      index.css
      index.js
      timer.js
    templates/
      index.html
      timer.html
    __init__.py
    routes.py
  run.py
  config.py
  setup.sh
```

## Running the application
1) Run setup.sh to set up the virtual environment. Just do the following command:
```
source setup.sh
```

2) Create a file called `.env`.
```
touch .env
```

3) Open the file, and if you can find it, go to the direcotry and do command+shift+period to see the hidden files.

3) Set the environment by writing this line in `.env`.
```
FLASK_APP=app
```

5) Finally, do the following command to run the app locally!
```
flask run
```

## How to use this timer?

1) Enter your name in the home page. (This is just a basic application of the server)

2) Now enter the time period that you want to set, and click `Set` button.

3) Next, click `Start` button to start the timer and `Pause` button to pause it.

4) To restart the timer, just click `Start` button again.

I hope you enjoy!

-David