# how-to :: DEPLOY A FLASK APP ON APACHE2
---
## Overview
Flask is not built to serve -- on its own -- persistent or high-traffic sites. Apache, on the other hand, is. Luckily, Apache can be configured to use its industrial-grade machinery to serve Flask and other apps. Deploying your Flask app to an Apache2 server will allow anyone on the web to access your app at any time.

### Estimated Time Cost: _

### Prerequisites:

- You should have the LAMP stack installed

1. Run `sudo apt-get install libapache2-mod-wsgi-py3 python-dev` to install mod_wsgi
2. Enable mod_wsgi with `sudo a2enmod wsgi` (it might already be enabled)
3. Make directories for your flask app with the following commands:
    ```
    cd /var/www
    sudo mkdir FlaskApp
    cd FlaskApp
    sudo mkdir FlaskApp
    ```
    Then run
    ```
    cd FlaskApp
    sudo mkdir static templates
    ```
    to make the static and templates directories.
4. Create an `__init__.py` file and add the following:
    ```
    from flask import Flask
    app = Flask(__name__)
    @app.route("/")
		def hello():
		    return "Hello, I love SoftDev!"
		if __name__ == "__main__":
		    app.run()
    ```
5. Create a virtual environment with the following:
    ```
    sudo apt-get install python-pip
    sudo pip install virtualenv
    sudo virtualenv venv
    ```
6. Activate the virtual environment with `source venv/bin/activate`
7. Install flask by running `sudo pip install Flask`
8. Test your app by running `sudo python __init__.py`
	Don't panic if it says "This site can't be reached" when you visit the site!
9. Run `sudo nano /etc/apache2/sites-available/FlaskApp.conf` to create a config file
10. Paste the following into the config file:  
	```
	<VirtualHost *:80>
			ServerName mywebsite.com
			ServerAdmin admin@mywebsite.com
			WSGIScriptAlias / /var/www/FlaskApp/flaskapp.wsgi
			<Directory /var/www/FlaskApp/FlaskApp/>
				Order allow,deny
				Allow from all
			</Directory>
			Alias /static /var/www/FlaskApp/FlaskApp/static
			<Directory /var/www/FlaskApp/FlaskApp/static/>
				Order allow,deny
				Allow from all
			</Directory>
			ErrorLog ${APACHE_LOG_DIR}/error.log
			LogLevel warn
			CustomLog ${APACHE_LOG_DIR}/access.log combined
	</VirtualHost>
	```
    Replace mywebsite.com with your server IP or domain name
11. Run `sudo a2ensite FlaskApp` to enable the host
12. `cd ..` and create the `flaskapp.wsgi` file. Add the following into the file:
    ```
    #!/usr/bin/python
    import sys
    import logging
    logging.basicConfig(stream=sys.stderr)
    sys.path.insert(0,"/var/www/FlaskApp/")

    from FlaskApp import app as application
    application.secret_key = 'Add your secret key'
    ```
13. Run `sudo service apache2 restart` and visit the domain name or IP address to confirm it's working

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-deploy-a-flask-application-on-an-ubuntu-vps

---

Accurate as of (last update): 2022-01-19

#### Contributors:  
Michelle Lo, pd1  
Shyne Choi, pd1  
Tami Takada, pd1  
Tina Nguyen (in spirit), pd1  
