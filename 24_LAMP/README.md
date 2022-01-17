# how-to :: CREATE A DIGITAL OCEAN DROPLET WITH UBUNTU AND APACHE
---
## Overview
Guide to creating an ubuntu 20.04 virtual machine ("droplet") and installing Apache2 web server on it.

### Estimated Time Cost: 30mins

### Prerequisites:
1. Log in as root with `ssh root@server_ip`
2. Create a new user with `adduser user_name`
3. Give admin priveleges with `usermod -aG sudo user_name`
4. Set up a firewall with
	```
	ufw allow OpenSSH
	ufw enable
	```
5. SSH into the user with `ssh user_name@server_ip`
6. Run the following to install Apache:
	```
	sudo apt update
	sudo apt install apache2
	```
7. Allow traffic on port 80 with `sudo ufw allow in "Apache"`
8. Run `sudo apt install mysql-server` to install MySQL
9. Run a security script that comes with MySQL with `sudo mysql_secure_installation`
10. Install PHP with `sudo apt install php libapache2-mod-php php-mysql`
11. To create a virtual host, first run `sudo mkdir /var/www/domain` to make a directory
12. Then run `sudo chown -R $USER:$USER /var/www/domain` to set yourself as the owner of the directory
13. Create a new config file, `/etc/apache2/sites-available/domain.conf`, using a command-line editor, and paste in the following:
    ```
    <VirtualHost *:80>
        ServerName domain
        ServerAlias www.domain
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/domain
        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
    ```
14. Run `sudo a2ensite domain` to enable the virtual host
15. Disable the default website with `sudo a2dissite 000-default`
16. Run `sudo apache2ctl configtest` to confirm the config file is syntactically sound
17. Reload Apache to show changes with `sudo systemctl reload apache2`

Now you can add HTML files to `/var/www/domain` to test that `http://server_domain` works.

### Resources
* https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-20-04
* https://www.digitalocean.com/community/questions/error-permission-denied-publickey-when-i-try-to-ssh
* https://www.digitalocean.com/community/questions/secure-ubuntu-server-for-non-root-user-using-only-ssh-keys?answer=22286
* https://www.digitalocean.com/community/tutorials/how-to-create-a-new-sudo-enabled-user-on-ubuntu-18-04-quickstart
* https://www.digitalocean.com/docs/droplets/how-to/
* https://www.digitalocean.com/community/questions/error-permission-denied-publickey-when-i-try-to-ssh?answer=44730
* https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/putty/
* https://www.digitalocean.com/docs/droplets/how-to/add-ssh-keys/create-with-openssh/
* https://www.digitalocean.com/docs/droplets/how-to/connect-with-ssh/openssh/

---

Accurate as of (last update): 2022-01-11

#### Contributors:
Michelle Lo, pd1    
Tami Takada, pd1  
Shyne Choi, pd1
Tina Nyugen, pd1
