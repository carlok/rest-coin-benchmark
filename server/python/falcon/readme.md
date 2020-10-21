## Debian/Ubuntu installation

 1. Install

	apt install python3-virtualenv

 2. Virtual env

	virtualenv .venv
	source .venv/bin/activate

 3. Install in virtualenv

	pip3 install falcon
	pip3 install gunicorn

 4. Install in virtualenv

	gunicorn main:app 
