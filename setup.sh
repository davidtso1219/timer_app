pyenv local 3.9.0

pyenv exec python3 -m venv .venv

source .venv/bin/activate

pip3 install flask

source .venv/bin/activate

pip install python-dotenv