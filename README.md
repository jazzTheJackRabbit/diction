React + Redux + Flask application

Ensure you have Python2.7 and virtualenv setup

To install the server:

```
cd diction

virtualenv env
env/bin/pip install -r require.txt
```

Start the server:

```
env/bin/python server/app.py
```

If you're going to making changes to the frontend, run gulp so it can transpile react components into src/static/js/app.js

```
gulp
```
